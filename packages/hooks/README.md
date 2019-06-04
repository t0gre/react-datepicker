# @datepicker-react/hooks

[![Gzip size](https://img.shields.io/bundlephobia/minzip/@datepicker-react/hooks.svg)](https://img.shields.io/bundlephobia/minzip/@datepicker-react/hooks.svg)
[![Coverage Status](https://coveralls.io/repos/github/tresko/react-datepicker/badge.svg?branch=master)](https://coveralls.io/github/tresko/react-datepicker?branch=master)
[![Build Status](https://travis-ci.org/tresko/react-datepicker.svg?branch=master)](https://travis-ci.org/tresko/react-datepicker)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0c2c3960-87ee-4f5e-a4dc-1e2aac57d2b4/deploy-status)](https://app.netlify.com/sites/react-datepicker/deploys)

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

## Table of Contents

- [useDatepicker](#useDatepicker)
  - [useDatepicker props](#useDatepickerProps)
    -

## `useDatepicker`

The `useDatepicker` hook returns functions like `goToPreviousMonths`, `goToNextMonths`, etc., which
allows us to control the datepicker.

### `useDatepickerResult`

#### `firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6`
First day of the week.

#### `activeMonths: ({year: number, month: number})[]`
`Array` of visible months. Each month is a object and contains `year` and `month`.

#### `numberOfMonths: number`
`Number` of visible months.

#### `focusedDate: Date | null`
Focused date. 

#### `isDateSelected: (date: Date) => boolean`
Return `true` if a date is selected or within selected range, otherwise `false`.

#### `isDateHovered: (date: Date) => boolean`
Return `true` if a date is hovered, otherwise `false`.

#### `isDateBlocked: (date: Date) => boolean`
Return `true` if a date is blocked, otherwise `false`.

#### `isDateFocused: (date: Date) => boolean`
Return `true` if a date is focused, otherwise `false`.

#### `isFirstOrLastSelectedDate: (date: Date) => boolean`
Return `true` if a date is first or last in selected range, otherwise `false`.

#### `onResetDates: () => void`
Reset start and end date.

#### `onDayHover: (date: Date) => void`
Set internal `hovered` state.

#### `onDaySelect: (date: Date) => void`
Select a date. Which date is selected, depends of `focusedInput`.

#### `onDayFocus: (date: Date) => void`
Set `focusedDate`.

#### `goToNextMonths: () => void`
Updates `activeMonths` in accordance with the number of moths prop.

## Who's using

[LifeOnScreen](https://lifeonscreen.com) <br/>
[@datepicker-react/styled](https://github.com/tresko/react-datepicker/tree/master/packages/styled)

## License

Licensed under the MIT License, Copyright © 2019-present Miha Sedej.

See [LICENSE](https://github.com/tresko/react-datepicker/blob/master/LICENSE) for more information.

<br/>

[![Buy me a coffee](https://camo.githubusercontent.com/031fc5a134cdca5ae3460822aba371e63f794233/68747470733a2f2f7777772e6275796d6561636f666665652e636f6d2f6173736574732f696d672f637573746f6d5f696d616765732f6f72616e67655f696d672e706e67)](https://www.buymeacoffee.com/T1Eu7XSoF)
