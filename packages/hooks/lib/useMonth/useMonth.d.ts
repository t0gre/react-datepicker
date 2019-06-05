import {GetDaysProps, GetWeekdayLabelsProps} from './useMonth.utils'
export declare const dayLabelFormatFn: (date: Date) => string
export declare const weekdayLabelFormatFn: (date: Date) => string
export declare const monthLabelFormatFn: (date: Date) => string
export interface UseMonthResult {
  weekdayLabels: string[]
  days: (
    | number
    | {
        dayLabel: string
        date: Date
      })[]
  monthLabel: string
}
export interface UseMonthProps extends GetWeekdayLabelsProps, GetDaysProps {
  monthLabelFormat?(date: Date): string
}
export declare function useMonth({
  year,
  month,
  firstDayOfWeek,
  dayLabelFormat,
  weekdayLabelFormat,
  monthLabelFormat,
}: UseMonthProps): UseMonthResult
