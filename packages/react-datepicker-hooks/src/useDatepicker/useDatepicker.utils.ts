import {isWithinRange} from 'date-fns'

export function isDateSelected(date: Date, startDate: Date | null, endDate: Date | null) {
  if (startDate && endDate) {
    return isWithinRange(date, startDate, endDate)
  }

  return false
}
