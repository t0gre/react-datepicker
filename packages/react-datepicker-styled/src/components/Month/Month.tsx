import React from 'react'
import {useMonth, CalendarDay} from '@react-datepicker/hooks'
import MonthLabel from '../MonthLabel'
import DayLabel from '../DayLabel'
import Flex from '../Flex'
import Grid from '../Grid'
import Day from '../Day'

interface MonthProps {
  year: number
  month: number
}

const Month = ({year, month}: MonthProps) => {
  const {days, weekDays, monthLabel} = useMonth({year, month})

  return (
    <div>
      <Flex justifyContent="center" mb="28px">
        <MonthLabel label={monthLabel} />
      </Flex>
      <Grid gridTemplateColumns="repeat(7, 36px)">
        {weekDays.map(day => (
          <Flex key={day} justifyContent="center" mb="16px">
            <DayLabel label={day} />
          </Flex>
        ))}
      </Grid>
      <Grid gridTemplateColumns="repeat(7, 36px)">
        {days.map((day: CalendarDay, index: number) => {
          if (typeof day === 'object') {
            return (
              <Day
                isActive={false}
                key={day.day}
                day={day.day}
                disabled={false}
                isStartOrEnd={false}
              />
            )
          }
          return <div key={index} />
        })}
      </Grid>
    </div>
  )
}

export default Month
