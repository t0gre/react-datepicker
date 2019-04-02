import React from 'react'
import {useMonth, CalendarDay} from '@datepicker-react/hooks'
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system'
import {HeightProperty} from 'csstype'
import MonthLabel from '../MonthLabel'
import DayLabel from '../DayLabel'
import Flex from '../Flex'
import Grid from '../Grid'
import Day from '../Day'

interface MonthProps {
  year: number
  month: number
  firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6
  isDateBlocked(date: Date): boolean
  isDateSelected(date: Date): boolean
  isStartOrEndDate(date: Date): boolean
  onDaySelect(date: Date): void

  daySize?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
}

const Month = ({
  year,
  month,
  firstDayOfWeek,
  isDateBlocked,
  isDateSelected,
  isStartOrEndDate,
  onDaySelect,

  daySize,
}: MonthProps) => {
  const {days, weekDays, monthLabel} = useMonth({year, month, weekStartsOn: firstDayOfWeek})

  return (
    <div>
      <Flex justifyContent="center" mb="28px">
        <MonthLabel label={monthLabel} />
      </Flex>
      <Grid gridTemplateColumns="repeat(7, 1fr)">
        {weekDays.map(day => (
          <Flex key={day} justifyContent="center" mb="16px">
            <DayLabel label={day} />
          </Flex>
        ))}
      </Grid>
      <Grid gridTemplateColumns="repeat(7, 1fr)">
        {days.map((day: CalendarDay, index: number) => {
          if (typeof day === 'object') {
            return (
              <Day
                isActive={isDateSelected(day.date)}
                date={day.date}
                key={day.day}
                day={day.day}
                disabled={isDateBlocked(day.date)}
                isStartOrEnd={isStartOrEndDate(day.date)}
                onDaySelect={onDaySelect}
                daySize={daySize}
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
