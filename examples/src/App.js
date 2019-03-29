import React from 'react'
import {DateRangePicker} from '@react-datepicker/styled'

function App() {
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
      <DateRangePicker
        minBookingDate={new Date(2019, 2, 10)}
        maxBookingDate={new Date(2019, 2, 27)}
        startDate={new Date(2019, 2, 12)}
        endDate={new Date(2019, 2, 20)}
        focusedInput={null}
        onFocusChange={focusedInput => {
          console.log(focusedInput)
        }}
      />
    </div>
  )
}

export default App
