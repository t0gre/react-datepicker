export declare function isDateSelected(
  date: Date,
  startDate: Date | null,
  endDate: Date | null,
): boolean
export declare function isFirstOrLastSelectedDate(
  date: Date,
  startDate: Date | null,
  endDate: Date | null,
): boolean
interface IsDateBlockedProps {
  date: Date
  startDate: Date | null
  endDate: Date | null
  minBookingDays?: number
  minBookingDate?: Date
  maxBookingDate?: Date
  isDayBlockedFn?: (date?: Date) => boolean
}
export declare function isDateBlocked({
  date,
  minBookingDate,
  maxBookingDate,
  isDayBlockedFn,
  startDate,
  endDate,
  minBookingDays,
}: IsDateBlockedProps): boolean
export interface MonthType {
  year: number
  month: number
  date: Date
}
export declare function getDateMonthAndYear(date: Date): MonthType
export declare function getCurrentYearMonthAndDate(): MonthType
export declare function getInitialMonths(
  numberOfMonths: number,
  startDate: Date | null,
): MonthType[]
export declare function getNextActiveMonth(
  activeMonth: MonthType[],
  numberOfMonths: number,
  counter: number,
): MonthType[]
export declare type FormatFunction = (date: Date) => string
export declare function getInputValue(
  date: Date | null,
  displayFormat: string | FormatFunction,
  defaultValue: string,
): string
export interface CanSelectRangeProps {
  startDate: Date
  endDate: Date | null
  isDateBlocked(date: Date): boolean
  minBookingDays: number
}
export declare function canSelectRange({
  startDate,
  endDate,
  isDateBlocked,
  minBookingDays,
}: CanSelectRangeProps): boolean
export interface IsDateHoveredProps {
  startDate: Date | null
  endDate: Date | null
  date: Date
  isDateBlocked(date: Date): boolean
  hoveredDate: Date | null
  minBookingDays: number
  exactMinBookingDays: boolean
}
export declare function isDateHovered({
  date,
  startDate,
  endDate,
  isDateBlocked,
  hoveredDate,
  minBookingDays,
}: IsDateHoveredProps): boolean
export {}
