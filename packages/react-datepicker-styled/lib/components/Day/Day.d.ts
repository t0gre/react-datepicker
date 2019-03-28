import React from 'react'
interface DayProps {
  day: string
  isActive: boolean
  disabled: boolean
  isStartOrEnd: boolean
}
declare function Day({day, isActive, isStartOrEnd, disabled}: DayProps): JSX.Element
declare const _default: React.MemoExoticComponent<typeof Day>
export default _default
