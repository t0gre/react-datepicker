import {isWithinRange, isSameDay, isBefore, isAfter} from 'date-fns'

export function isDateSelected(date: Date, startDate: Date | null, endDate: Date | null) {
  if (startDate && endDate) {
    return isWithinRange(date, startDate, endDate)
  }

  return false
}

export function isStartOrEndDate(date: Date, startDate: Date | null, endDate: Date | null) {
  return !!((startDate && isSameDay(date, startDate)) || (endDate && isSameDay(date, endDate)))
}

export function isDateBlocked(
  date: Date,
  minBookingDate?: Date,
  maxBookingDate?: Date,
  isDayBlockedFn?: (date?: Date) => boolean,
) {
  return !!(
    (minBookingDate && isBefore(date, minBookingDate)) ||
    (maxBookingDate && isAfter(date, maxBookingDate)) ||
    (isDayBlockedFn && isDayBlockedFn(date))
  )
}
