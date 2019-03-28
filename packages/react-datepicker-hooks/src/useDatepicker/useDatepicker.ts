import {useMemo} from 'react'
import {getInitialMonths, MonthType} from './useDatepicker.utils'

export const START_DATE = 'startDate'
export const END_DATE = 'endDate'

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
  initialVisibleMonth?(numberOfMonths: number): MonthType[]
}

export function useDatepicker({
  startDate,
  endDate,
  focusedInput,
  onFocusChange,
  orientation = 'horizontal',
  numberOfMonths = 2,
  firstDayOfWeek = 1,
  initialVisibleMonth = getInitialMonths,
}: UseDatepickerProps) {
  const activeMonths = useMemo(() => getInitialMonths(numberOfMonths), [initialVisibleMonth])

  console.log(
    activeMonths,
    startDate,
    endDate,
    focusedInput,
    onFocusChange,
    orientation,
    numberOfMonths,
  )

  return {
    firstDayOfWeek,
  }
}
