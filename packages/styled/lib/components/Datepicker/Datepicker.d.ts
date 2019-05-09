import {UseDatepickerProps, FormatFunction} from '@datepicker-react/hooks'
import {DatepickerPhrases} from '../../phrases'
export interface DatepickerProps extends UseDatepickerProps {
  phrases?: DatepickerPhrases
  displayFormat?: string | FormatFunction
  onClose?(): void
}
declare function Datepicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  focusedInput,
  onDateChange,
  minBookingDays,
  onClose,
  numberOfMonths: numberOfMonthsProp,
  firstDayOfWeek: firstDayOfWeekProp,
  displayFormat,
  phrases,
}: DatepickerProps): JSX.Element
export default Datepicker
