import {GetDaysProps, GetWeekDaysProps} from './useMonth.utils'
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
  weekDayFormat,
  monthLabelFormat,
}: UseMonthProps): UseMonthResult
