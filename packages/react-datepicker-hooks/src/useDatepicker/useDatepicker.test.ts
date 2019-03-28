import {advanceTo, clear} from 'jest-date-mock'
import {getCurrentYearAndMonth, isDateSelected, isStartOrEndDate, isDateBlocked} from '.'
import {isEqual} from 'date-fns'

test('should return current year and month', () => {
  advanceTo(new Date(2019, 2, 27, 0, 0, 0))
  expect(getCurrentYearAndMonth()).toEqual({year: 2019, month: 2})
  clear()
})

const startDate = new Date(2019, 2, 20, 0, 0, 0)
const endDate = new Date(2019, 2, 27, 0, 0, 0)

describe('isDateSelected', () => {
  test('should return true, because date is selected', () => {
    expect(isDateSelected(startDate, startDate, endDate)).toBe(true)
    expect(isDateSelected(endDate, startDate, endDate)).toBe(true)
    expect(isDateSelected(new Date(2019, 2, 26, 0, 0, 0), startDate, endDate)).toBe(true)
  })

  test('should return false, because date is not selected', () => {
    expect(isDateSelected(new Date(2019, 2, 19, 0, 0, 0), startDate, endDate)).toBe(false)
    expect(isDateSelected(new Date(2019, 2, 28, 0, 0, 0), startDate, endDate)).toBe(false)
  })
})

describe('isStartOrEndDate', () => {
  test('should be start or end date', () => {
    expect(isStartOrEndDate(new Date(2019, 2, 20), startDate, endDate)).toBe(true)
    expect(isStartOrEndDate(new Date(2019, 2, 27), startDate, endDate)).toBe(true)
  })

  test('should not be start or end date', () => {
    expect(isStartOrEndDate(new Date(2019, 2, 21), startDate, endDate)).toBe(false)
  })
})

describe('isDateBlocked', () => {
  const minBookingDate = new Date(2019, 2, 10, 0, 0, 0)
  const maxBookingDate = new Date(2019, 2, 27, 0, 0, 0)
  const equalDate = new Date(2019, 2, 25, 0, 0, 0)

  test('should be blocked', () => {
    function isDayBlockedFn(date: Date) {
      return isEqual(date, equalDate)
    }

    expect(isDateBlocked(new Date(2019, 2, 9, 0, 0, 0), minBookingDate, maxBookingDate)).toBe(true)
    expect(isDateBlocked(new Date(2019, 2, 28, 0, 0, 0), minBookingDate, maxBookingDate)).toBe(true)
    expect(
      isDateBlocked(new Date(2019, 2, 25, 0, 0, 0), minBookingDate, maxBookingDate, isDayBlockedFn),
    ).toBe(true)
  })

  test('should not be blocked', () => {
    function isDayBlockedFn(date: Date) {
      return isEqual(date, equalDate)
    }

    expect(isDateBlocked(new Date(2019, 2, 10, 0, 0, 0), minBookingDate, maxBookingDate)).toBe(
      false,
    )
    expect(isDateBlocked(new Date(2019, 2, 27, 0, 0, 0), minBookingDate, maxBookingDate)).toBe(
      false,
    )
    expect(
      isDateBlocked(new Date(2019, 2, 26, 0, 0, 0), minBookingDate, maxBookingDate, isDayBlockedFn),
    ).toBe(false)
  })
})
