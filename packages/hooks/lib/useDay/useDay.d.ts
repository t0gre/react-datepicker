import React from 'react';
interface UseDayProps {
    date: Date;
    focusedDate: Date | null;
    isDateFocused(date: Date): boolean;
    isDateSelected(date: Date): boolean;
    isDateHovered(date: Date): boolean;
    isDateBlocked(date: Date): boolean;
    isFirstOrLastSelectedDate(date: Date): boolean;
    onDayFocus(date: Date): void;
    onDaySelect(date: Date): void;
    onDayHover(date: Date): void;
    dayRef: React.RefObject<HTMLButtonElement>;
}
declare function useDay({ date, focusedDate, isDateSelected, isDateFocused, isFirstOrLastSelectedDate, isDateHovered, isDateBlocked, onDaySelect, onDayFocus, onDayHover, dayRef, }: UseDayProps): {
    role: string;
    tabIndex: number;
    isActive: boolean;
    isStartOrEnd: boolean;
    isWithinHoverRange: boolean;
    disabledDate: boolean;
    onKeyDown: (e: KeyboardEvent) => void;
    onClick: () => void;
    onMouseEnter: () => void;
};
export default useDay;
