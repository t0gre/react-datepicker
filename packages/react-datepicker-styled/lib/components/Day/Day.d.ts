interface DayProps {
  day: string
  isActive: boolean
  disabled: boolean
  isStartOrEnd: boolean
}
declare function Day({day, isActive, isStartOrEnd, disabled}: DayProps): JSX.Element
export default Day
