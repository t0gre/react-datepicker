import {useMemo} from 'react'
import format from 'date-fns/format'
import {getDays, GetDaysProps, getWeekDays, GetWeekDaysProps} from './useMonth.utils'

export interface UseMonthResult {
  weekDays: string[]
  days: (number | {day: string; date: Date})[]
  monthLabel: string
}

export interface UseMonthProps extends GetWeekDaysProps, GetDaysProps {
  monthLabelFormat?(date: Date): string
}

export function useMonth({
  year,
  month,
  weekStartsOn = 1,
  dayFormat = (date: Date) => format(date, 'DD'),
  weekDayFormat = (date: Date) => format(date, 'dd'),
  monthLabelFormat = (date: Date) => format(date, 'MMMM YYYY'),
}: UseMonthProps): UseMonthResult {
  const days = useMemo(() => getDays({year, month, weekStartsOn, dayFormat}), [
    year,
    month,
    weekStartsOn,
  ])
  const weekDays = useMemo(() => getWeekDays({weekStartsOn, weekDayFormat}), [weekStartsOn])

  return {
    days,
    weekDays,
    monthLabel: monthLabelFormat(new Date(year, month)),
  }
}
