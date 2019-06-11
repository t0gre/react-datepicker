import React from 'react'
import {FormatFunction} from '@datepicker-react/hooks'
import {DateSingleInputPhrases} from '../../phrases'
import {FirstDayOfWeek, MonthType} from '@datepicker-react/hooks/src'
export interface OnDateChangeProps {
  date: Date | null
  showDatepicker: boolean
}
export interface DateRangeInputProps {
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
  onDateChange(data: OnDateChangeProps): void
  onFocusChange(focusInput: boolean): void
  initialVisibleMonth?(numberOfMonths: number): MonthType[]
  isDateBlocked?(date: Date): boolean
  onClose?(): void
  dayLabelFormat?(date: Date): string
  weekdayLabelFormat?(date: Date): string
  monthLabelFormat?(date: Date): string
  onDayRender?(date: Date): React.ReactNode
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
}: DateRangeInputProps): JSX.Element
export default DateSingleInput
