import { UseDatepickerProps, FormatFunction } from '@react-datepicker/hooks';
import { DatepickerPhrases } from '../../phrases';
export interface DatepickerProps extends UseDatepickerProps {
    phrases?: DatepickerPhrases;
    displayFormat: string | FormatFunction;
}
declare function Datepicker({ startDate, endDate, minBookingDate, maxBookingDate, onFocusChange, focusedInput, numberOfMonths, firstDayOfWeek: firstDayOfWeekProp, displayFormat, phrases, }: DatepickerProps): JSX.Element;
export default Datepicker;
