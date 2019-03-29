import { UseDatepickerProps, FormatFunction } from '@react-datepicker/hooks';
import { DateRangeInputPhrases } from '../../phrases';
export interface DateRangePickerProps extends UseDatepickerProps {
    displayFormat: string | FormatFunction;
    phrases?: DateRangeInputPhrases;
}
declare function DateRangeInput({ startDate, endDate, minBookingDate, maxBookingDate, firstDayOfWeek, onFocusChange, numberOfMonths, focusedInput, displayFormat, phrases, }: DateRangePickerProps): JSX.Element;
export default DateRangeInput;
