import {GetDaysProps, GetWeekDaysProps} from './useMonth.utils'
export declare const dayFormatFn: (date: Date) => string
export declare const weekdayLabelFormatFn: (date: Date) => string
export declare const monthLabelFormatFn: (date: Date) => string
export interface UseMonthResult {
  weekDays: string[]
  days: (
    | number
    | {
        day: string
        date: Date
      })[]
  monthLabel: string
}
export interface UseMonthProps extends GetWeekDaysProps, GetDaysProps {
  monthLabelFormat?(date: Date): string
}
export declare function useMonth({
  year,
  month,
  weekStartsOn,
  dayFormat,
  weekdayLabelFormat,
  monthLabelFormat,
}: UseMonthProps): UseMonthResult
