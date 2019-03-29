import {useMemo, useCallback} from 'react'
import {
  getInitialMonths,
  MonthType,
  isDateSelected as isDateSelectedFn,
  isDateBlocked as isDateBlockedFn,
  isStartOrEndDate as isStartOrEndDateFn,
} from './useDatepicker.utils'

export const START_DATE = 'startDate'
export const END_DATE = 'endDate'

export interface UseDatepickerProps {
  minBookingDate?: Date
  maxBookingDate?: Date
  startDate: Date | null
  endDate: Date | null
  focusedInput: 'startDate' | 'endDate' | null
  onFocusChange(focusedInput: string | null): void
  orientation?: 'horizontal' | 'vertical'
  numberOfMonths?: number
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  initialVisibleMonth?(numberOfMonths: number): MonthType[]
}

export function useDatepicker({
  startDate,
  endDate,
  focusedInput,
  onFocusChange,
  minBookingDate,
  maxBookingDate,
  orientation = 'horizontal',
  numberOfMonths = 2,
  firstDayOfWeek = 1,
  initialVisibleMonth = getInitialMonths,
}: UseDatepickerProps) {
  const activeMonths = useMemo(() => getInitialMonths(numberOfMonths), [initialVisibleMonth])
  const isDateSelected = useCallback((date: Date) => isDateSelectedFn(date, startDate, endDate), [
    startDate,
    endDate,
  ])
  const isStartOrEndDate = useCallback(
    (date: Date) => isStartOrEndDateFn(date, startDate, endDate),
    [startDate, endDate],
  )
  const isDateBlocked = useCallback(
    (date: Date) => isDateBlockedFn(date, minBookingDate, maxBookingDate),
    [minBookingDate, maxBookingDate],
  )

  console.log(
    activeMonths,
    startDate,
    endDate,
    focusedInput,
    onFocusChange,
    orientation,
    numberOfMonths,
    minBookingDate,
    maxBookingDate,
  )

  return {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isStartOrEndDate,
    isDateBlocked,
  }
}
