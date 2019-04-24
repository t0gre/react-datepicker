import React from 'react'
interface DayProps {
  day: string
  date: Date
  isActive: boolean
  disabled: boolean
  isStartOrEnd: boolean
  onDaySelect(date: Date): void
  daySize: number
}
declare function Day({
  day,
  isActive,
  isStartOrEnd,
  disabled,
  onDaySelect,
  date,
  daySize,
}: DayProps): JSX.Element
declare const _default: React.MemoExoticComponent<typeof Day>
export default _default
