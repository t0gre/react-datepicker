import {
  isWithinRange,
  isSameDay,
  isBefore,
  isAfter,
  getYear,
  getMonth,
  startOfToday,
  startOfMonth,
  addMonths,
} from 'date-fns'

export function isDateSelected(date: Date, startDate: Date | null, endDate: Date | null) {
  if (startDate && endDate) {
    return isWithinRange(date, startDate, endDate)
  }

  return false
}

export function isStartOrEndDate(date: Date, startDate: Date | null, endDate: Date | null) {
  return !!((startDate && isSameDay(date, startDate)) || (endDate && isSameDay(date, endDate)))
}

export function isDateBlocked(
  date: Date,
  minBookingDate?: Date,
  maxBookingDate?: Date,
  isDayBlockedFn?: (date?: Date) => boolean,
) {
  return !!(
    (minBookingDate && isBefore(date, minBookingDate)) ||
    (maxBookingDate && isAfter(date, maxBookingDate)) ||
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

export function getInitialMonths(numberOfMonths: number): MonthType[] {
  const firstMonth = getCurrentYearMonthAndDate()
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
