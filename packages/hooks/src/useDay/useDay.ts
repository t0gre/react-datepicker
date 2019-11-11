import React, {useCallback, useEffect} from 'react'
import addDays from 'date-fns/addDays'

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
}

function useDay({
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
}: UseDayProps) {
  const onClick = useCallback(() => onDateSelect(date), [date, onDateSelect])
  const onMouseEnter = useCallback(() => onDateHover(date), [date, onDateHover])
  useEffect(() => {
    if (dayRef && dayRef.current && isDateFocused(date)) {
      dayRef.current.focus()
    }
  }, [dayRef, date, isDateFocused])

  const disabled = isDateBlocked(date) && !isDateHovered(date)

  return {
    tabIndex: focusedDate === null || isDateFocused(date) ? 0 : -1,
    isSelected: isDateSelected(date),
    isSelectedStartOrEnd: isFirstOrLastSelectedDate(date),
    isWithinHoverRange: isDateHovered(date),
    disabledDate: disabled,
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowRight') {
        onDateFocus(addDays(date, 1))
      } else if (e.key === 'ArrowLeft') {
        onDateFocus(addDays(date, -1))
      } else if (e.key === 'ArrowUp') {
        onDateFocus(addDays(date, -7))
      } else if (e.key === 'ArrowDown') {
        onDateFocus(addDays(date, 7))
      }
    },
    onClick: disabled ? () => {} : onClick,
    onMouseEnter,
  }
}

export default useDay
