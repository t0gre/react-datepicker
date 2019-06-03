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
import {DateRangeInput, Datepicker} from '@datepicker-react/styled'
```

### DateRangeInput
The `DateRangeInput` is a fully controlled component that allows users to select a date range. You can control the selected
dates using the `startDate`, `endDate`, and `onDateChange` props as shown below. The `DateRangeInput` also manages internal
state for partial dates entered by typing (although `onDateChange` will not trigger until a date has been entered
completely in that case). Similarly, you can control which input is focused as well as calendar visibility (the calendar is
only visible if `focusedInput` is defined) with the `focusedInput` and `onFocusChange` props as shown below.

Here is the minimum *REQUIRED* setup you need to get the `DateRangeInput` working:
```jsx
import React, {useReducer} from React
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

The following is a list of other *OPTIONAL* props you may provide to the `Datepicker` to customize appearance and behavior to your heart's desire.

```ts
phrases?: DatepickerPhrases
displayFormat?: string | FormatFunction
onClose?(): void
showResetDates?: boolean
showSelectedDates?: boolean
showClose?: boolean
vertical?: boolean
rtl?: boolean
minBookingDate?: Date
maxBookingDate?: Date
numberOfMonths?: number
minBookingDays?: number
exactMinBookingDays?: boolean
firstDayOfWeek?: FirstDayOfWeek
initialVisibleMonth?(numberOfMonths: number): MonthType[]
isDayBlocked?(date: Date): boolean
```

### Theming

`@datepicker-react/styled` supports theming with Styled components `ThemeProvider` and `Styled System` theme-based style. 

```jsx
<ThemeProvider
  theme={styledTheme => ({
    ...styledTheme,
    reactDatepicker: {
      dateRangeBackground: ['#ffffff', null, null, null, 'transparent'],
      dateRangeBorderRadius: ['2px', null, null, null, '0'],
    },
  })}
>
  ...
</ThemeProvider>
```

