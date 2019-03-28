import {isWithinRange, isSameDay} from 'date-fns'

export function isDateSelected(date: Date, startDate: Date | null, endDate: Date | null) {
  if (startDate && endDate) {
    return isWithinRange(date, startDate, endDate)
  }

  return false
}

export function isStartOrEndDate(date: Date, startDate: Date | null, endDate: Date | null) {
  if ((startDate && isSameDay(date, startDate)) || (endDate && isSameDay(date, endDate))) {
    return true
  }

  return false
}
