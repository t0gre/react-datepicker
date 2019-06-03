# @react-datepicker/styled
A React datepicker library.

[![Gzip size](https://img.shields.io/bundlephobia/minzip/@datepicker-react/styled.svg)](https://img.shields.io/bundlephobia/minzip/@datepicker-react/styled.svg) [![Coverage Status](https://coveralls.io/repos/github/tresko/react-datepicker/badge.svg?branch=master)](https://coveralls.io/github/tresko/react-datepicker?branch=master) [![Build Status](https://travis-ci.org/tresko/react-datepicker.svg?branch=master)](https://travis-ci.org/tresko/react-datepicker) [![Netlify Status](https://api.netlify.com/api/v1/badges/0c2c3960-87ee-4f5e-a4dc-1e2aac57d2b4/deploy-status)](https://app.netlify.com/sites/react-datepicker/deploys)

[![NPM](https://nodei.co/npm/@datepicker-react/styled.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@datepicker-react/styled?downloads=true&downloadRank=true&stars=true)

> An easily internationalizable, accessible, mobile-friendly datepicker library for the web.

## Live Playground

For examples of the datepicker in action, go to https://react-datepicker.netlify.com/.

OR

To run that demo on your own computer:
* Clone this repository
* `yarn install && bootstrap`
* `yarn storybook`
* Visit http://localhost:6006/


## Getting Started
### Install

  ```sh
  yarn add @datepicker-react/styled styled-components
  ```

### Include component
```js
import { DateRangeInput, Datepicker } from '@datepicker-react/styled';
```

#### DateRangeInput
The `DateRangeInput` is a fully controlled component that allows users to select a date range. You can control the selected
dates using the `startDate`, `endDate`, and `onDateChange` props as shown below. The `DateRangeInput` also manages internal
state for partial dates entered by typing (although `onDateChange` will not trigger until a date has been entered
completely in that case). Similarly, you can control which input is focused as well as calendar visibility (the calendar is
only visible if `focusedInput` is defined) with the `focusedInput` and `onFocusChange` props as shown below.

Here is the minimum *REQUIRED* setup you need to get the `DateRangePicker` working:
```jsx
import React, {useReducer} from React
import { DateRangeInput } from '@datepicker-react/styled';

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
      onDateChange={data => dispatch({type: 'dateChange', payload: data})}
      onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
      startDate={state.startDate} // Date or null
      endDate={state.endDate} // Date or null
      focusedInput={state.focusedInput} START_DATE, END_DATE or null
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
```
