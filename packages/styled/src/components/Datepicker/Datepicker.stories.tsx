import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {format, addDays, isSameDay} from 'date-fns'
import {
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from '@datepicker-react/hooks'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {text, boolean} from '@storybook/addon-knobs'
import slLocale from 'date-fns/locale/sl'
import {
  Datepicker,
  START_DATE,
  OnDatesChangeProps,
  FirstDayOfWeek,
  DatepickerPhrases,
  datepickerPhrases,
} from '../../index'
import Flex from '../Flex'

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
  phrasesProp?: DatepickerPhrases
  isDateBlocked?(date: Date): boolean
  minBookingDate?: Date
  maxBookingDate?: Date
  dayLabelFormat?(date: Date): string
  weekdayLabelFormat?(date: Date): string
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
  phrasesProp = datepickerPhrases,
  isDateBlocked = () => false,
  minBookingDate,
  maxBookingDate,
  dayLabelFormat = dayLabelFormatFn,
  weekdayLabelFormat = weekdayLabelFormatFn,
  monthLabelFormat = monthLabelFormatFn,
  onDayRender = undefined,
}: AppProps) {
  const [state, setState] = useState<OnDatesChangeProps>({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  })

  function handleDataChange(data: OnDatesChangeProps) {
    action('onDatesChange')(data)
    if (!data.focusedInput) {
      setState({...data, focusedInput: START_DATE})
    } else {
      setState(data)
    }
  }

  return (
    <Datepicker
      minBookingDate={minBookingDate}
      maxBookingDate={maxBookingDate}
      onDatesChange={handleDataChange}
      startDate={state.startDate}
      endDate={state.endDate}
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
      isDateBlocked={isDateBlocked}
      dayLabelFormat={dayLabelFormat}
      weekdayLabelFormat={weekdayLabelFormat}
      monthLabelFormat={monthLabelFormat}
      onDayRender={onDayRender}
    />
  )
}

storiesOf('Datepicker', module)
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
        close: 'Zapri',
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
        close: 'Zapri',
      }}
      dayLabelFormat={(date: Date) => format(date, 'DD', {locale: slLocale})}
      weekdayLabelFormat={(date: Date) => format(date, 'dd', {locale: slLocale})}
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
      isDateBlocked={(date: Date) => isSameDay(date, addDays(new Date(), 1))}
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
        isDateBlocked={(date: Date) => isSameDay(date, addDays(new Date(), 1))}
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
        isDateBlocked={(date: Date) => isSameDay(date, addDays(new Date(), 1))}
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
            {dayLabelFormatFn(date)}
            😜
          </Flex>
        )}
      />
    </ThemeProvider>
  ))
  .add('Theming', () => (
    <ThemeProvider
      theme={{
        reactDatepicker: {
          fontFamily: 'system-ui, -apple-system',
          colors: {
            accessibility: '#D80249',
            selectedDay: '#f7518b',
            selectedDayHover: '#F75D95',
            primaryColor: '#d8366f',
          },
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
      />
    </ThemeProvider>
  ))
