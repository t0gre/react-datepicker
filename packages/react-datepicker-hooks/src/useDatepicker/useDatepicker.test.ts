import {advanceTo, clear} from 'jest-date-mock'
import {getCurrentYearAndMonth} from '.'

test('sholud return current year and month', () => {
  advanceTo(new Date(2019, 2, 27, 0, 0, 0))
  expect(getCurrentYearAndMonth()).toEqual({year: 2019, month: 2})
  clear()
})
