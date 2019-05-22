import * as React from 'react'
import {advanceTo, clear} from 'jest-date-mock'
import {render, fireEvent, act} from 'react-testing-library'
import {END_DATE, START_DATE} from '@datepicker-react/hooks'
import Datepicker from '.'

beforeEach(() => {
  advanceTo(new Date(2019, 2, 27, 0, 0, 0))
})

afterEach(() => {
  clear()
})

test('should have empty start and end date and focused start date', () => {
  const onDateChange = jest.fn()
  const {container, getAllByText, getByText, getAllByTestId, getByTestId} = render(
    <Datepicker
      startDate={null}
      endDate={null}
      focusedInput={START_DATE}
      onDateChange={onDateChange}
    />,
  )
  expect(container).toMatchSnapshot()
  expect(getAllByText('Select').length).toBe(2)
  expect(getByText('March 2019'))
  expect(getByText('April 2019'))

  // Click on close (fire default function
  fireEvent.click(getByTestId('DatepickerClose'))

  // Test if first day is monday
  // @ts-ignore
  expect(getAllByTestId('DayLabel')[0]).toHaveTextContent('Mo')

  // Click on March 16
  const selectedDay = getAllByTestId('Day')[15]
  // @ts-ignore
  expect(selectedDay).toHaveTextContent('16')
  fireEvent.click(selectedDay)
  expect(onDateChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: null,
    focusedInput: END_DATE,
  })
})

test('should select exact range', () => {
  const onDateChange = jest.fn()
  const {container, getAllByText, getByText, getAllByTestId, getByTestId} = render(
    <Datepicker
      exactMinBookingDays
      minBookingDays={7}
      startDate={null}
      endDate={null}
      focusedInput={START_DATE}
      onDateChange={onDateChange}
    />,
  )
  expect(container).toMatchSnapshot()
  expect(getAllByText('Select').length).toBe(2)
  expect(getByText('March 2019'))
  expect(getByText('April 2019'))

  // Click on close (fire default function
  fireEvent.click(getByTestId('DatepickerClose'))

  // Test if first day is monday
  // @ts-ignore
  expect(getAllByTestId('DayLabel')[0]).toHaveTextContent('Mo')

  // Click on March 16
  const selectedDay = getAllByTestId('Day')[15]
  // @ts-ignore
  expect(selectedDay).toHaveTextContent('16')
  fireEvent.click(selectedDay)
  expect(onDateChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: new Date(2019, 2, 22, 0, 0, 0),
    focusedInput: null,
  })
})

test('should render vertical datepicker', () => {
  const onDateChange = jest.fn()
  const {container} = render(
    <Datepicker
      vertical
      startDate={null}
      endDate={null}
      focusedInput={START_DATE}
      onDateChange={onDateChange}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should go to next and previous month - vertical variant', () => {
  const onDateChange = jest.fn()
  const {container, getAllByTestId} = render(
    <Datepicker
      vertical
      startDate={null}
      endDate={null}
      focusedInput={START_DATE}
      onDateChange={onDateChange}
    />,
  )
  expect(container).toMatchSnapshot()

  // Go to next month
  act(() => {
    fireEvent.click(getAllByTestId('DatepickerNavButton')[1])
  })
  expect(container).toMatchSnapshot()

  // Go to prev month
  act(() => {
    fireEvent.click(getAllByTestId('DatepickerNavButton')[0])
  })
  expect(container).toMatchSnapshot()
})

test('should have empty end date and focused end date', () => {
  const onDateChange = jest.fn()
  const {container, getAllByText, getByText, getAllByTestId} = render(
    <Datepicker
      firstDayOfWeek={0}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDateChange={onDateChange}
    />,
  )
  expect(container).toMatchSnapshot()
  expect(getByText('03/16/2019'))
  expect(getAllByText('Select').length).toBe(1)
  expect(getByText('March 2019'))
  expect(getByText('April 2019'))

  // Test if first day is sunday
  // @ts-ignore
  expect(getAllByTestId('DayLabel')[0]).toHaveTextContent('Su')

  // Click on March 19
  const selectedDay = getAllByTestId('Day')[18]
  // @ts-ignore
  expect(selectedDay).toHaveTextContent('19')
  fireEvent.click(selectedDay)
  expect(onDateChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: new Date(2019, 2, 19, 0, 0, 0),
    focusedInput: null,
  })
})

test('should execute onClose callback', () => {
  const onDateChange = jest.fn()
  const onClose = jest.fn()
  const {getByTestId, getByText, getAllByText} = render(
    <Datepicker
      firstDayOfWeek={0}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDateChange={onDateChange}
      onClose={onClose}
      displayFormat="DD.MM.YYYY"
      phrases={{
        datepickerStartDatePlaceholder: 'test',
        datepickerStartDateLabel: 'test',
        datepickerEndDateLabel: 'test',
        datepickerEndDatePlaceholder: 'test',
        resetDates: 'test',
      }}
    />,
  )

  // Get formatted date
  getByText('16.03.2019')

  expect(getAllByText('test').length).toBe(4)

  fireEvent.click(getByTestId('DatepickerClose'))
  expect(onClose).toHaveBeenCalled()
})
