import React from 'react'
import {useMonth, CalendarDay, FirstDayOfWeek} from '@datepicker-react/hooks'
import styled from 'styled-components'
import MonthLabel from '../MonthLabel'
import DayLabel from '../DayLabel'
import Flex from '../Flex'
import Grid from '../Grid'
import Day from '../Day'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
// eslint-disable-next-line import/no-unresolved
import {MonthTheme} from '../../@types/theme'

const MonthWrapper = styled('div')`
  &:last-child {
    padding: 0 1px 1px 0;
  }
`

interface MonthProps {
  year: number
  month: number
  firstDayOfWeek: FirstDayOfWeek
  dayLabelFormat(date: Date): string
  weekdayLabelFormat(date: Date): string
  monthLabelFormat(date: Date): string
}

const Month = ({
  year,
  month,
  firstDayOfWeek,
  dayLabelFormat,
  monthLabelFormat,
  weekdayLabelFormat,
}: MonthProps) => {
  const {days, weekDays, monthLabel} = useMonth({
    dayLabelFormat,
    monthLabelFormat,
    weekdayLabelFormat,
    year,
    month,
    firstDayOfWeek,
  })
  const theme: MonthTheme = useThemeProps({
    daySize: globalStyles.daySize,
    monthLabelMargin: '0 0 28px',
    monthDayLabelMargin: '0 0 16px',
  })

  return (
    <MonthWrapper>
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
            return <Day date={day.date} key={day.day} day={day.day} />
          }
          return <div key={index} />
        })}
      </Grid>
    </MonthWrapper>
  )
}

export default Month
