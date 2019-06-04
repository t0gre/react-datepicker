import * as React from 'react'
import {dayFormat, weekDayFormat, monthLabelFormat} from '@datepicker-react/hooks'
import {render} from '../../testUtil'
import Month from '.'

test('should match snapshot', () => {
  const {container, getByText, getAllByTestId} = render(
    <Month
      month={1}
      year={2019}
      firstDayOfWeek={1}
      dayFormat={dayFormat}
      weekDayFormat={weekDayFormat}
      monthLabelFormat={monthLabelFormat}
    />,
  )
  expect(container).toMatchSnapshot()
  getByText('February 2019')

  const days = getAllByTestId('Day')
  expect(days[0].textContent).toBe('01')
  expect(days[days.length - 1].textContent).toBe('28')

  const dayLabels = getAllByTestId('DayLabel')
  expect(dayLabels[0].textContent).toBe('Mo')
  expect(dayLabels[dayLabels.length - 1].textContent).toBe('Su')
})

test('Sunday should be first day of the week', () => {
  const {container, getByText, getAllByTestId} = render(
    <Month
      month={1}
      year={2019}
      firstDayOfWeek={0}
      dayFormat={dayFormat}
      weekDayFormat={weekDayFormat}
      monthLabelFormat={monthLabelFormat}
    />,
  )
  expect(container).toMatchSnapshot()
  getByText('February 2019')

  const days = getAllByTestId('Day')
  expect(days[0].textContent).toBe('01')
  expect(days[days.length - 1].textContent).toBe('28')

  const dayLabels = getAllByTestId('DayLabel')
  expect(dayLabels[0].textContent).toBe('Su')
  expect(dayLabels[dayLabels.length - 1].textContent).toBe('Sa')
})
