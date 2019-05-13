import {UseDatepickerProps, FormatFunction, FocusedInput} from '@datepicker-react/hooks'
import {DateRangeInputPhrases} from '../../phrases'
export interface DateRangeInputProps extends UseDatepickerProps {
  displayFormat?: string | FormatFunction
  phrases?: DateRangeInputPhrases
  onFocusChange(focusInput: FocusedInput): void
  showStartDateCalendarIcon?: boolean
  showEndDateCalendarIcon?: boolean
  onClose?(): void
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
  isDayBlocked,
  minBookingDays,
  onClose,
  showStartDateCalendarIcon,
  showEndDateCalendarIcon,
  displayFormat,
  phrases,
}: DateRangeInputProps): JSX.Element
export default DateRangeInput
