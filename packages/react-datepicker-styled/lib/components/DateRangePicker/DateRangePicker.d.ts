import { UseDatepickerProps } from '@react-datepicker/hooks';
export interface DateRangePickerProps extends UseDatepickerProps {
}
declare function DateRangePicker({ startDate, endDate, minBookingDate, maxBookingDate, firstDayOfWeek, onFocusChange, numberOfMonths, focusedInput, }: DateRangePickerProps): JSX.Element;
export default DateRangePicker;
