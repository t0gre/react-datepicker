import {MonthType} from './useDatepicker.utils'
export declare const START_DATE = 'startDate'
export declare const END_DATE = 'endDate'
export declare type FocusedInput = 'startDate' | 'endDate' | null
export interface OnDateChange {
  focusedInput: FocusedInput
  startDate: Date | null
  endDate: Date | null
}
export interface UseDatepickerProps {
  onDateChange(data: OnDateChange): void
  minBookingDate?: Date
  maxBookingDate?: Date
  startDate: Date | null
  endDate: Date | null
  focusedInput: FocusedInput
  orientation?: 'horizontal' | 'vertical'
  numberOfMonths?: number
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  initialVisibleMonth?(numberOfMonths: number): MonthType[]
}
export declare function useDatepicker({
  startDate,
  endDate,
  focusedInput,
  minBookingDate,
  maxBookingDate,
  onDateChange,
  numberOfMonths,
  firstDayOfWeek,
}: UseDatepickerProps): {
  firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6
  activeMonths: MonthType[]
  isDateSelected: (date: Date) => boolean
  isStartOrEndDate: (date: Date) => boolean
  isDateBlocked: (date: Date) => boolean
  onResetDates: () => void
  onDaySelect: (date: Date) => void
  goToPreviousMonths: () => void
  goToNextMonths: () => void
}
