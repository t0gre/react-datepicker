export declare function isDateSelected(date: Date, startDate: Date | null, endDate: Date | null): boolean;
export declare function isStartOrEndDate(date: Date, startDate: Date | null, endDate: Date | null): boolean;
export declare function isDateBlocked(date: Date, minBookingDate?: Date, maxBookingDate?: Date, isDayBlockedFn?: (date?: Date) => boolean): boolean;
export interface MonthType {
    year: number;
    month: number;
    date: Date;
}
export declare function getDateMonthAndYear(date: Date): MonthType;
export declare function getCurrentYearMonthAndDate(): MonthType;
export declare function getInitialMonths(numberOfMonths: number): MonthType[];
