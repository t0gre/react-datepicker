import React from 'react'
import styled from 'styled-components'
import {opacity, OpacityProps} from 'styled-system'
import {UseDatepickerProps} from '@react-datepicker/hooks'
import Grid from '../Grid'
import Flex from '../Flex'
import Input from '../Input'
import ArrowIcon from '../../icons/ArrowIcon'
import Datepicker from '../Datepicker'

const StyledArrowIcon = styled(ArrowIcon)<OpacityProps>`
  ${opacity}
`

export interface DateRangePickerProps extends UseDatepickerProps {}

function DateRangePicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  firstDayOfWeek,
  onFocusChange,
  numberOfMonths,
  focusedInput,
}: DateRangePickerProps) {
  return (
    <div>
      <Grid gridTemplateColumns="194px 39px 194px">
        <Input />
        <Flex alignItems="center" justifyContent="center">
          <StyledArrowIcon width="15px" height="12px" color="#ffffff" opacity={0.4} />
        </Flex>
        <Input />
      </Grid>
      <Datepicker
        startDate={startDate}
        endDate={endDate}
        minBookingDate={minBookingDate}
        maxBookingDate={maxBookingDate}
        firstDayOfWeek={firstDayOfWeek}
        onFocusChange={onFocusChange}
        numberOfMonths={numberOfMonths}
        focusedInput={focusedInput}
      />
    </div>
  )
}

export default DateRangePicker
