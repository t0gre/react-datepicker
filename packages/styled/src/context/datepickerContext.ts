import React from 'react'

interface DatepickerContext {
  rtl: boolean
  focusedDate: Date | null
  onDayFocus(date: Date): void
  onDaySelect(date: Date): void
  onDayHover(date: Date): void
  isDateFocused(date: Date): boolean
  isDateSelected(date: Date): boolean
  isDateHovered(date: Date): boolean
  isDateBlocked(date: Date): boolean
  isFirstOrLastSelectedDate(date: Date): boolean
}

export const datepickerContextDefaultValue = {
  rtl: false,
  focusedDate: null,
  isDateFocused: () => false,
  isDateSelected: () => false,
  isDateHovered: () => false,
  isDateBlocked: () => false,
  isFirstOrLastSelectedDate: () => false,
  onDayFocus: () => {},
  onDayHover: () => {},
  onDaySelect: () => {},
}

export default React.createContext<DatepickerContext>(datepickerContextDefaultValue)
