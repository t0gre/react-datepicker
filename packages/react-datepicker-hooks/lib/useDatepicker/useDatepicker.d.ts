import { MonthType } from './useDatepicker.utils';
export declare const START_DATE = "startDate";
export declare const END_DATE = "endDate";
export interface UseDatepickerProps {
    minBookingDate?: Date;
    maxBookingDate?: Date;
    startDate: Date | null;
    endDate: Date | null;
    focusedInput: 'startDate' | 'endDate' | null;
    onFocusChange(focusedInput: string | null): void;
    orientation?: 'horizontal' | 'vertical';
    numberOfMonths?: number;
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    initialVisibleMonth?(numberOfMonths: number): MonthType[];
}
export declare function useDatepicker({ startDate, endDate, focusedInput, onFocusChange, minBookingDate, maxBookingDate, orientation, numberOfMonths, firstDayOfWeek, initialVisibleMonth, }: UseDatepickerProps): {
    firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    activeMonths: MonthType[];
    isDateSelected: (date: Date) => boolean;
    isStartOrEndDate: (date: Date) => boolean;
    isDateBlocked: (date: Date) => boolean;
};
