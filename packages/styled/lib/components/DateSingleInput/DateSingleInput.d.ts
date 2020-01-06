import React from 'react'
import {FormatFunction, FirstDayOfWeek} from '@datepicker-react/hooks'
import {DateSingleInputPhrases} from '../../phrases'
export interface OnDateChangeProps {
  date: Date | null
  showDatepicker: boolean
}
export interface DateSingleInputProps {
  date: Date | null
  minBookingDate?: Date
  maxBookingDate?: Date
  showDatepicker: boolean
  numberOfMonths?: number
  firstDayOfWeek?: FirstDayOfWeek
  displayFormat?: string | FormatFunction
  phrases?: DateSingleInputPhrases
  showCalendarIcon?: boolean
  vertical?: boolean
  showResetDate?: boolean
  showClose?: boolean
  rtl?: boolean
  placement?: 'top' | 'bottom'
  initialVisibleMonth?: Date
  onDateChange(data: OnDateChangeProps): void
  onFocusChange(focusInput: boolean): void
  isDateBlocked?(date: Date): boolean
  onClose?(): void
  dayLabelFormat?(date: Date): string
  weekdayLabelFormat?(date: Date): string
  monthLabelFormat?(date: Date): string
  onDayRender?(date: Date): React.ReactNode
  inputId?: string
  unavailableDates?: Date[]
}
declare function DateSingleInput({
  date,
  minBookingDate,
  maxBookingDate,
  firstDayOfWeek,
  onFocusChange,
  showDatepicker,
  onDateChange,
  dayLabelFormat,
  weekdayLabelFormat,
  monthLabelFormat,
  onDayRender,
  initialVisibleMonth,
  numberOfMonths,
  showClose,
  showResetDate,
  vertical,
  rtl,
  isDateBlocked,
  onClose,
  showCalendarIcon,
  displayFormat,
  phrases,
  placement,
  inputId,
  unavailableDates,
}: DateSingleInputProps): JSX.Element
export default DateSingleInput
