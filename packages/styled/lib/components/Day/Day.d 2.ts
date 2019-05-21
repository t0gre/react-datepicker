import React from 'react'
interface DayProps {
  day: string
  date: Date
  isActive: boolean
  disabled: boolean
  isStartOrEnd: boolean
  isWithinHoverRange: boolean
  onDaySelect(date: Date): void
  onDayHover(date: Date): void
}
declare function Day({
  day,
  isActive,
  isStartOrEnd,
  disabled,
  onDaySelect,
  onDayHover,
  date,
  isWithinHoverRange,
}: DayProps): JSX.Element
declare const _default: React.MemoExoticComponent<typeof Day>
export default _default
