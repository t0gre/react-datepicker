import {UseDatepickerProps, FormatFunction, FocusedInput} from '@datepicker-react/hooks'
import {DateRangeInputPhrases} from '../../phrases'
export interface DateRangeInputProps extends UseDatepickerProps {
  displayFormat: string | FormatFunction
  phrases?: DateRangeInputPhrases
  onFocusChange(focusInput: FocusedInput): void
}
declare function DateRangeInput({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  firstDayOfWeek,
  onFocusChange,
  numberOfMonths,
  focusedInput,
  onDateChange,
  displayFormat,
  phrases,
}: DateRangeInputProps): JSX.Element
export default DateRangeInput
