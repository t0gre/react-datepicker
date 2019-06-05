import addDays from 'date-fns/add_days'
import eachDay from 'date-fns/each_day'
import endOfMonth from 'date-fns/end_of_month'
import endOfWeek from 'date-fns/end_of_week'
import format from 'date-fns/format'
import getDay from 'date-fns/get_day'
import startOfMonth from 'date-fns/start_of_month'
import startOfWeek from 'date-fns/start_of_week'

type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
export interface GetWeekDaysProps {
  firstDayOfWeek?: FirstDayOfWeek
  weekdayLabelFormat?(date: Date): string
}

export function getWeekDays({
  firstDayOfWeek = 1,
  weekdayLabelFormat = (date: Date) => format(date, 'dd'),
}: GetWeekDaysProps = {}) {
  const now = new Date()
  const arr = eachDay(
    addDays(startOfWeek(now), firstDayOfWeek),
    addDays(endOfWeek(now), firstDayOfWeek),
  )
  return arr.reduce((array, date) => {
    // @ts-ignore
    array.push(weekdayLabelFormat(date))
    return array
  }, [])
}

export interface GetDaysProps {
  year: number
  month: number
  firstDayOfWeek?: FirstDayOfWeek
  dayLabelFormat?(date: Date): string
}

export type CalendarDay = number | {day: string; date: Date}
export function getDays({
  year,
  month,
  firstDayOfWeek = 1,
  dayLabelFormat = (date: Date) => format(date, 'DD'),
}: GetDaysProps): CalendarDay[] {
  const date = new Date(year, month)

  const monthStart = startOfMonth(date)
  const monthStartDay = getDay(monthStart)
  const monthEnd = endOfMonth(date)

  const prevMonthDays = Array.from(
    Array(monthStartDay >= firstDayOfWeek ? monthStartDay - firstDayOfWeek : firstDayOfWeek).keys(),
  ).fill(0)
  const days = eachDay(monthStart, monthEnd).map(date => ({
    date,
    day: dayLabelFormat(date),
  }))

  return [...prevMonthDays, ...days]
}
