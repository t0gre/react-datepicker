import React from 'react'
import styled from 'styled-components'
import {opacity, OpacityProps} from 'styled-system'
import {
  UseDatepickerProps,
  START_DATE,
  FormatFunction,
  getInputValue,
  END_DATE,
  FocusedInput,
} from '@react-datepicker/hooks'
import {dateRangeInputPhrases, DateRangeInputPhrases} from '../../phrases'
import Grid from '../Grid'
import Flex from '../Flex'
import Input from '../Input'
import ArrowIcon from '../../icons/ArrowIcon'
import Datepicker from '../Datepicker'

const StyledArrowIcon = styled(ArrowIcon)<OpacityProps>`
  ${opacity}
`

export interface DateRangeInputProps extends UseDatepickerProps {
  displayFormat: string | FormatFunction
  phrases?: DateRangeInputPhrases
  onFocusChange(focusInput: FocusedInput): void
}

function DateRangeInput({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  firstDayOfWeek,
  onFocusChange,
  numberOfMonths,
  focusedInput,
  onDateChange,
  displayFormat = 'MM/DD/YYYY',
  phrases = dateRangeInputPhrases,
}: DateRangeInputProps) {
  return (
    <div>
      <Grid gridTemplateColumns="194px 39px 194px">
        <Input
          id="startDate"
          ariaLabel={phrases.startDateAriaLabel}
          placeholder={phrases.startDatePlaceholder}
          value={getInputValue(startDate, displayFormat, '')}
          onClick={() => onFocusChange(START_DATE)}
        />
        <Flex alignItems="center" justifyContent="center">
          <StyledArrowIcon width="15px" height="12px" color="#ffffff" opacity={0.4} />
        </Flex>
        <Input
          id="startDate"
          ariaLabel={phrases.endDateAriaLabel}
          placeholder={phrases.endDatePlaceholder}
          value={getInputValue(endDate, displayFormat, '')}
          onClick={() => onFocusChange(END_DATE)}
        />
      </Grid>
      <Datepicker
        startDate={startDate}
        endDate={endDate}
        minBookingDate={minBookingDate}
        maxBookingDate={maxBookingDate}
        firstDayOfWeek={firstDayOfWeek}
        numberOfMonths={numberOfMonths}
        focusedInput={focusedInput}
        displayFormat={displayFormat}
        onDateChange={onDateChange}
      />
    </div>
  )
}

export default DateRangeInput
