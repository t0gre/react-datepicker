import {FirstDayOfWeek} from '@datepicker-react/hooks'
interface MonthProps {
  year: number
  month: number
  firstDayOfWeek: FirstDayOfWeek
  dayLabelFormat(date: Date): string
  weekdayLabelFormat(date: Date): string
  monthLabelFormat(date: Date): string
}
declare const Month: ({
  year,
  month,
  firstDayOfWeek,
  dayLabelFormat,
  monthLabelFormat,
  weekdayLabelFormat,
}: MonthProps) => JSX.Element
export default Month
