interface MonthProps {
  year: number
  month: number
  firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6
}
declare const Month: ({year, month, firstDayOfWeek}: MonthProps) => JSX.Element
export default Month
