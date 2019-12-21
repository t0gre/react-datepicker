import React from 'react'
interface UseDayProps {
  date: Date
  focusedDate: Date | null
  isDateFocused(date: Date): boolean
  isDateSelected(date: Date): boolean
  isDateHovered(date: Date): boolean
  isDateBlocked(date: Date): boolean
  isFirstOrLastSelectedDate(date: Date): boolean
  onDateFocus(date: Date): void
  onDateSelect(date: Date): void
  onDateHover(date: Date): void
  dayRef: React.RefObject<HTMLButtonElement>
  unavailableDates?: Date[]
}
declare function useDay({
  date,
  focusedDate,
  isDateSelected,
  isDateFocused,
  isFirstOrLastSelectedDate,
  isDateHovered,
  isDateBlocked,
  onDateSelect,
  onDateFocus,
  onDateHover,
  dayRef,
  unavailableDates,
}: UseDayProps): {
  tabIndex: number
  isSelected: boolean
  isSelectedStartOrEnd: boolean
  isWithinHoverRange: boolean
  disabledDate: boolean
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void
  onClick: () => void
  onMouseEnter: () => void
}
export default useDay
