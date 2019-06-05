declare type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
export interface GetWeekDaysProps {
  firstDayOfWeek?: FirstDayOfWeek
  weekdayLabelFormat?(date: Date): string
}
export declare function getWeekDays({
  firstDayOfWeek,
  weekdayLabelFormat,
}?: GetWeekDaysProps): never[]
export interface GetDaysProps {
  year: number
  month: number
  firstDayOfWeek?: FirstDayOfWeek
  dayLabelFormat?(date: Date): string
}
export declare type CalendarDay =
  | number
  | {
      day: string
      date: Date
    }
export declare function getDays({
  year,
  month,
  firstDayOfWeek,
  dayLabelFormat,
}: GetDaysProps): CalendarDay[]
export {}
