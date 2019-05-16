import {useState, useCallback} from 'react'
import isBefore from 'date-fns/is_before'
import isAfter from 'date-fns/is_after'
import addDays from 'date-fns/add_days'
import isWithinRange from 'date-fns/is_within_range'
import isSameDay from 'date-fns/is_same_day'
import {
  getInitialMonths,
  MonthType,
  getNextActiveMonth,
  isDateSelected as isDateSelectedFn,
  isDateBlocked as isDateBlockedFn,
  isFirstOrLastSelectedDate as isFirstOrLastSelectedDateFn,
  canSelectRange,
  isDateHovered as isDateHoveredFn,
} from './useDatepicker.utils'

export const START_DATE = 'startDate'
export const END_DATE = 'endDate'

export type FocusedInput = 'startDate' | 'endDate' | null

export interface OnDateChange {
  focusedInput: FocusedInput
  startDate: Date | null
  endDate: Date | null
}

export type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface UseDatepickerProps {
  onDateChange(data: OnDateChange): void
  minBookingDate?: Date
  maxBookingDate?: Date
  startDate: Date | null
  endDate: Date | null
  focusedInput: FocusedInput
  numberOfMonths?: number
  minBookingDays?: number
  exactMinBookingDays?: boolean
  firstDayOfWeek?: FirstDayOfWeek
  initialVisibleMonth?(numberOfMonths: number): MonthType[]
  isDayBlocked?(date: Date): boolean
}

export function useDatepicker({
  startDate,
  endDate,
  focusedInput,
  minBookingDate,
  maxBookingDate,
  onDateChange,
  exactMinBookingDays = false,
  minBookingDays = 1,
  numberOfMonths = 2,
  firstDayOfWeek = 1,
  isDayBlocked: isDayBlockedProps = () => false,
}: UseDatepickerProps) {
  const [activeMonths, setActiveMonths] = useState(() =>
    getInitialMonths(numberOfMonths, startDate),
  )
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)
  const isDateSelected = useCallback((date: Date) => isDateSelectedFn(date, startDate, endDate), [
    startDate,
    endDate,
  ])

  const isFirstOrLastSelectedDate = useCallback(
    (date: Date) => isFirstOrLastSelectedDateFn(date, startDate, endDate),
    [startDate, endDate],
  )

  const isDateBlocked = useCallback(
    (date: Date) =>
      isDateBlockedFn({
        date,
        minBookingDate,
        maxBookingDate,
        startDate,
        endDate,
        minBookingDays,
        isDayBlockedFn: isDayBlockedProps,
      }),
    [minBookingDate, maxBookingDate, startDate, endDate, minBookingDays, isDayBlockedProps],
  )

  const isDateHovered = useCallback(
    (date: Date) =>
      isDateHoveredFn({
        date,
        hoveredDate,
        startDate,
        endDate,
        minBookingDays,
        exactMinBookingDays,
        isDateBlocked: isDayBlockedProps,
      }),
    [hoveredDate, startDate, endDate, minBookingDays, exactMinBookingDays, isDayBlockedProps],
  )

  function onResetDates() {
    onDateChange({
      startDate: null,
      endDate: null,
      focusedInput: START_DATE,
    })
  }

  function onDaySelect(date: Date) {
    if (
      (focusedInput === END_DATE || focusedInput === START_DATE) &&
      minBookingDays > 0 &&
      exactMinBookingDays &&
      canSelectRange({
        minBookingDays,
        isDateBlocked: isDayBlockedProps,
        startDate: date,
        endDate: null,
      })
    ) {
      onDateChange({
        startDate: date,
        endDate: addDays(date, minBookingDays - 1),
        focusedInput: null,
      })
    } else if (
      ((focusedInput === END_DATE && startDate && isBefore(date, startDate)) ||
        (focusedInput === START_DATE && endDate && isAfter(date, endDate))) &&
      canSelectRange({
        minBookingDays,
        isDateBlocked: isDayBlockedProps,
        startDate: date,
        endDate: null,
      })
    ) {
      onDateChange({
        endDate: null,
        startDate: date,
        focusedInput: END_DATE,
      })
    } else if (
      focusedInput === START_DATE &&
      canSelectRange({minBookingDays, isDateBlocked: isDayBlockedProps, endDate, startDate: date})
    ) {
      onDateChange({
        endDate,
        startDate: date,
        focusedInput: END_DATE,
      })
    } else if (
      focusedInput === START_DATE &&
      canSelectRange({
        minBookingDays,
        isDateBlocked: isDayBlockedProps,
        endDate: null,
        startDate: date,
      })
    ) {
      onDateChange({
        endDate: null,
        startDate: date,
        focusedInput: END_DATE,
      })
    } else if (
      focusedInput === END_DATE &&
      startDate &&
      !isBefore(date, startDate) &&
      canSelectRange({minBookingDays, isDateBlocked: isDayBlockedProps, startDate, endDate: date})
    ) {
      onDateChange({
        startDate,
        endDate: date,
        focusedInput: null,
      })
    }
  }

  function onDayHover(date: Date) {
    if (
      // exact range
      (exactMinBookingDays &&
        (minBookingDays <= 1 ||
          (minBookingDate &&
            maxBookingDate &&
            (!isWithinRange(date, minBookingDate, maxBookingDate) ||
              !isWithinRange(
                addDays(date, minBookingDays - 1),
                minBookingDate,
                maxBookingDate,
              ))))) ||
      // normal range
      (!exactMinBookingDays &&
        (!startDate ||
          endDate ||
          (minBookingDate &&
            maxBookingDate &&
            !isWithinRange(date, minBookingDate, maxBookingDate)) ||
          (!isSameDay(date, startDate) &&
            (minBookingDays > 1 &&
              startDate &&
              isWithinRange(date, startDate, addDays(startDate, minBookingDays - 2))))))
    ) {
      setHoveredDate(null)
    } else {
      setHoveredDate(date)
    }
  }

  function goToPreviousMonths() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, -1))
  }

  function goToNextMonths() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, 1))
  }

  return {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    numberOfMonths,
    onResetDates,
    onDayHover,
    onDaySelect,
    goToPreviousMonths,
    goToNextMonths,
  }
}
