import React, {useReducer, useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {DateRangeInput} from '@datepicker-react/styled'

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

function reducer(state, action) {
  console.log(state, action)
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
  const [numberOfMonths, setNumberOfMonths] = useState(2)

  function onClick() {
    setNumberOfMonths(1)
  }

  return (
    <div
      style={{
        marginTop: '600px',
        height: '80px',
        width: '100%',
        background: '#001217',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={onClick}>Number of months = 1</button>
      <div style={{width: '279px'}}>
        <ThemeProvider theme={{}}>
          <DateRangeInput
            minBookingDate={new Date()}
            minBookingDays={3}
            maxBookingDate={new Date(2019, 4, 27)}
            startDate={state.startDate}
            endDate={state.endDate}
            onDateChange={data => dispatch({type: 'dateChange', payload: data})}
            numberOfMonths={numberOfMonths}
            focusedInput={state.focusedInput}
            onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
          />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App
