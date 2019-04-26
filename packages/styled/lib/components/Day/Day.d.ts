import React from 'react'
interface DayProps {
  day: string
  date: Date
  isActive: boolean
  disabled: boolean
  isStartOrEnd: boolean
  onDaySelect(date: Date): void
}
declare function Day({
  day,
  isActive,
  isStartOrEnd,
  disabled,
  onDaySelect,
  date,
}: DayProps): JSX.Element
declare const _default: React.MemoExoticComponent<typeof Day>
export default _default
