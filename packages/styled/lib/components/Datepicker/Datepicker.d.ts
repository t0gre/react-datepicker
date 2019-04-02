import {ResponsiveValue, TLengthStyledSystem} from 'styled-system'
import {GridTemplateColumnsProperty, HeightProperty} from 'csstype'
import {UseDatepickerProps, FormatFunction} from '@datepicker-react/hooks'
import {DatepickerPhrases} from '../../phrases'
export interface DatepickerStyles {
  daySize?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
  selectDateGridTemplateColumns?: ResponsiveValue<GridTemplateColumnsProperty<TLengthStyledSystem>>
}
export interface DatepickerProps extends UseDatepickerProps {
  phrases?: DatepickerPhrases
  displayFormat: string | FormatFunction
  styles?: DatepickerStyles
}
declare function Datepicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  focusedInput,
  numberOfMonths,
  onDateChange,
  firstDayOfWeek: firstDayOfWeekProp,
  displayFormat,
  phrases,
  styles,
}: DatepickerProps): JSX.Element
export default Datepicker
