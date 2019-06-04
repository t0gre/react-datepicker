import React, {useReducer} from 'react'
import {ThemeProvider} from 'styled-components'
import {addDays, isSameDay, format} from 'date-fns'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {text, boolean} from '@storybook/addon-knobs'
import {
  dayFormat as dayFormatFn,
  weekDayFormat as weekDayFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from '@datepicker-react/hooks'
import slLocale from 'date-fns/locale/sl'
import Flex from '../Flex'
import {DateRangeInput, OnDateChangeProps, FirstDayOfWeek, phrases} from '../../index'

const initialState: OnDateChangeProps = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

function reducer(state: OnDateChangeProps, action: Record<string, unknown>) {
  switch (action.type) {
    case 'focusChange':
      return {...state, focusedInput: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}

interface AppProps {
  displayFormat?: string
  vertical?: boolean
  rtl?: boolean
  showResetDates?: boolean
  showClose?: boolean
  showSelectedDates?: boolean
  exactMinBookingDays?: boolean
  minBookingDays?: number
  numberOfMonths?: number
  firstDayOfWeek?: FirstDayOfWeek
  phrasesProp?: phrases.DateRangeInputPhrases
  isDayBlocked?(date: Date): boolean
  minBookingDate?: Date
  maxBookingDate?: Date
  dayFormat?(date: Date): string
  weekDayFormat?(date: Date): string
  monthLabelFormat?(date: Date): string
  onDayRender?(date: Date): React.ReactNode
}

function App({
  displayFormat = 'MM/DD/YYYY',
  showClose = true,
  showSelectedDates = true,
  showResetDates = false,
  vertical = false,
  rtl = false,
  exactMinBookingDays = false,
  minBookingDays = 1,
  numberOfMonths = 2,
  firstDayOfWeek = 1,
  phrasesProp = phrases.dateRangeInputPhrases,
  isDayBlocked = () => false,
  minBookingDate,
  maxBookingDate,
  dayFormat = dayFormatFn,
  weekDayFormat = weekDayFormatFn,
  monthLabelFormat = monthLabelFormatFn,
  onDayRender = undefined,
}: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DateRangeInput
      minBookingDate={minBookingDate}
      maxBookingDate={maxBookingDate}
      onDateChange={data => dispatch({type: 'dateChange', payload: data})}
      onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
      // @ts-ignore
      startDate={state.startDate}
      // @ts-ignore
      endDate={state.endDate}
      // @ts-ignore
      focusedInput={state.focusedInput}
      onClose={action('onClose')}
      displayFormat={displayFormat}
      vertical={vertical}
      rtl={rtl}
      showClose={showClose}
      showResetDates={showResetDates}
      showSelectedDates={showSelectedDates}
      exactMinBookingDays={exactMinBookingDays}
      minBookingDays={minBookingDays}
      numberOfMonths={numberOfMonths}
      firstDayOfWeek={firstDayOfWeek}
      phrases={phrasesProp}
      isDayBlocked={isDayBlocked}
      dayFormat={dayFormat}
      weekDayFormat={weekDayFormat}
      monthLabelFormat={monthLabelFormat}
      onDayRender={onDayRender}
    />
  )
}

storiesOf('DateRangeInput', module)
  .add('Simple demo', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      exactMinBookingDays={boolean('exactMinBookingDays', false)}
      showResetDates={boolean('showResetDates', true)}
      showClose={boolean('showClose', true)}
      showSelectedDates={boolean('showSelectedDates', true)}
      displayFormat={text('displayFormat', 'MM/DD/YYYY')}
    />
  ))
  .add('Minimum booking days (7 days)', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      exactMinBookingDays={boolean('exactMinBookingDays', false)}
      showResetDates={boolean('showResetDates', true)}
      showClose={boolean('showClose', true)}
      showSelectedDates={boolean('showSelectedDates', true)}
      displayFormat={text('displayFormat', 'MM/DD/YYYY')}
      minBookingDays={7}
    />
  ))
  .add('Number of months (3 months)', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      exactMinBookingDays={boolean('exactMinBookingDays', false)}
      showResetDates={boolean('showResetDates', true)}
      showClose={boolean('showClose', true)}
      showSelectedDates={boolean('showSelectedDates', true)}
      displayFormat={text('displayFormat', 'MM/DD/YYYY')}
      numberOfMonths={3}
    />
  ))
  .add('First day of the week (Sunday)', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      exactMinBookingDays={boolean('exactMinBookingDays', false)}
      showResetDates={boolean('showResetDates', true)}
      showClose={boolean('showClose', true)}
      showSelectedDates={boolean('showSelectedDates', true)}
      displayFormat={text('displayFormat', 'MM/DD/YYYY')}
      firstDayOfWeek={0}
    />
  ))
  .add('Custom phrases', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      exactMinBookingDays={boolean('exactMinBookingDays', false)}
      showResetDates={boolean('showResetDates', true)}
      showClose={boolean('showClose', true)}
      showSelectedDates={boolean('showSelectedDates', true)}
      displayFormat={text('displayFormat', 'MM/DD/YYYY')}
      firstDayOfWeek={0}
      phrasesProp={{
        datepickerStartDatePlaceholder: 'Izberi',
        datepickerStartDateLabel: 'Začetni datum:',
        datepickerEndDatePlaceholder: 'Izberi',
        datepickerEndDateLabel: 'Končni datum:',
        resetDates: 'Razveljavi',
        startDateAriaLabel: 'Začetni datum',
        endDateAriaLabel: 'Končni datum',
        startDatePlaceholder: 'Začetni datum',
        endDatePlaceholder: 'Končni datum',
      }}
    />
  ))
  .add('Localization', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      exactMinBookingDays={boolean('exactMinBookingDays', false)}
      showResetDates={boolean('showResetDates', true)}
      showClose={boolean('showClose', true)}
      showSelectedDates={boolean('showSelectedDates', true)}
      displayFormat={text('displayFormat', 'MM/DD/YYYY')}
      firstDayOfWeek={0}
      phrasesProp={{
        datepickerStartDatePlaceholder: 'Izberi',
        datepickerStartDateLabel: 'Začetni datum:',
        datepickerEndDatePlaceholder: 'Izberi',
        datepickerEndDateLabel: 'Končni datum:',
        resetDates: 'Razveljavi',
        startDateAriaLabel: 'Začetni datum',
        endDateAriaLabel: 'Končni datum',
        startDatePlaceholder: 'Začetni datum',
        endDatePlaceholder: 'Končni datum',
      }}
      dayFormat={(date: Date) => format(date, 'DD', {locale: slLocale})}
      weekDayFormat={(date: Date) => format(date, 'dd', {locale: slLocale})}
      monthLabelFormat={(date: Date) => format(date, 'MMMM YYYY', {locale: slLocale})}
    />
  ))
  .add('Block date', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      exactMinBookingDays={boolean('exactMinBookingDays', false)}
      showResetDates={boolean('showResetDates', true)}
      showClose={boolean('showClose', true)}
      showSelectedDates={boolean('showSelectedDates', true)}
      displayFormat={text('displayFormat', 'MM/DD/YYYY')}
      firstDayOfWeek={0}
      isDayBlocked={(date: Date) => isSameDay(date, addDays(new Date(), 1))}
    />
  ))
  .add('Custom day size', () => (
    <ThemeProvider
      theme={{
        reactDatepicker: {
          daySize: 40,
        },
      }}
    >
      <App
        rtl={boolean('rtl', false)}
        vertical={boolean('vertical', false)}
        exactMinBookingDays={boolean('exactMinBookingDays', false)}
        showResetDates={boolean('showResetDates', true)}
        showClose={boolean('showClose', true)}
        showSelectedDates={boolean('showSelectedDates', true)}
        displayFormat={text('displayFormat', 'MM/DD/YYYY')}
        firstDayOfWeek={0}
        isDayBlocked={(date: Date) => isSameDay(date, addDays(new Date(), 1))}
      />
    </ThemeProvider>
  ))
  .add('MinBookingDate and maxBookingDate', () => (
    <ThemeProvider
      theme={{
        reactDatepicker: {
          daySize: 40,
        },
      }}
    >
      <App
        minBookingDate={new Date()}
        maxBookingDate={addDays(new Date(), 20)}
        rtl={boolean('rtl', false)}
        vertical={boolean('vertical', false)}
        exactMinBookingDays={boolean('exactMinBookingDays', false)}
        showResetDates={boolean('showResetDates', true)}
        showClose={boolean('showClose', true)}
        showSelectedDates={boolean('showSelectedDates', true)}
        displayFormat={text('displayFormat', 'MM/DD/YYYY')}
        firstDayOfWeek={0}
        isDayBlocked={(date: Date) => isSameDay(date, addDays(new Date(), 1))}
      />
    </ThemeProvider>
  ))
  .add('Custom day render', () => (
    <ThemeProvider
      theme={{
        reactDatepicker: {
          daySize: 50,
        },
      }}
    >
      <App
        rtl={boolean('rtl', false)}
        vertical={boolean('vertical', false)}
        exactMinBookingDays={boolean('exactMinBookingDays', false)}
        showResetDates={boolean('showResetDates', true)}
        showClose={boolean('showClose', true)}
        showSelectedDates={boolean('showSelectedDates', true)}
        displayFormat={text('displayFormat', 'MM/DD/YYYY')}
        onDayRender={(date: Date) => (
          <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
            {dayFormatFn(date)}
            😜
          </Flex>
        )}
      />
    </ThemeProvider>
  ))
