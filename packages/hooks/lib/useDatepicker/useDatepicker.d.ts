export declare const START_DATE = 'startDate'
export declare const END_DATE = 'endDate'
export declare type FocusedInput = 'startDate' | 'endDate' | null
export interface OnDatesChangeProps {
  focusedInput: FocusedInput
  startDate: Date | null
  endDate: Date | null
}
export declare type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
export interface UseDatepickerProps {
  onDatesChange(data: OnDatesChangeProps): void
  minBookingDate?: Date
  maxBookingDate?: Date
  startDate: Date | null
  endDate: Date | null
  focusedInput: FocusedInput
  numberOfMonths?: number
  minBookingDays?: number
  exactMinBookingDays?: boolean
  firstDayOfWeek?: FirstDayOfWeek
  initialVisibleMonth?: Date
  isDateBlocked?(date: Date): boolean
  unavailableDates?: Date[]
  changeActiveMonthOnSelect?: boolean
}
export declare function useDatepicker({
  startDate,
  endDate,
  focusedInput,
  minBookingDate,
  maxBookingDate,
  onDatesChange,
  initialVisibleMonth,
  exactMinBookingDays,
  minBookingDays,
  numberOfMonths,
  firstDayOfWeek,
  isDateBlocked: isDateBlockedProps,
  unavailableDates,
  changeActiveMonthOnSelect,
}: UseDatepickerProps): {
  firstDayOfWeek: FirstDayOfWeek
  activeMonths: import('./useDatepicker.utils').MonthType[]
  isDateSelected: (date: Date) => boolean
  isDateHovered: (date: Date) => boolean
  isFirstOrLastSelectedDate: (date: Date) => boolean
  isStartDate: (date: Date) => boolean
  isEndDate: (date: Date) => boolean
  isDateBlocked: (date: Date) => boolean
  numberOfMonths: number
  isDateFocused: (date: Date) => boolean
  focusedDate: Date | null
  hoveredDate: Date | null
  onResetDates: () => void
  onDateHover: (date: Date | null) => void
  onDateSelect: (date: Date) => void
  onDateFocus: (date: Date) => void
  goToPreviousMonths: () => void
  goToPreviousMonthsByOneMonth: () => void
  goToNextMonths: () => void
  goToNextMonthsByOneMonth: () => void
  goToDate: (date: Date) => void
  goToPreviousYear: (numYears?: number) => void
  goToNextYear: (numYears?: number) => void
}
