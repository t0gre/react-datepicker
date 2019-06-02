import React, {useCallback, useEffect} from 'react'
import addDays from 'date-fns/add_days'

interface UseDayProps {
  date: Date
  focusedDate: Date | null
  isDateFocused(date: Date): boolean
  isDateSelected(date: Date): boolean
  isDateHovered(date: Date): boolean
  isDateBlocked(date: Date): boolean
  isFirstOrLastSelectedDate(date: Date): boolean
  onDayFocus(date: Date): void
  onDaySelect(date: Date): void
  onDayHover(date: Date): void
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
  onDaySelect,
  onDayFocus,
  onDayHover,
  dayRef,
}: UseDayProps) {
  const onClick = useCallback(() => onDaySelect(date), [date, onDaySelect])
  const onMouseEnter = useCallback(() => onDayHover(date), [date, onDayHover])
  useEffect(() => {
    if (dayRef && dayRef.current && isDateFocused(date)) {
      dayRef.current.focus()
    }
  }, [dayRef, date, isDateFocused])

  const disabled = isDateBlocked(date) && !isDateHovered(date)

  return {
    role: 'button',
    tabIndex: focusedDate === null || isDateFocused(date) ? 0 : -1,
    isActive: isDateSelected(date),
    isStartOrEnd: isFirstOrLastSelectedDate(date),
    isWithinHoverRange: isDateHovered(date),
    disabledDate: disabled,
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        onDayFocus(addDays(date, 1))
      } else if (e.key === 'ArrowLeft') {
        onDayFocus(addDays(date, -1))
      } else if (e.key === 'ArrowUp') {
        onDayFocus(addDays(date, -7))
      } else if (e.key === 'ArrowDown') {
        onDayFocus(addDays(date, 7))
      }
    },
    onClick: disabled ? () => {} : onClick,
    onMouseEnter,
  }
}

export default useDay
