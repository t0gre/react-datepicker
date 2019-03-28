import {
  addDays,
  eachDay,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns'

type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6
export interface GetWeekDaysProps {
  weekStartsOn?: WeekStartsOn
  weekDayFormat?(date: Date): string
}

export function getWeekDays({
  weekStartsOn = 1,
  weekDayFormat = (date: Date) => format(date, 'dd'),
}: GetWeekDaysProps = {}) {
  const now = new Date()
  const arr = eachDay(
    addDays(startOfWeek(now), weekStartsOn),
    addDays(endOfWeek(now), weekStartsOn),
  )
  return arr.reduce((array, date) => {
    // @ts-ignore
    array.push(weekDayFormat(date))
    return array
  }, [])
}

export interface GetDaysProps {
  year: number
  month: number
  weekStartsOn?: WeekStartsOn
  dayFormat?(date: Date): string
}

export type CalendarDay = number | {day: string; date: Date}
export function getDays({
  year,
  month,
  weekStartsOn = 1,
  dayFormat = (date: Date) => format(date, 'DD'),
}: GetDaysProps): CalendarDay[] {
  const date = new Date(year, month)

  const monthStart = startOfMonth(date)
  const monthStartDay = getDay(monthStart)
  const monthEnd = endOfMonth(date)

  const prevMonthDays = Array.from(
    Array(monthStartDay >= weekStartsOn ? monthStartDay - weekStartsOn : weekStartsOn).keys(),
  ).fill(0)
  const days = eachDay(monthStart, monthEnd).map(date => ({
    date,
    day: dayFormat(date),
  }))

  return [...prevMonthDays, ...days]
}
