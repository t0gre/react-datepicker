import React from 'react'
interface DatepickerContext {
  rtl: boolean
  focusedDate: Date | null
  onDateFocus(date: Date): void
  onDateSelect(date: Date): void
  onDateHover(date: Date): void
  isDateFocused(date: Date): boolean
  isDateSelected(date: Date): boolean
  isDateHovered(date: Date): boolean
  isDateBlocked(date: Date): boolean
  isFirstOrLastSelectedDate(date: Date): boolean
  onDayRender?(date: Date): React.ReactNode
}
export declare const datepickerContextDefaultValue: {
  rtl: boolean
  focusedDate: null
  isDateFocused: () => boolean
  isDateSelected: () => boolean
  isDateHovered: () => boolean
  isDateBlocked: () => boolean
  isFirstOrLastSelectedDate: () => boolean
  onDateFocus: () => void
  onDateHover: () => void
  onDateSelect: () => void
  onDayRender: undefined
}
declare const _default: React.Context<DatepickerContext>
export default _default
