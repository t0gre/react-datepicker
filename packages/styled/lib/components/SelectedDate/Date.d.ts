interface DateProps {
  title: string
  date: string
  isActive: boolean
}
declare function Date({title, isActive, date}: DateProps): JSX.Element
export default Date
