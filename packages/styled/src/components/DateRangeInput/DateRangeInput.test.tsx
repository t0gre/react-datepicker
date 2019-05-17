import * as React from 'react'
import {advanceTo, clear} from 'jest-date-mock'
import {render, fireEvent} from 'react-testing-library'
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
  const onFocusChange = jest.fn()
  const {container, getAllByText, getByText, getAllByTestId, getByTestId} = render(
    <Datepicker
      onFocusChange={onFocusChange}
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

test('should have empty end date and focused end date', () => {
  const onDateChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getAllByText, getByText, getAllByTestId} = render(
    <Datepicker
      onFocusChange={onFocusChange}
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

test('should render vertical variant', () => {
  const onDateChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDateChange={onDateChange}
      vertical={true}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render without reset dates, close and selected dates component', () => {
  const onDateChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDateChange={onDateChange}
      vertical={true}
      showClose={false}
      showResetDates={false}
      showSelectedDates={false}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should execute onClose callback', () => {
  const onDateChange = jest.fn()
  const onClose = jest.fn()
  const onFocusChange = jest.fn()
  const isDateBlocked = jest.fn()
  const {getByTestId, getByText, getAllByTestId} = render(
    <Datepicker
      firstDayOfWeek={0}
      minBookingDays={1}
      isDayBlocked={isDateBlocked}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDateChange={onDateChange}
      onClose={onClose}
      onFocusChange={onFocusChange}
      displayFormat="DD.MM.YYYY"
      phrases={{
        datepickerStartDatePlaceholder: 'test',
        datepickerStartDateLabel: 'test',
        datepickerEndDateLabel: 'test',
        datepickerEndDatePlaceholder: 'test',
        resetDates: 'test',
        startDateAriaLabel: 'test',
        endDateAriaLabel: 'test',
        startDatePlaceholder: 'test',
        endDatePlaceholder: 'test',
      }}
    />,
  )

  // Get formatted date
  getByText('16.03.2019')

  fireEvent.click(getByTestId('DatepickerClose'))
  expect(onClose).toHaveBeenCalled()

  fireEvent.focus(getAllByTestId('DatepickerInput')[0])
  expect(onFocusChange).toHaveBeenCalledWith(START_DATE)
  fireEvent.focus(getAllByTestId('DatepickerInput')[1])
  expect(onFocusChange).toHaveBeenCalledWith(END_DATE)
  fireEvent.click(getByTestId('DatepickerClose'))
})

test('should not render calendar icons', () => {
  const onDateChange = jest.fn()
  const onClose = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      firstDayOfWeek={0}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      showEndDateCalendarIcon={false}
      showStartDateCalendarIcon={false}
      focusedInput={END_DATE}
      onDateChange={onDateChange}
      onClose={onClose}
      onFocusChange={onFocusChange}
      displayFormat="DD.MM.YYYY"
      phrases={{
        datepickerStartDatePlaceholder: 'test',
        datepickerStartDateLabel: 'test',
        datepickerEndDateLabel: 'test',
        datepickerEndDatePlaceholder: 'test',
        resetDates: 'test',
        startDateAriaLabel: 'test',
        endDateAriaLabel: 'test',
        startDatePlaceholder: 'test',
        endDatePlaceholder: 'test',
      }}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should click on select end date', () => {
  const onDateChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getAllByTestId} = render(
    <Datepicker
      startDate={null}
      endDate={null}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      focusedInput={null}
    />,
  )
  expect(container).toMatchSnapshot()
  fireEvent.focus(getAllByTestId('DatepickerInput')[1])
  expect(onFocusChange).toHaveBeenCalledWith(START_DATE)
})

// @ts-ignore
const App = ({onDateChange, onFocusChange}) => (
  <>
    <Datepicker
      startDate={null}
      endDate={null}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      focusedInput={START_DATE}
    />
    <div data-testid="outside" />
  </>
)

test('should handle click outside (close datepicker)', () => {
  const onDateChange = jest.fn()
  const onFocusChange = jest.fn()
  const {getByTestId} = render(<App onDateChange={onDateChange} onFocusChange={onFocusChange} />)
  fireEvent.click(getByTestId('outside'))
  expect(onFocusChange).toHaveBeenCalledWith(null)
})
