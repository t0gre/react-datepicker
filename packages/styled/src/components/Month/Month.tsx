import React from 'react'
import {useMonth, CalendarDay} from '@datepicker-react/hooks'
import MonthLabel from '../MonthLabel'
import DayLabel from '../DayLabel'
import Flex from '../Flex'
import Grid from '../Grid'
import Day from '../Day'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
// eslint-disable-next-line import/no-unresolved
import {MonthTheme} from '../../@types/theme'

interface MonthProps {
  year: number
  month: number
  firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6
  isDateBlocked(date: Date): boolean
  isDateSelected(date: Date): boolean
  isStartOrEndDate(date: Date): boolean
  isDateHovered(date: Date): boolean
  onDaySelect(date: Date): void
  onDayHover(date: Date): void
}

const Month = ({
  year,
  month,
  firstDayOfWeek,
  isDateBlocked,
  isDateSelected,
  isStartOrEndDate,
  onDaySelect,
  onDayHover,
  isDateHovered,
}: MonthProps) => {
  const {days, weekDays, monthLabel} = useMonth({year, month, weekStartsOn: firstDayOfWeek})
  const theme: MonthTheme = useThemeProps({
    daySize: globalStyles.daySize,
    monthLabelMargin: '0 0 28px',
    monthDayLabelMargin: '0 0 16px',
  })

  return (
    <div>
      <Flex justifyContent="center" m={theme.monthLabelMargin}>
        <MonthLabel label={monthLabel} />
      </Flex>
      <Grid daySizeGridTemplateColumns={theme.daySize}>
        {weekDays.map((day: string) => (
          <Flex key={day} justifyContent="center" m={theme.monthDayLabelMargin}>
            <DayLabel label={day} />
          </Flex>
        ))}
      </Grid>
      <Grid daySizeGridTemplateColumns={theme.daySize}>
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
                onDayHover={onDayHover}
                isWithinHoverRange={isDateHovered(day.date)}
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
