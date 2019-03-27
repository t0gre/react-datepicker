// import startOfToday from 'date-fns/start_of_today'
// import getMonth from 'date-fns/get_month'
// import getYear from 'date-fns/get_year'
import getDay from 'date-fns/get_day'
import endOfMonth from 'date-fns/end_of_month'
import startOfMonth from 'date-fns/start_of_month'
import format from 'date-fns/format'
import eachDay from 'date-fns/each_day'

// function getCurrentYearAndMonth() {
//   const today = startOfToday()
//   const year = getYear(today)
//   const month = getMonth(today)
//   return {
//     year,
//     month,
//   }
// }

interface UseMonthProps {
  year: number
  month: number
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  convertDate?(date: Date): string
}

export default function useMonth({
  year,
  month,
  weekStartsOn = 1,
  convertDate = date => format(date, 'DD'),
}: UseMonthProps) {
  const date = new Date(year, month)

  const monthStart = startOfMonth(date)
  const monthStartDay = getDay(monthStart)
  const monthEnd = endOfMonth(date)

  const prevMonthDays = Array.from(
    Array(monthStartDay >= weekStartsOn ? monthStartDay - weekStartsOn : weekStartsOn).keys(),
  ).fill(0)
  const days = eachDay(monthStart, monthEnd).map(date => ({
    date,
    day: convertDate(date),
  }))

  return [...prevMonthDays, ...days]
}
