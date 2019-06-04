import {useMemo} from 'react'
import format from 'date-fns/format'
import {getDays, GetDaysProps, getWeekDays, GetWeekDaysProps} from './useMonth.utils'

export const dayFormatFn = (date: Date) => format(date, 'DD')
export const weekDayFormatFn = (date: Date) => format(date, 'dd')
export const monthLabelFormatFn = (date: Date) => format(date, 'MMMM YYYY')

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
  dayFormat = dayFormatFn,
  weekDayFormat = weekDayFormatFn,
  monthLabelFormat = monthLabelFormatFn,
}: UseMonthProps): UseMonthResult {
  const days = useMemo(() => getDays({year, month, weekStartsOn, dayFormat}), [
    year,
    month,
    weekStartsOn,
    dayFormat,
  ])
  const weekDays = useMemo(() => getWeekDays({weekStartsOn, weekDayFormat}), [
    weekStartsOn,
    weekDayFormat,
  ])

  return {
    days,
    weekDays,
    monthLabel: monthLabelFormat(new Date(year, month)),
  }
}
