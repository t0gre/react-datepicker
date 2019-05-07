export declare function isDateSelected(date: Date, startDate: Date | null, endDate: Date | null): boolean;
export declare function isFirstOrLastSelectedDate(date: Date, startDate: Date | null, endDate: Date | null): boolean;
export declare function isDateBlocked(date: Date, minBookingDate?: Date, maxBookingDate?: Date, isDayBlockedFn?: (date?: Date) => boolean): boolean;
export interface MonthType {
    year: number;
    month: number;
    date: Date;
}
export declare function getDateMonthAndYear(date: Date): MonthType;
export declare function getCurrentYearMonthAndDate(): MonthType;
export declare function getInitialMonths(numberOfMonths: number, startDate: Date | null): MonthType[];
export declare function getNextActiveMonth(activeMonth: MonthType[], numberOfMonths: number, counter: number): MonthType[];
export declare type FormatFunction = (date: Date) => string;
export declare function getInputValue(date: Date | null, displayFormat: string | FormatFunction, defaultValue: string): string;
