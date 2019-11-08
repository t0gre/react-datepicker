# @datepicker-react/styled

[![Gzip size](https://img.shields.io/bundlephobia/minzip/@datepicker-react/styled.svg)](https://img.shields.io/bundlephobia/minzip/@datepicker-react/styled.svg)
[![Coverage Status](https://coveralls.io/repos/github/tresko/react-datepicker/badge.svg?branch=master)](https://coveralls.io/github/tresko/react-datepicker?branch=master)
[![Build Status](https://travis-ci.org/tresko/react-datepicker.svg?branch=master)](https://travis-ci.org/tresko/react-datepicker)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0c2c3960-87ee-4f5e-a4dc-1e2aac57d2b4/deploy-status)](https://app.netlify.com/sites/react-datepicker/deploys)

[![NPM](https://nodei.co/npm/@datepicker-react/styled.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@datepicker-react/styled?downloads=true&downloadRank=true&stars=true)

> An easily internationalizable, accessible, mobile-friendly datepicker library for the web, build
> with styled-components.

![example](https://github.com/tresko/react-datepicker/raw/master/docs/datepicker.gif)

## Live Playground

For examples of the datepicker in action, go to https://react-datepicker.netlify.com/.

OR

To run that demo on your own computer:

- Clone this repository
- `yarn install && bootstrap`
- `yarn storybook`
- Visit http://localhost:6006/

## Getting Started

### Install

```sh
yarn add @datepicker-react/styled styled-components
```

### Include component

```js
import {DateRangeInput, DateSingleInput, Datepicker} from '@datepicker-react/styled'
```

### DateRangeInput

The `DateRangeInput` is a fully controlled component that allows users to select a date range. You
can control the selected dates using the `startDate`, `endDate`, and `onDatesChange` props as shown
below. Similarly, you can control which input is focused as well as calendar visibility (the
calendar is only visible if `focusedInput` is defined) with the `focusedInput` and `onFocusChange`
props as shown below.

Here is the minimum _REQUIRED_ setup you need to get the `DateRangeInput` working:

```jsx
import React, {useReducer} from 'react'
import {DateRangeInput} from '@datepicker-react/styled'

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return {...state, focusedInput: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DateRangeInput
      onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
      onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
      startDate={state.startDate} // Date or null
      endDate={state.endDate} // Date or null
      focusedInput={state.focusedInput} // START_DATE, END_DATE or null
    />
  )
}
```

The following is a list of other _OPTIONAL_ props you may provide to the `DateRangeInput` to
customize appearance and behavior to your heart's desire.

```ts
displayFormat?: string | FormatFunction // Default: 'MM/DD/YYYY'
phrases?: DateRangeInputPhrases
showStartDateCalendarIcon?: boolean // Default: true
showEndDateCalendarIcon?: boolean // Default: true
onClose?(): void
vertical?: boolean // Default: false
showResetDates?: boolean // Default: true
showSelectedDates?: boolean // Default: true
showClose?: boolean // Default: true
rtl?: boolean // Default: false
placement?: 'top' | 'bottom' // Default: bottom
minBookingDate?: Date
maxBookingDate?: Date
numberOfMonths?: number // Default: 2
minBookingDays?: number // Default: 1
exactMinBookingDays?: boolean // Default: false
firstDayOfWeek?: FirstDayOfWeek // Default: 1
initialVisibleMonth?(numberOfMonths: number): MonthType[]
isDateBlocked?(date: Date): boolean
dayLabelFormat?(date: Date): string
weekdayLabelFormat?(date: Date): string
monthLabelFormat?(date: Date): string
onDayRender?(date: Date): React.ReactNode
startDateInputId?: string
endDateInputId?: string
```

### Datepicker

The `Datepicker` is a fully controlled component that allows users to select a date range. You can
control the selected dates using the `startDate`, `endDate`, and `onDatesChange` props as shown
below. Similarly, you can control which input is focused with the `focusedInput` prop.

Here is the minimum _REQUIRED_ setup you need to get the `Datepicker` working:

```jsx
import React, {useState} from 'react'
import {Datepicker, START_DATE} from '@datepicker-react/styled'

function App() {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  })

  function handleDatesChange(data: OnDatesChangeProps) {
    if (!data.focusedInput) {
      setState({...data, focusedInput: START_DATE})
    } else {
      setState(data)
    }
  }

  return (
    <Datepicker
      onDatesChange={handleDatesChange}
      startDate={state.startDate} // Date or null
      endDate={state.endDate} // Date or null
      focusedInput={state.focusedInput} // START_DATE, END_DATE or null
    />
  )
}
```

The following is a list of other _OPTIONAL_ props you may provide to the `Datepicker` to customize
appearance and behavior to your heart's desire.

```ts
phrases?: DatepickerPhrases
displayFormat?: string | FormatFunction // Default: 'MM/DD/YYYY'
onClose?(): void
showResetDates?: boolean // Default: true
showSelectedDates?: boolean // Default: true
showClose?: boolean // Default: true
vertical?: boolean // Default: false
rtl?: boolean // Default: false
minBookingDate?: Date
maxBookingDate?: Date
numberOfMonths?: number // Default: 2
minBookingDays?: number // Default: 1
exactMinBookingDays?: boolean // Default: false
firstDayOfWeek?: FirstDayOfWeek // Default: 0
initialVisibleMonth?(numberOfMonths: number): MonthType[]
isDateBlocked?(date: Date): boolean
dayLabelFormat?(date: Date): string
weekdayLabelFormat?(date: Date): string
monthLabelFormat?(date: Date): string
onDayRender?(date: Date): React.ReactNode
```

### DateSingleInput

The `DateSingleInput` is a fully controlled component that allows users to select a date. You can
control the selected date using the `date` and `onDateChange` props as shown below. Similarly, you
can control calendar visibility (the calendar is only visible if `showDatepicker` is `true`) with
the `showDatepicker` and `onFocusChange` props as shown below.

Here is the minimum _REQUIRED_ setup you need to get the `DateSingleInput` working:

```jsx
import React, {useReducer} from 'react'
import {DateSingleInput} from '@datepicker-react/styled'

const initialState = {
  date: null,
  showDatepicker: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return {...state, showDatepicker: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DateSingleInput
      onDateChange={data => dispatch({type: 'dateChange', payload: data})}
      onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
      date={state.date} // Date or null
      showDatepicker={state.showDatepicker} // Boolean
    />
  )
}
```

The following is a list of other _OPTIONAL_ props you may provide to the `DateSingleInput` to
customize appearance and behavior to your heart's desire.

```ts
minBookingDate?: Date
maxBookingDate?: Date
numberOfMonths?: number
firstDayOfWeek?: FirstDayOfWeek
displayFormat?: string | FormatFunction
phrases?: DateSingleInputPhrases
showCalendarIcon?: boolean
vertical?: boolean
showResetDate?: boolean
showClose?: boolean
rtl?: boolean
placement?: 'top' | 'bottom'
initialVisibleMonth?(numberOfMonths: number): MonthType[]
isDateBlocked?(date: Date): boolean
onClose?(): void
dayLabelFormat?(date: Date): string
weekdayLabelFormat?(date: Date): string
monthLabelFormat?(date: Date): string
onDayRender?(date: Date): React.ReactNode
inputId?: string
```

### Theming

`@datepicker-react/styled` supports theming with Styled components `ThemeProvider` and
`Styled System` theme-based style.

```jsx
<ThemeProvider
  theme={{
    breakpoints: ['32em', '48em', '64em'],
    reactDatepicker: {
      daySize: [36, 40],
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
  ...
</ThemeProvider>
```

- [See all theme props](../../docs/THEME_PROPS.md)
- [CodeSandbox example](https://codesandbox.io/s/theming-datepicker-reactstyled-42pdb?fontsize=14)

## How to build your own datepicker?

Simple. Use
[React hooks (@datepicker-react/hooks)](https://github.com/tresko/react-datepicker/tree/master/packages/hooks).

## Who's using

[LifeOnScreen](https://lifeonscreen.com)

## Articles

- [Yet another datepicker in React](https://tresko.dev/yet-another-datepicker-in-react)
- [Theming React datepicker](https://tresko.dev/theming-react-datepicker-datepicker-react-styled)
- [Create a custom React date picker in 10 minutes](https://tresko.dev/create-a-custom-react-date-picker-in-10-minutes)

## License

Licensed under the MIT License, Copyright © 2019-present Miha Sedej.

See [LICENSE](https://github.com/tresko/react-datepicker/blob/master/LICENSE) for more information.

<br/>

[![Buy me a coffee](https://camo.githubusercontent.com/031fc5a134cdca5ae3460822aba371e63f794233/68747470733a2f2f7777772e6275796d6561636f666665652e636f6d2f6173736574732f696d672f637573746f6d5f696d616765732f6f72616e67655f696d672e706e67)](https://www.buymeacoffee.com/T1Eu7XSoF)
