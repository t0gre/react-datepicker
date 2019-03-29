import React, {useReducer} from 'react'
import {DateRangeInput} from '@react-datepicker/styled'

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

function reducer(state, action) {
  console.log(action)
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
    <div
      style={{
        marginTop: '400px',
        height: '80px',
        width: '100%',
        background: '#001217',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DateRangeInput
        minBookingDate={new Date(2019, 2, 10)}
        maxBookingDate={new Date(2019, 2, 27)}
        startDate={state.startDate}
        endDate={state.endDate}
        onDateChange={data => dispatch({type: 'dateChange', payload: data})}
        focusedInput={state.focusedInput}
        onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
      />
    </div>
  )
}

export default App
