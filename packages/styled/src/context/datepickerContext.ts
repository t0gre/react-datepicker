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

export const datepickerContextDefaultValue = {
  rtl: false,
  focusedDate: null,
  isDateFocused: () => false,
  isDateSelected: () => false,
  isDateHovered: () => false,
  isDateBlocked: () => false,
  isFirstOrLastSelectedDate: () => false,
  onDateFocus: () => {},
  onDateHover: () => {},
  onDateSelect: () => {},
  onDayRender: undefined,
}

export default React.createContext<DatepickerContext>(datepickerContextDefaultValue)
