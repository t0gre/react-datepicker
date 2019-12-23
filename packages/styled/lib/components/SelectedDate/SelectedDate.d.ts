export interface SelectDateProps {
  title: string
  date: string
  isActive: boolean
  vertical: boolean
}
declare function SelectDate({title, isActive, date, vertical}: SelectDateProps): JSX.Element
export default SelectDate
