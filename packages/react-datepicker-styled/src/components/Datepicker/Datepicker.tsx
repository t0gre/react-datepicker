import React from 'react'
import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  space,
  SpaceProps,
  borderRadius,
  BorderRadiusProps,
} from 'styled-system'
import {useDatepicker, MonthType, UseDatepickerProps} from '@react-datepicker/hooks'
import SelectedDate from '../SelectedDate'
import Grid from '../Grid'
import Flex from '../Flex'
import Month from '../Month'
import Box from '../Box'
import ResetDates from '../ResetDates'
import NavButton from '../NavButton'
import ArrowIcon from '../../icons/ArrowIcon'

interface StyledDatepicker extends BackgroundProps, SpaceProps, BorderRadiusProps {}
const StyledDatepicker = styled('div')<StyledDatepicker>`
  ${background}
  ${space}
  ${borderRadius}
`

const DateWrapper = styled('div')`
  position: relative;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background: #e6e7e8;
    bottom: 0;
    left: 0;
  }
`

function Datepicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  onFocusChange,
  focusedInput,
  numberOfMonths,
  firstDayOfWeek: firstDayOfWeekProp,
}: UseDatepickerProps) {
  const {
    activeMonths,
    isDateSelected,
    isStartOrEndDate,
    isDateBlocked,
    firstDayOfWeek,
  } = useDatepicker({
    startDate,
    endDate,
    focusedInput,
    onFocusChange: onFocusChange,
    minBookingDate,
    maxBookingDate,
    numberOfMonths,
    firstDayOfWeek: firstDayOfWeekProp,
  })

  return (
    <StyledDatepicker background="#ffffff" p="32px" borderRadius="2px">
      <DateWrapper>
        <Grid gridTemplateColumns="126px 75px 126px">
          <SelectedDate title="Start date:" date="Select" isActive />
          <Flex justifyContent="center" alignItems="center">
            <ArrowIcon height="12px" width="15px" color="#929598" />
          </Flex>
          <SelectedDate title="end date:" date="Select" isActive={false} />
        </Grid>
      </DateWrapper>
      <Box mt="28px" position="relative">
        <Box position="absolute" top="-5px" left="0">
          <NavButton type="prev" />
        </Box>
        <Box position="absolute" top="-5px" right="0">
          <NavButton type="next" />
        </Box>
        <Grid gridTemplateColumns="repeat(2, 1fr)" gridGap="0 32px">
          {activeMonths.map((month: MonthType) => (
            <Month
              key={`${month.year}-${month.month}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={firstDayOfWeek}
              isDateBlocked={isDateBlocked}
              isDateSelected={isDateSelected}
              isStartOrEndDate={isStartOrEndDate}
            />
          ))}
        </Grid>
      </Box>
      <Box mt="32px">
        <ResetDates />
      </Box>
    </StyledDatepicker>
  )
}

export default Datepicker
