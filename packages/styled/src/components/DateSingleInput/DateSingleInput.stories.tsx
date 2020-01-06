import React, {useReducer} from 'react'
import {ThemeProvider} from 'styled-components'
import {addDays, isSameDay, format, addMonths} from 'date-fns'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {text, boolean} from '@storybook/addon-knobs'
import {
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from '@datepicker-react/hooks'
import {es as locale} from 'date-fns/locale'
import Flex from '../Flex'
import {
  DateSingleInput,
  OnDateChangeProps,
  FirstDayOfWeek,
  dateSingleInputPhrases,
  DateSingleInputPhrases,
} from '../../index'

const initialState: OnDateChangeProps = {
  date: null,
  showDatepicker: false,
}

function reducer(state: OnDateChangeProps, action: Record<string, unknown>) {
  switch (action.type) {
    case 'focusChange':
      return {...state, showDatepicker: action.payload}
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
  showResetDate?: boolean
  showClose?: boolean
  numberOfMonths?: number
  firstDayOfWeek?: FirstDayOfWeek
  phrasesProp?: DateSingleInputPhrases
  isDateBlocked?(date: Date): boolean
  minBookingDate?: Date
  maxBookingDate?: Date
  dayLabelFormat?(date: Date): string
  weekdayLabelFormat?(date: Date): string
  monthLabelFormat?(date: Date): string
  onDayRender?(date: Date): React.ReactNode
  unavailableDates?: Date[]
  initialVisibleMonth?: Date
}

function App({
  displayFormat = 'MM/dd/yyyy',
  showClose = true,
  showResetDate = false,
  vertical = false,
  rtl = false,
  numberOfMonths = 1,
  firstDayOfWeek = 1,
  phrasesProp = dateSingleInputPhrases,
  isDateBlocked = () => false,
  minBookingDate,
  maxBookingDate,
  initialVisibleMonth,
  dayLabelFormat = dayLabelFormatFn,
  weekdayLabelFormat = weekdayLabelFormatFn,
  monthLabelFormat = monthLabelFormatFn,
  onDayRender = undefined,
  unavailableDates = [],
}: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{width: '350px'}}>
      <DateSingleInput
        minBookingDate={minBookingDate}
        maxBookingDate={maxBookingDate}
        onDateChange={data => dispatch({type: 'dateChange', payload: data})}
        onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
        // @ts-ignore
        date={state.date}
        // @ts-ignore
        showDatepicker={state.showDatepicker}
        onClose={action('onClose')}
        displayFormat={displayFormat}
        vertical={vertical}
        rtl={rtl}
        showClose={showClose}
        showResetDate={showResetDate}
        numberOfMonths={numberOfMonths}
        firstDayOfWeek={firstDayOfWeek}
        phrases={phrasesProp}
        isDateBlocked={isDateBlocked}
        dayLabelFormat={dayLabelFormat}
        weekdayLabelFormat={weekdayLabelFormat}
        monthLabelFormat={monthLabelFormat}
        onDayRender={onDayRender}
        unavailableDates={unavailableDates}
        initialVisibleMonth={initialVisibleMonth}
      />
    </div>
  )
}

storiesOf('DateSingleInput', module)
  .add('Simple demo', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      showResetDate={boolean('showResetDate', true)}
      showClose={boolean('showClose', true)}
      displayFormat={text('displayFormat', 'MM/dd/yyyy')}
    />
  ))
  .add('Initial visible month', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      showResetDate={boolean('showResetDate', true)}
      showClose={boolean('showClose', true)}
      displayFormat={text('displayFormat', 'MM/dd/yyyy')}
      initialVisibleMonth={addMonths(new Date(), 6)}
    />
  ))
  .add('Number of months (3 months)', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      showResetDate={boolean('showResetDate', true)}
      showClose={boolean('showClose', true)}
      displayFormat={text('displayFormat', 'MM/dd/yyyy')}
      numberOfMonths={3}
    />
  ))
  .add('First day of the week (Sunday)', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      showResetDate={boolean('showResetDate', true)}
      showClose={boolean('showClose', true)}
      displayFormat={text('displayFormat', 'MM/dd/yyyy')}
      firstDayOfWeek={0}
    />
  ))
  .add('Custom phrases', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      showResetDate={boolean('showResetDate', true)}
      showClose={boolean('showClose', true)}
      displayFormat={text('displayFormat', 'MM/dd/yyyy')}
      firstDayOfWeek={0}
      phrasesProp={{
        datepickerStartDatePlaceholder: 'Seleccionar',
        datepickerStartDateLabel: 'Fecha de inicio:',
        datepickerEndDatePlaceholder: 'Seleccionar',
        datepickerEndDateLabel: 'Fecha de inicio:',
        resetDates: 'Deshacer',
        dateAriaLabel: 'Seleccione fecha',
        datePlaceholder: 'Seleccione fecha',
        close: 'Cerca',
      }}
    />
  ))
  .add('Localization', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      showResetDate={boolean('showResetDate', true)}
      showClose={boolean('showClose', true)}
      displayFormat={text('displayFormat', 'MM/dd/yyyy')}
      firstDayOfWeek={0}
      phrasesProp={{
        datepickerStartDatePlaceholder: 'Seleccionar',
        datepickerStartDateLabel: 'Fecha de inicio:',
        datepickerEndDatePlaceholder: 'Seleccionar',
        datepickerEndDateLabel: 'Fecha de inicio:',
        resetDates: 'Deshacer',
        dateAriaLabel: 'Seleccione fecha',
        datePlaceholder: 'Seleccione fecha',
        close: 'Cerca',
      }}
      dayLabelFormat={(date: Date) => format(date, 'dd', {locale})}
      weekdayLabelFormat={(date: Date) => format(date, 'eeeeee', {locale})}
      monthLabelFormat={(date: Date) => format(date, 'MMMM yyyy', {locale})}
    />
  ))
  .add('Block date', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      showResetDate={boolean('showResetDate', true)}
      showClose={boolean('showClose', true)}
      displayFormat={text('displayFormat', 'MM/dd/yyyy')}
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
        showResetDate={boolean('showResetDate', true)}
        showClose={boolean('showClose', true)}
        displayFormat={text('displayFormat', 'MM/dd/yyyy')}
        firstDayOfWeek={0}
        isDateBlocked={(date: Date) => isSameDay(date, addDays(new Date(), 1))}
      />
    </ThemeProvider>
  ))
  .add('Unavailable dates', () => (
    <App
      rtl={boolean('rtl', false)}
      vertical={boolean('vertical', false)}
      showResetDate={boolean('showResetDate', true)}
      showClose={boolean('showClose', true)}
      displayFormat={text('displayFormat', 'MM/dd/yyyy')}
      firstDayOfWeek={0}
      unavailableDates={[addDays(new Date(), 3), addDays(new Date(), 4), addDays(new Date(), 5)]}
    />
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
        showResetDate={boolean('showResetDate', true)}
        showClose={boolean('showClose', true)}
        displayFormat={text('displayFormat', 'MM/dd/yyyy')}
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
        showResetDate={boolean('showResetDate', true)}
        showClose={boolean('showClose', true)}
        displayFormat={text('displayFormat', 'MM/dd/yyyy')}
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
        showResetDate={boolean('showResetDate', true)}
        showClose={boolean('showClose', true)}
        displayFormat={text('displayFormat', 'MM/dd/yyyy')}
      />
    </ThemeProvider>
  ))
