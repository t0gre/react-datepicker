import {advanceTo, clear} from 'jest-date-mock'
import {isEqual, format} from 'date-fns'
import {
  getCurrentYearMonthAndDate,
  getDateMonthAndYear,
  getInitialMonths,
  isDateSelected,
  isStartOrEndDate,
  isDateBlocked,
  getInputValue,
  getNextActiveMonth,
} from '.'

describe('getCurrentYearMonthAndDate', () => {
  test('should return current year and month', () => {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    expect(getCurrentYearMonthAndDate().year).toEqual(2019)
    expect(getCurrentYearMonthAndDate().month).toEqual(2)
    clear()
  })
})

describe('getDateMonthAndYear', () => {
  test('should return year and month', () => {
    const date = new Date(2019, 2, 27, 0, 0, 0)
    expect(getDateMonthAndYear(date).year).toEqual(2019)
    expect(getDateMonthAndYear(date).month).toEqual(2)
  })
})

describe('getNextActiveMonth', () => {
  test('get next 2 months', () => {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    const months = getInitialMonths(2, null)
    const nextMonths = getNextActiveMonth(months, 2, 1)
    expect(nextMonths.length).toBe(2)
    expect(nextMonths[0].year).toEqual(2019)
    expect(nextMonths[0].month).toEqual(4)
    expect(nextMonths[1].year).toEqual(2019)
    expect(nextMonths[1].month).toEqual(5)
    clear()
  })

  test('get past 2 months', () => {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    const months = getInitialMonths(2, null)
    const nextMonths = getNextActiveMonth(months, 2, -1)
    expect(nextMonths.length).toBe(2)
    expect(nextMonths[0].year).toEqual(2019)
    expect(nextMonths[0].month).toEqual(0)
    expect(nextMonths[1].year).toEqual(2019)
    expect(nextMonths[1].month).toEqual(1)
    clear()
  })
})

describe('getInitialMonths', () => {
  test('should return 2 months', () => {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    const months = getInitialMonths(2, null)
    expect(months.length).toBe(2)
    expect(months[0].year).toEqual(2019)
    expect(months[0].month).toEqual(2)
    expect(months[1].year).toEqual(2019)
    expect(months[1].month).toEqual(3)
    clear()
  })

  test('should return 2 months (june and july)', () => {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    const months = getInitialMonths(2, new Date(2019, 5, 25))
    expect(months.length).toBe(2)
    expect(months[0].year).toEqual(2019)
    expect(months[0].month).toEqual(5)
    expect(months[1].year).toEqual(2019)
    expect(months[1].month).toEqual(6)
    clear()
  })

  test('should return 1 month', () => {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    const months = getInitialMonths(1, null)
    expect(months.length).toBe(1)
    expect(months[0].year).toEqual(2019)
    expect(months[0].month).toEqual(2)
    clear()
  })
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
  const minBookingDate = new Date(2019, 2, 10, 1, 0, 0)
  const maxBookingDate = new Date(2019, 2, 27, 1, 0, 0)
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

describe('getInputValue', () => {
  test('should return formatted value', () => {
    const date = new Date(2019, 2, 10, 0, 0, 0)
    expect(getInputValue(date, 'DD/MM/YYYY', 'default value')).toBe('10/03/2019')
    expect(getInputValue(date, (date: Date) => format(date, 'YYYY'), 'default value')).toBe('2019')
  })
  test('should return default value', () => {
    expect(getInputValue(null, 'DD/MM/YYYY', 'default value')).toBe('default value')
  })
})
