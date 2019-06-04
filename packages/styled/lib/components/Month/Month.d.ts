import {FirstDayOfWeek} from '@datepicker-react/hooks'
interface MonthProps {
  year: number
  month: number
  firstDayOfWeek: FirstDayOfWeek
  dayFormat(date: Date): string
  weekDayFormat(date: Date): string
  monthLabelFormat(date: Date): string
}
declare const Month: ({
  year,
  month,
  firstDayOfWeek,
  dayFormat,
  monthLabelFormat,
  weekDayFormat,
}: MonthProps) => JSX.Element
export default Month
