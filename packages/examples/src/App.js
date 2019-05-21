import React, {useReducer} from 'react'
import {ThemeProvider} from 'styled-components'
import {isSameDay} from 'date-fns'
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

  function isDateBlocked(date) {
    return isSameDay(date, new Date(2019, 4, 22, 0, 0, 0, 0))
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div
        style={{
          height: '80px',
          width: '100%',
          background: '#001217',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 16px',
        }}
      >
        <ThemeProvider
          theme={
            {
              // reactDatepicker: {
              //   dateRangeBackground: '#ffffff',
              //   dateRangeBorderRadius: '2px',
              //   dateRangeBorder: '1px solid #d0d0d0',
              //
              //   inputLabelBorder: '0',
              //   inputMinHeight: '48px',
              //   dateRangeEndDateInputPadding: '0',
              //   dateRangeArrowIconColor: 'red',
              //   dateRangeArrowIconOpacity: 1,
              //   inputCalendarWrapperTop: '18px',
              // },
            }
          }
        >
          <DateRangeInput
            vertical
            exactMinBookingDays={false}
            minBookingDate={new Date()}
            minBookingDays={7}
            maxBookingDate={new Date(2019, 6, 27)}
            startDate={state.startDate}
            endDate={state.endDate}
            onDateChange={data => dispatch({type: 'dateChange', payload: data})}
            numberOfMonths={2}
            focusedInput={state.focusedInput}
            onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
            isDayBlocked={isDateBlocked}
            // showResetDates={false}
            // showSelectedDates={false}
            // showClose={false}
            // showEndDateCalendarIcon={false}
          />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App
