import isWithinRange from 'date-fns/is_within_range'
import isSameDay from 'date-fns/is_same_day'
import eachDay from 'date-fns/each_day'
import isBefore from 'date-fns/is_before'
import isAfter from 'date-fns/is_after'
import getYear from 'date-fns/get_year'
import getMonth from 'date-fns/get_month'
import startOfToday from 'date-fns/start_of_today'
import startOfMonth from 'date-fns/start_of_month'
import addMonths from 'date-fns/add_months'
import format from 'date-fns/format'
import addDays from 'date-fns/add_days'

export function isDateSelected(date: Date, startDate: Date | null, endDate: Date | null) {
  if (startDate && endDate) {
    return isWithinRange(date, startDate, endDate)
  }

  return false
}

export function isFirstOrLastSelectedDate(
  date: Date,
  startDate: Date | null,
  endDate: Date | null,
) {
  return !!((startDate && isSameDay(date, startDate)) || (endDate && isSameDay(date, endDate)))
}

interface IsDateBlockedProps {
  date: Date
  startDate: Date | null
  endDate: Date | null
  minBookingDays?: number
  minBookingDate?: Date
  maxBookingDate?: Date
  isDayBlockedFn?: (date?: Date) => boolean
}
export function isDateBlocked({
  date,
  minBookingDate,
  maxBookingDate,
  isDayBlockedFn,
  startDate,
  endDate,
  minBookingDays = 1,
}: IsDateBlockedProps) {
  const compareMinDate = minBookingDate
    ? new Date(
        minBookingDate.getFullYear(),
        minBookingDate.getMonth(),
        minBookingDate.getDate(),
        0,
        0,
        0,
      )
    : minBookingDate
  const compareMaxDate = maxBookingDate
    ? new Date(
        maxBookingDate.getFullYear(),
        maxBookingDate.getMonth(),
        maxBookingDate.getDate(),
        0,
        0,
        0,
      )
    : maxBookingDate

  return !!(
    (compareMinDate && isBefore(date, compareMinDate)) ||
    (compareMaxDate && isAfter(date, compareMaxDate)) ||
    (startDate &&
      !endDate &&
      minBookingDays > 1 &&
      isWithinRange(date, startDate, addDays(startDate, minBookingDays - 2))) ||
    (isDayBlockedFn && isDayBlockedFn(date))
  )
}

export interface MonthType {
  year: number
  month: number
  date: Date
}

export function getDateMonthAndYear(date: Date): MonthType {
  const today = startOfMonth(date)
  const year = getYear(today)
  const month = getMonth(today)
  return {
    year,
    month,
    date: today,
  }
}

export function getCurrentYearMonthAndDate(): MonthType {
  return getDateMonthAndYear(startOfToday())
}

export function getInitialMonths(numberOfMonths: number, startDate: Date | null): MonthType[] {
  const firstMonth = startDate ? getDateMonthAndYear(startDate) : getCurrentYearMonthAndDate()
  let prevMonthDate = firstMonth.date
  let months = [firstMonth]

  if (numberOfMonths > 1) {
    months = Array.from(Array(numberOfMonths - 1).keys()).reduce((m: MonthType[]) => {
      prevMonthDate = addMonths(m[m.length - 1].date, 1)
      return m.concat([getDateMonthAndYear(prevMonthDate)])
    }, months)
  }

  return months
}

export function getNextActiveMonth(
  activeMonth: MonthType[],
  numberOfMonths: number,
  counter: number,
): MonthType[] {
  const prevMonth = counter > 0 ? activeMonth.length - 1 : 0
  let prevMonthDate = activeMonth[prevMonth].date

  return Array.from(Array(numberOfMonths).keys()).reduce((m: MonthType[]) => {
    prevMonthDate = addMonths(prevMonthDate, counter)
    return counter > 0
      ? m.concat([getDateMonthAndYear(prevMonthDate)])
      : [getDateMonthAndYear(prevMonthDate)].concat(m)
  }, [])
}

export type FormatFunction = (date: Date) => string
export function getInputValue(
  date: Date | null,
  displayFormat: string | FormatFunction,
  defaultValue: string,
) {
  if (date && typeof displayFormat === 'string') {
    return format(date, displayFormat)
  } else if (date && typeof displayFormat === 'function') {
    return displayFormat(date)
  } else {
    return defaultValue
  }
}

export interface CanSelectRangeProps {
  startDate: Date
  endDate: Date | null
  isDateBlocked(date: Date): boolean
  minBookingDays: number
}
export function canSelectRange({
  startDate,
  endDate,
  isDateBlocked,
  minBookingDays,
}: CanSelectRangeProps) {
  if (startDate && minBookingDays === 1 && !endDate && !isDateBlocked(startDate)) {
    return true
  } else if (startDate && minBookingDays > 1 && !endDate) {
    return eachDay(startDate, addDays(startDate, minBookingDays - 1)).reduce(
      (returnValue, date) => {
        if (!returnValue) return returnValue

        return !isDateBlocked(date)
      },
      true,
    )
  } else if (startDate && endDate) {
    const minBookingDaysDate = addDays(startDate, minBookingDays - 1)

    if (isBefore(endDate, minBookingDaysDate)) {
      return false
    }

    return eachDay(startDate, endDate).reduce((returnValue, date) => {
      if (!returnValue) return returnValue

      return !isDateBlocked(date)
    }, true)
  }

  return false
}

export interface IsDateHoveredProps {
  startDate: Date | null
  endDate: Date | null
  date: Date
  isDateBlocked(date: Date): boolean
  hoveredDate: Date | null
}
export function isDateHovered({
  date,
  startDate,
  endDate,
  isDateBlocked,
  hoveredDate,
}: IsDateHoveredProps) {
  if (
    startDate &&
    !endDate &&
    hoveredDate &&
    !isBefore(hoveredDate, startDate) &&
    isWithinRange(date, startDate, hoveredDate)
  ) {
    // @ts-ignore
    return eachDay(startDate, hoveredDate).reduce((returnValue, date) => {
      if (!returnValue) return returnValue

      return !isDateBlocked(date)
    }, true)
  }

  return false
}
