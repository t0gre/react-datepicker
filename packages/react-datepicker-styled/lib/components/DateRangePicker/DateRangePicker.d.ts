import { UseDatepickerProps, FormatFunction } from '@react-datepicker/hooks';
import { Phrases } from '../../phrases';
export interface DateRangePickerProps extends UseDatepickerProps {
    displayFormat: string | FormatFunction;
    phrases?: Phrases;
}
declare function DateRangePicker({ startDate, endDate, minBookingDate, maxBookingDate, firstDayOfWeek, onFocusChange, numberOfMonths, focusedInput, displayFormat, phrases }: DateRangePickerProps): JSX.Element;
export default DateRangePicker;