All theme props:
```ts
interface CommonTheme {
  fontFamily?: ResponsiveValue<FontFamilyProperty>
  daySize?: number | (number | null)[] | undefined
}

export interface CloseTheme extends CommonTheme {
  closeColor?: ResponsiveValue<ColorProperty>
  closeHoverColor?: ResponsiveValue<ColorProperty>
  closeMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  closeFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  closeFontWeight?: ResponsiveValue<FontWeightProperty>
}

export interface SelectDateTheme extends CommonTheme {
  selectDateLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  selectDateLabelColor?: ResponsiveValue<ColorProperty>
  selectDateLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  selectDateDateColor?: ResponsiveValue<ColorProperty>
  selectDateDateFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  selectDateDateFontWeight?: ResponsiveValue<FontWeightProperty>
  selectDateDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  selectDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
}

export interface ResetDatesTheme extends CommonTheme {
  resetDatesIconColor?: string
  resetDatesIconHeight?: string
  resetDatesIconWidth?: string
  resetDatesTextColor?: ResponsiveValue<ColorProperty>
  resetDatesTextMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  resetDatesTextFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  resetDatesTextLineHeight?: ResponsiveValue<LineHeightProperty<TLengthStyledSystem>>
}

export interface NavButtonTheme {
  navButtonHeight?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
  navButtonWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
  navButtonBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  navButtonBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  navButtonPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  navButtonIconHeight?: string
  navButtonIconWidth?: string
  navButtonIconColor?: string
}

export interface MonthLabelTheme extends CommonTheme {
  monthLabelLineHeight?: ResponsiveValue<LineHeightProperty<TLengthStyledSystem>>
  monthLabelFontWeight?: ResponsiveValue<FontWeightProperty>
  monthLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  monthLabelColor?: ResponsiveValue<ColorProperty>
}

export interface DayLabelTheme extends CommonTheme {
  dayLabelFontWeight?: ResponsiveValue<FontWeightProperty>
  dayLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  dayLabelColor?: ResponsiveValue<ColorProperty>
}

export interface DayTheme extends CommonTheme {
  dayFontWeight?: ResponsiveValue<FontWeightProperty>
  dayFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  dayColor?: ResponsiveValue<ColorProperty>
  dayHoverColor?: ResponsiveValue<ColorProperty>
  dayHoverRangeColor?: ResponsiveValue<ColorProperty>
  daySelectedColor?: ResponsiveValue<ColorProperty>
  daySelectedHoverColor?: ResponsiveValue<ColorProperty>
  daySelectedFirstOrLastColor?: ResponsiveValue<ColorProperty>
  dayBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  dayHoverBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  dayHoverRangeBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  daySelectedBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  daySelectedHoverBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  daySelectedFirstOrLastBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  dayBorderColor?: ColorProperty
  dayHoverRangeBorderColor?: ColorProperty
  daySelectedBorderColor?: ColorProperty
  daySelectedFirstOrLastBorderColor?: ColorProperty
  dayAccessibilityBorderColor?: ColorProperty
}

export interface MonthTheme extends CommonTheme {
  monthLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  monthDayLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
}

export interface InputTheme extends CommonTheme {
  inputLabelDisplay?: ResponsiveValue<DisplayProperty>
  inputLabelPosition?: ResponsiveValue<PositionProperty>
  inputLabelBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputLabelBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>
  inputLabelBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  inputLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  inputFontWeight?: ResponsiveValue<FontWeightProperty>
  inputPlaceholderFontWeight?: ResponsiveValue<FontWeightProperty>
  inputFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  inputColor?: ResponsiveValue<ColorProperty>
  inputPlaceholderColor?: ResponsiveValue<ColorProperty>
  inputBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  inputMinHeight?: ResponsiveValue<MinHeightProperty<TLengthStyledSystem>>
  inputWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
  inputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  inputBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputActiveBoxShadow?: ResponsiveValue<BoxShadowProperty>
  inputCalendarWrapperPosition?: ResponsiveValue<PositionProperty>
  inputCalendarWrapperHeight?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
  inputCalendarWrapperWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
  inputCalendarWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  inputCalendarWrapperLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  inputCalendarWrapperRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
  inputCalendarIconWidth?: string
  inputCalendarIconHeight?: string
  inputCalendarIconColor?: string
}

export interface DatepickerTheme extends CommonTheme {
  datepickerBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  datepickerBoxShadow?: ResponsiveValue<BoxShadowProperty>
  datepickerPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  datepickerBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>
  datepickerPosition?: ResponsiveValue<PositionProperty>
  datepickerWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
  datepickerCloseWrapperPosition?: ResponsiveValue<PositionProperty>
  datepickerCloseWrapperDisplay?: ResponsiveValue<DisplayProperty>
  datepickerCloseWrapperJustifyContent?: ResponsiveValue<JustifyContentProperty>
  datepickerCloseWrapperMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  datepickerCloseWrapperRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
  datepickerCloseWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  datepickerCloseWrapperLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  datepickerCloseWrapperBottom?: ResponsiveValue<BottomProperty<TLengthStyledSystem>>
  datepickerCloseWrapperZIndex?: ResponsiveValue<ZIndexProperty>
  datepickerSelectDateGridTemplateColumns?: ResponsiveValue<
    GridTemplateColumnsProperty<TLengthStyledSystem>
  >
  datepickerSelectDateArrowIconWidth?: string
  datepickerSelectDateArrowIconHeight?: string
  datepickerSelectDateArrowIconColor?: string
  datepickerMonthsWrapperMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  datepickerResetDatesWrapperMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  datepickerMonthsGridGap?: ResponsiveValue<GridGapProperty<TLengthStyledSystem>>
  datepickerPreviousMonthButtonPosition?: ResponsiveValue<PositionProperty>
  datepickerPreviousMonthButtonRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
  datepickerPreviousMonthButtonTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  datepickerPreviousMonthButtonLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  datepickerPreviousMonthButtonBottom?: ResponsiveValue<BottomProperty<TLengthStyledSystem>>
  datepickerNextMonthButtonPosition?: ResponsiveValue<PositionProperty>
  datepickerNextMonthButtonRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
  datepickerNextMonthButtonTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  datepickerNextMonthButtonLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  datepickerNextMonthButtonBottom?: ResponsiveValue<BottomProperty<TLengthStyledSystem>>
  datepickerMonthsGridHeight?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
  datepickerMonthsGridOverflow?: ResponsiveValue<OverflowProperty>
}

export interface DateRangeInputTheme extends CommonTheme {
  dateRangeBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  dateRangeGridTemplateColumns?: ResponsiveValue<GridTemplateColumnsProperty<TLengthStyledSystem>>
  dateRangeBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  dateRangeBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>
  dateRangeArrowIconWidth?: string
  dateRangeArrowIconHeight?: string
  dateRangeArrowIconColor?: ResponsiveValue<ColorProperty>
  dateRangeArrowIconOpacity?: ResponsiveValue<GlobalsNumber>
  dateRangeDatepickerWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  dateRangeDatepickerWrapperRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
  dateRangeDatepickerWrapperLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  dateRangeDatepickerWrapperBottom?: ResponsiveValue<BottomProperty<TLengthStyledSystem>>
  dateRangeDatepickerWrapperPosition?: ResponsiveValue<PositionProperty>
  dateRangeStartDateInputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  dateRangeEndDateInputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
}
```
