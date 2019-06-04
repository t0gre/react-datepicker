import React from 'react'
import {UseDatepickerProps, FormatFunction} from '@datepicker-react/hooks'
import {DatepickerPhrases} from '../../phrases'
export interface DatepickerProps extends UseDatepickerProps {
  phrases?: DatepickerPhrases
  displayFormat?: string | FormatFunction
  onClose?(): void
  showResetDates?: boolean
  showSelectedDates?: boolean
  showClose?: boolean
  vertical?: boolean
  rtl?: boolean
  dayFormat?(date: Date): string
  weekdayLabelFormat?(date: Date): string
  monthLabelFormat?(date: Date): string
  onDayRender?(date: Date): React.ReactNode
}
declare function Datepicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  focusedInput,
  onDatesChange,
  dayFormat,
  weekdayLabelFormat,
  monthLabelFormat,
  onDayRender,
  vertical,
  rtl,
  showResetDates,
  showClose,
  showSelectedDates,
  exactMinBookingDays,
  isDateBlocked,
  minBookingDays,
  onClose,
  numberOfMonths: numberOfMonthsProp,
  firstDayOfWeek: firstDayOfWeekProp,
  displayFormat,
  phrases,
}: DatepickerProps): JSX.Element
export default Datepicker
