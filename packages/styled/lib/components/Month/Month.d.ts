import {FirstDayOfWeek} from '@datepicker-react/hooks'
interface MonthProps {
  year: number
  month: number
  firstDayOfWeek: FirstDayOfWeek
  dayFormat(date: Date): string
  weekdayLabelFormat(date: Date): string
  monthLabelFormat(date: Date): string
}
declare const Month: ({
  year,
  month,
  firstDayOfWeek,
  dayFormat,
  monthLabelFormat,
  weekdayLabelFormat,
}: MonthProps) => JSX.Element
export default Month
