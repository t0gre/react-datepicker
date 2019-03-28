import {useMemo} from 'react'
import startOfToday from 'date-fns/start_of_today'
import getMonth from 'date-fns/get_month'
import getYear from 'date-fns/get_year'

export const START_DATE = 'startDate'
export const END_DATE = 'endDate'

export function getCurrentYearAndMonth() {
  const today = startOfToday()
  const year = getYear(today)
  const month = getMonth(today)
  return {
    year,
    month,
  }
}

interface UseDatepickerProps {
  minBookingDate?: Date
  maxBookingDate?: Date
  startDate: Date | null
  endDate: Date | null
  focusedInput: 'startDate' | 'endDate' | null
  onFocusChange(focusedInput: string): void
  orientation?: 'horizontal' | 'vertical'
  numberOfMonths?: number
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  initialVisibleMonth?(): {year: number; month: number}
}

export function useDatepicker({
  startDate,
  endDate,
  focusedInput,
  onFocusChange,
  orientation = 'horizontal',
  numberOfMonths = 2,
  firstDayOfWeek = 1,
  initialVisibleMonth = getCurrentYearAndMonth,
}: UseDatepickerProps) {
  const {year, month} = useMemo(() => initialVisibleMonth(), [])

  console.log(
    year,
    month,
    startDate,
    endDate,
    focusedInput,
    onFocusChange,
    orientation,
    numberOfMonths,
  )

  return {
    firstDayOfWeek,
    initialVisibleMonth: initialVisibleMonth(),
  }
}
