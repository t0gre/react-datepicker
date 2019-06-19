import React from 'react'
import {useMonth, CalendarDay, FirstDayOfWeek} from '@datepicker-react/hooks'
import styled, {keyframes} from 'styled-components'
import MonthLabel from '../MonthLabel'
import DayLabel from '../DayLabel'
import Flex from '../Flex'
import Grid from '../Grid'
import Day from '../Day'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
// eslint-disable-next-line import/no-unresolved
import {MonthTheme} from '../../@types/theme'

const opacity0To100 = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const MonthWrapper = styled('div')`
  animation-name: ${opacity0To100};
  animation-duration: 0.25s;
  animation-timing-function: ease-in;

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
  const {days, weekdayLabels, monthLabel} = useMonth({
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
        {weekdayLabels.map((weekdayLabel: string) => (
          <Flex key={weekdayLabel} justifyContent="center" m={theme.monthDayLabelMargin}>
            <DayLabel label={weekdayLabel} />
          </Flex>
        ))}
      </Grid>
      <Grid daySizeGridTemplateColumns={theme.daySize}>
        {days.map((day: CalendarDay, index: number) => {
          if (typeof day === 'object') {
            return <Day date={day.date} key={day.dayLabel} day={day.dayLabel} />
          }
          return <div key={index} />
        })}
      </Grid>
    </MonthWrapper>
  )
}

export default Month
