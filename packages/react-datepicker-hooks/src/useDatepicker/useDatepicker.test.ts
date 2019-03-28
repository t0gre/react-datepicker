import {advanceTo, clear} from 'jest-date-mock'
import {getCurrentYearAndMonth, isDateSelected} from '.'

test('should return current year and month', () => {
  advanceTo(new Date(2019, 2, 27, 0, 0, 0))
  expect(getCurrentYearAndMonth()).toEqual({year: 2019, month: 2})
  clear()
})

test('should return true, because date is selected', () => {
  const startDate = new Date(2019, 2, 20, 0, 0, 0)
  const endDate = new Date(2019, 2, 27, 0, 0, 0)
  expect(isDateSelected(startDate, startDate, endDate)).toBe(true)
  expect(isDateSelected(endDate, startDate, endDate)).toBe(true)
  expect(isDateSelected(new Date(2019, 2, 26, 0, 0, 0), startDate, endDate)).toBe(true)
})

test('should return false, because date is not selected', () => {
  const startDate = new Date(2019, 2, 20, 0, 0, 0)
  const endDate = new Date(2019, 2, 27, 0, 0, 0)
  expect(isDateSelected(new Date(2019, 2, 19, 0, 0, 0), startDate, endDate)).toBe(false)
  expect(isDateSelected(new Date(2019, 2, 28, 0, 0, 0), startDate, endDate)).toBe(false)
})
