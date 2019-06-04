# @datepicker-react/hooks

[![Gzip size](https://img.shields.io/bundlephobia/minzip/@datepicker-react/hooks.svg)](https://img.shields.io/bundlephobia/minzip/@datepicker-react/hooks.svg) [![Coverage Status](https://coveralls.io/repos/github/tresko/react-datepicker/badge.svg?branch=master)](https://coveralls.io/github/tresko/react-datepicker?branch=master) [![Build Status](https://travis-ci.org/tresko/react-datepicker.svg?branch=master)](https://travis-ci.org/tresko/react-datepicker) [![Netlify Status](https://api.netlify.com/api/v1/badges/0c2c3960-87ee-4f5e-a4dc-1e2aac57d2b4/deploy-status)](https://app.netlify.com/sites/react-datepicker/deploys)

[![NPM](https://nodei.co/npm/@datepicker-react/hooks.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@datepicker-react/hooks?downloads=true&downloadRank=true&stars=true)

## Getting Started
### Install

  ```sh
  yarn add @datepicker-react/hooks
  ```

### Include hooks
```js
import {useDatepicker, useMonth, useDay} from '@datepicker-react/hooks'
```

### useDatepicker
Controls datepicker

#### Props
```ts
export const START_DATE = 'startDate'
export const END_DATE = 'endDate'

export type FocusedInput = 'startDate' | 'endDate' | null

export interface OnDateChangeProps {
  focusedInput: FocusedInput
  startDate: Date | null
  endDate: Date | null
}

export type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface UseDatepickerProps {
  onDateChange(data: OnDateChangeProps): void
  minBookingDate?: Date
  maxBookingDate?: Date
  startDate: Date | null
  endDate: Date | null
  focusedInput: FocusedInput
  numberOfMonths?: number // Default: 2
  minBookingDays?: number // Default: 1
  exactMinBookingDays?: boolean // Default: false
  firstDayOfWeek?: FirstDayOfWeek // Default: 1
  initialVisibleMonth?(numberOfMonths: number): MonthType[]
  isDayBlocked?(date: Date): boolean // Default: () => false
}
```

#### Datepicker component example
```jsx
import React, {useState} from React
import {useDatepicker, START_DATE} from '@datepicker-react/hooks'

function Datepicker() {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  })
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    numberOfMonths,
    isDateFocused,
    focusedDate,
    onResetDates,
    onDayHover,
    onDaySelect,
    onDayFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDateChange: handleDataChange
  })
  
  function handleDataChange(data: OnDateChangeProps) {
    if (!data.focusedInput) {
      setState({...data, focusedInput: START_DATE})
    } else {
      setState(data)
    }
  }
  
  return (
    <DateRangeInput
      onDateChange={data => dispatch({type: 'dateChange', payload: data})}
      onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
      startDate={state.startDate} // Date or null
      endDate={state.endDate} // Date or null
      focusedInput={state.focusedInput} // START_DATE, END_DATE or null
    />
  )
}
```

The following is a list of other *OPTIONAL* props you may provide to the `DateRangeInput` to customize appearance and behavior to your heart's desire.

```ts
displayFormat?: string | FormatFunction
phrases?: DateRangeInputPhrases
showStartDateCalendarIcon?: boolean
showEndDateCalendarIcon?: boolean
onClose?(): void
vertical?: boolean
showResetDates?: boolean
showSelectedDates?: boolean
showClose?: boolean
rtl?: boolean
placement?: 'top' | 'bottom'
minBookingDate?: Date
maxBookingDate?: Date
numberOfMonths?: number
minBookingDays?: number
exactMinBookingDays?: boolean
firstDayOfWeek?: FirstDayOfWeek
initialVisibleMonth?(numberOfMonths: number): MonthType[]
isDayBlocked?(date: Date): boolean
dayFormat?(date: Date): string
weekDayFormat?(date: Date): string
monthLabelFormat?(date: Date): string
onDayRender?(date: Date): React.ReactNode
```

### Datepicker
The `Datepicker` is a fully controlled component that allows users to select a date range. You can control the selected
dates using the `startDate`, `endDate`, and `onDateChange` props as shown below. The `Datepicker` also manages internal
state for partial dates entered by typing (although `onDateChange` will not trigger until a date has been entered
completely in that case). Similarly, you can control which input is focused with the `focusedInput` prop.

Here is the minimum *REQUIRED* setup you need to get the `Datepicker` working:

```jsx
import React, {useState} from 'react'
import {Datepicker, START_DATE} from '@datepicker-react/styled'

function App() {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  })
  
  function handleDataChange(data: OnDateChangeProps) {
    if (!data.focusedInput) {
      setState({...data, focusedInput: START_DATE})
    } else {
      setState(data)
    }
  }
  
  return (
    <Datepicker
      onDateChange={handleDataChange}
      startDate={state.startDate} // Date or null
      endDate={state.endDate} // Date or null
      focusedInput={state.focusedInput} // START_DATE, END_DATE or null
    />
  )
}
```

## Who's using

[LifeOnScreen](https://lifeonscreen.com)
[@datepicker-react/styled](https://github.com/tresko/react-datepicker/tree/master/packages/styled)

## License

Licensed under the MIT License, Copyright © 2019-present Miha Sedej.

See [LICENSE](./LICENSE) for more information.
