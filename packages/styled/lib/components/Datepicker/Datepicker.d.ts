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
  initialVisibleMonth?: Date
  dayLabelFormat?(date: Date): string
  weekdayLabelFormat?(date: Date): string
  monthLabelFormat?(date: Date): string
  onDayRender?(date: Date): React.ReactNode
  unavailableDates?: Date[]
}
declare const _default: React.ForwardRefExoticComponent<
  DatepickerProps & React.RefAttributes<unknown>
>
export default _default
