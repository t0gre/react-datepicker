import {useMemo} from 'react'
import format from 'date-fns/format'
import {getDays, GetDaysProps, getWeekdayLabels, GetWeekdayLabelsProps} from './useMonth.utils'

export const dayLabelFormatFn = (date: Date) => format(date, 'dd')
export const weekdayLabelFormatFn = (date: Date) => format(date, 'eeeeee')
export const monthLabelFormatFn = (date: Date) => format(date, 'MMMM yyyy')

export interface UseMonthResult {
  weekdayLabels: string[]
  days: (number | {dayLabel: string; date: Date})[]
  monthLabel: string
}

export interface UseMonthProps extends GetWeekdayLabelsProps, GetDaysProps {
  monthLabelFormat?(date: Date): string
}

export function useMonth({
  year,
  month,
  firstDayOfWeek = 1,
  dayLabelFormat = dayLabelFormatFn,
  weekdayLabelFormat = weekdayLabelFormatFn,
  monthLabelFormat = monthLabelFormatFn,
}: UseMonthProps): UseMonthResult {
  const days = useMemo(() => getDays({year, month, firstDayOfWeek, dayLabelFormat}), [
    year,
    month,
    firstDayOfWeek,
    dayLabelFormat,
  ])
  const weekdayLabels = useMemo(() => getWeekdayLabels({firstDayOfWeek, weekdayLabelFormat}), [
    firstDayOfWeek,
    weekdayLabelFormat,
  ])

  return {
    days,
    weekdayLabels,
    monthLabel: monthLabelFormat(new Date(year, month)),
  }
}
