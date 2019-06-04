declare type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6
export interface GetWeekDaysProps {
  weekStartsOn?: WeekStartsOn
  weekdayLabelFormat?(date: Date): string
}
export declare function getWeekDays({weekStartsOn, weekdayLabelFormat}?: GetWeekDaysProps): never[]
export interface GetDaysProps {
  year: number
  month: number
  weekStartsOn?: WeekStartsOn
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
  weekStartsOn,
  dayLabelFormat,
}: GetDaysProps): CalendarDay[]
export {}
