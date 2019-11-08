import * as React from 'react'
import {advanceTo, clear} from 'jest-date-mock'
import {END_DATE, START_DATE} from '@datepicker-react/hooks'
import {render, fireEvent} from '../../testUtil'
import Datepicker from '.'
import {ThemeProvider} from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import {DateRangeInputTheme, DatepickerTheme} from '../../@types/theme'

beforeEach(() => {
  advanceTo(new Date(2019, 2, 27, 0, 0, 0))
})

afterEach(() => {
  clear()
})

test('should have empty start and end date and focused start date', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getAllByText, getByText, getAllByTestId, getByTestId} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      startDate={null}
      endDate={null}
      focusedInput={START_DATE}
      onDatesChange={onDatesChange}
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
  expect(onDatesChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: null,
    focusedInput: END_DATE,
  })
})

test('should render custom day', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getAllByText, getByText, getAllByTestId, getByTestId} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      startDate={null}
      endDate={null}
      focusedInput={START_DATE}
      onDatesChange={onDatesChange}
      onDayRender={(date: Date) => <div>{date.toDateString()}</div>}
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
  expect(onDatesChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: null,
    focusedInput: END_DATE,
  })
})

test('should have empty start and end date and focused start date - placement = top', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getAllByText, getByText, getAllByTestId, getByTestId} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      startDate={null}
      endDate={null}
      focusedInput={START_DATE}
      onDatesChange={onDatesChange}
      placement="top"
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
  expect(onDatesChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: null,
    focusedInput: END_DATE,
  })
})

test('should have empty end date and focused end date', () => {
  const onDatesChange = jest.fn()
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
      onDatesChange={onDatesChange}
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
  expect(onDatesChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: new Date(2019, 2, 19, 0, 0, 0),
    focusedInput: null,
  })
})

test('should render vertical variant', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDatesChange={onDatesChange}
      vertical={true}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render vertical, rtl variant', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDatesChange={onDatesChange}
      vertical={true}
      rtl={true}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render rtl variant', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDatesChange={onDatesChange}
      vertical={false}
      rtl={true}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render without reset dates, close and selected dates component', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDatesChange={onDatesChange}
      vertical={true}
      showClose={false}
      showResetDates={false}
      showSelectedDates={false}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should execute onClose callback', () => {
  const onDatesChange = jest.fn()
  const onClose = jest.fn()
  const onFocusChange = jest.fn()
  const isDateBlocked = jest.fn()
  const {getByTestId, getByText, getAllByTestId} = render(
    <Datepicker
      firstDayOfWeek={0}
      minBookingDays={1}
      isDateBlocked={isDateBlocked}
      minBookingDate={new Date(2019, 1, 16, 0, 0, 0)}
      maxBookingDate={new Date(2020, 1, 16, 0, 0, 0)}
      startDate={new Date(2019, 2, 16, 0, 0, 0)}
      endDate={null}
      focusedInput={END_DATE}
      onDatesChange={onDatesChange}
      onClose={onClose}
      onFocusChange={onFocusChange}
      displayFormat="dd.MM.yyyy"
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
        close: 'test',
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
  const onDatesChange = jest.fn()
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
      onDatesChange={onDatesChange}
      onClose={onClose}
      onFocusChange={onFocusChange}
      displayFormat="dd.MM.yyyy"
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
        close: 'test',
      }}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should click on select end date', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getAllByTestId} = render(
    <Datepicker
      startDate={null}
      endDate={null}
      onDatesChange={onDatesChange}
      onFocusChange={onFocusChange}
      focusedInput={null}
    />,
  )
  expect(container).toMatchSnapshot()
  fireEvent.focus(getAllByTestId('DatepickerInput')[1])
  expect(onFocusChange).toHaveBeenCalledWith(START_DATE)
})

// @ts-ignore
const App = ({onDatesChange, onFocusChange}) => (
  <>
    <Datepicker
      startDate={null}
      endDate={null}
      onDatesChange={onDatesChange}
      onFocusChange={onFocusChange}
      focusedInput={START_DATE}
    />
    <div data-testid="outside" />
  </>
)

test('should handle click outside (close datepicker)', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {getByTestId} = render(<App onDatesChange={onDatesChange} onFocusChange={onFocusChange} />)
  fireEvent.click(getByTestId('outside'))
  expect(onFocusChange).toHaveBeenCalledWith(null)
})

test('should use dateRangeGridTemplateRows from theme', () => {
  const dateRangeInputTheme: DateRangeInputTheme = {
    dateRangeGridTemplateColumns: '1px 2px 3px',
    dateRangeGridTemplateRows: '1fr 2fr 3fr',
  }
  const datepickerTheme: DatepickerTheme = {
    datepickerSelectDateGridTemplateColumns: '4px 5px 6px',
    datepickerSelectDateGridTemplateRows: '4fr 5fr 6fr',
  }
  const theme = {
    reactDatepicker: {
      ...dateRangeInputTheme,
      ...datepickerTheme,
    },
  }
  const {container, getByTestId} = render(
    <ThemeProvider theme={theme}>
      <Datepicker
        startDate={null}
        endDate={null}
        focusedInput={START_DATE}
        onFocusChange={jest.fn()}
        onDatesChange={jest.fn()}
      />
    </ThemeProvider>,
  )
  expect(container).toMatchSnapshot()

  const grid1 = getByTestId('DateRangeInputGrid')
  // @ts-ignore
  expect(grid1).toHaveStyleRule('grid-template-columns', '1px 2px 3px')
  // @ts-ignore
  expect(grid1).toHaveStyleRule('grid-template-columns', '1px 2px 3px')
  // @ts-ignore
  expect(grid1).toHaveStyleRule('grid-template-rows', '1fr 2fr 3fr')

  const grid2 = getByTestId('SelectedDatesGrid')
  // @ts-ignore
  expect(grid2).toHaveStyleRule('grid-template-columns', '4px 5px 6px')
  // @ts-ignore
  expect(grid2).toHaveStyleRule('grid-template-rows', '4fr 5fr 6fr')
})

test('should handle custom id for input fields', () => {
  const onDatesChange = jest.fn()
  const onFocusChange = jest.fn()
  const {container, getAllByTestId} = render(
    <Datepicker
      onFocusChange={onFocusChange}
      startDate={null}
      endDate={null}
      focusedInput={START_DATE}
      onDatesChange={onDatesChange}
      startDateInputId="customStartDateId"
      endDateInputId="customEndDateId"
    />,
  )
  expect(container).toMatchSnapshot()
  expect(getAllByTestId('DatepickerInput')[0].id).toEqual('customStartDateId')
  expect(getAllByTestId('DatepickerInput')[1].id).toEqual('customEndDateId')
})
