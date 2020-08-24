import * as React from 'react'
import {advanceTo, clear} from 'jest-date-mock'
import {render, fireEvent} from '../../testUtil'
import Datepicker from '.'

beforeEach(() => {
  advanceTo(new Date(2019, 2, 27, 0, 0, 0))
})

afterEach(() => {
  clear()
})

test('should have empty empty date and opened datepicker', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getByText, getAllByTestId, getByTestId} = render(
    <Datepicker
      showDatepicker
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
    />,
  )
  expect(container).toMatchSnapshot()
  expect(getByText('March 2019'))

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
  expect(onDatesChange).toHaveBeenCalledWith({
    date: new Date(2019, 2, 16, 0, 0, 0),
    showDatepicker: false,
  })
})

test('should render custom day', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getByText, getAllByTestId, getByTestId} = render(
    <Datepicker
      showDatepicker
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
      onDayRender={(date: Date) => <div>{date.toDateString()}</div>}
    />,
  )
  expect(container).toMatchSnapshot()
  expect(getByText('March 2019'))

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
  expect(onDatesChange).toHaveBeenCalledWith({
    date: new Date(2019, 2, 16, 0, 0, 0),
    showDatepicker: false,
  })
})

test('placement top', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      showDatepicker
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
      placement="top"
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render vertical variant', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      vertical
      showDatepicker
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
      placement="top"
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render vertical, rtl, variant', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      rtl
      vertical
      showDatepicker
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
      placement="top"
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render rtl, variant', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      rtl
      showDatepicker
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
      placement="top"
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render zIndex', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      zIndex={1000}
      showDatepicker
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
      placement="top"
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render a disabled input', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      disabled
      showDatepicker={false}
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
      placement="top"
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render without calendar icon, reset dates and close component', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      rtl
      showDatepicker
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
      showCalendarIcon={false}
      showClose={false}
      showResetDate={false}
      placement="top"
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should execute onClose callback', () => {
  const onDatesChange = jest.fn()
  const onClose = jest.fn()
  const onFocusChange = jest.fn()
  const isDateBlocked = jest.fn()
  const {getByTestId, getAllByTestId} = render(
    <Datepicker
      showDatepicker
      firstDayOfWeek={0}
      isDateBlocked={isDateBlocked}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      date={new Date(2019, 2, 16, 0, 0, 0)}
      onDateChange={onDatesChange}
      onClose={onClose}
      onFocusChange={onFocusChange}
      displayFormat="dd.MM.yyyy"
      phrases={{
        datepickerStartDatePlaceholder: 'test',
        datepickerStartDateLabel: 'test',
        datepickerEndDateLabel: 'test',
        datepickerEndDatePlaceholder: 'test',
        resetDates: 'test',
        dateAriaLabel: 'test',
        datePlaceholder: 'test',
        close: 'test',
      }}
    />,
  )

  fireEvent.click(getByTestId('DatepickerClose'))
  expect(onClose).toHaveBeenCalled()

  fireEvent.focus(getAllByTestId('DatepickerInput')[0])
  expect(onFocusChange).toHaveBeenCalledWith(true)
  fireEvent.click(getByTestId('DatepickerClose'))
})

// @ts-ignore
const App = ({onDateChange, onFocusChange}) => (
  <>
    <Datepicker
      showDatepicker
      date={null}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
    />
    <div data-testid="outside" />
  </>
)

test('should handle click outside (close datepicker)', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {getByTestId} = render(<App onDateChange={onDatesChange} onFocusChange={onFocusChange} />)
  fireEvent.click(getByTestId('outside'))
  expect(onFocusChange).toHaveBeenCalledWith(false)
})

test('should handle custom id for input field', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getByTestId} = render(
    <Datepicker
      showDatepicker
      onFocusChange={onFocusChange}
      date={null}
      onDateChange={onDatesChange}
      inputId="customId"
    />,
  )
  expect(container).toMatchSnapshot()
  expect(getByTestId('DatepickerInput').id).toEqual('customId')
})
