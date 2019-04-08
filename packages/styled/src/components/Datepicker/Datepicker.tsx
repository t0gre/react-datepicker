import React from 'react'
import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  space,
  SpaceProps,
  borderRadius,
  BorderRadiusProps,
  position,
  PositionProps,
  ResponsiveValue,
  TLengthStyledSystem,
} from 'styled-system'
import {GridTemplateColumnsProperty, HeightProperty} from 'csstype'
import {
  useDatepicker,
  MonthType,
  UseDatepickerProps,
  getInputValue,
  START_DATE,
  END_DATE,
  FormatFunction,
} from '@datepicker-react/hooks'
import {datepickerPhrases, DatepickerPhrases} from '../../phrases'
import SelectedDate from '../SelectedDate'
import Grid from '../Grid'
import Flex from '../Flex'
import Month from '../Month'
import Box from '../Box'
import ResetDates from '../ResetDates'
import NavButton from '../NavButton'
import Close from '../Close'
import ArrowIcon from '../../icons/ArrowIcon'

interface StyledDatepicker extends BackgroundProps, SpaceProps, BorderRadiusProps, PositionProps {}
const StyledDatepicker = styled('div')<StyledDatepicker>`
  ${background}
  ${space}
  ${borderRadius}
  ${position}
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

export interface DatepickerStyles {
  daySize?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
  selectDateGridTemplateColumns?: ResponsiveValue<GridTemplateColumnsProperty<TLengthStyledSystem>>
}

export interface DatepickerProps extends UseDatepickerProps {
  phrases?: DatepickerPhrases
  displayFormat: string | FormatFunction
  onClose?(): void

  styles?: DatepickerStyles
}

function Datepicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  focusedInput,
  onDateChange,
  onClose = () => {},
  numberOfMonths: numberOfMonthsProp,
  firstDayOfWeek: firstDayOfWeekProp,
  displayFormat = 'MM/DD/YYYY',
  phrases = datepickerPhrases,
  styles = {},
}: DatepickerProps) {
  const {
    activeMonths,
    isDateSelected,
    isStartOrEndDate,
    isDateBlocked,
    firstDayOfWeek,
    onDaySelect,
    onResetDates,
    goToPreviousMonths,
    goToNextMonths,
    numberOfMonths,
  } = useDatepicker({
    startDate,
    endDate,
    focusedInput,
    onDateChange,
    minBookingDate,
    maxBookingDate,
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp,
  })

  return (
    <StyledDatepicker background="#ffffff" p="32px" borderRadius="2px" position="relative">
      <Box position="absolute" right="32px" zIndex={1}>
        <Close onClick={onClose} />
      </Box>
      <DateWrapper>
        <Grid gridTemplateColumns={styles.selectDateGridTemplateColumns || '126px 75px 126px'}>
          <SelectedDate
            title={phrases.datepickerStartDateLabel}
            date={getInputValue(startDate, displayFormat, phrases.datepickerStartDatePlaceholder)}
            isActive={focusedInput === START_DATE}
          />
          <Flex justifyContent="center" alignItems="center">
            <ArrowIcon height="12px" width="15px" iconColor="#929598" />
          </Flex>
          <SelectedDate
            title={phrases.datepickerEndDateLabel}
            date={getInputValue(endDate, displayFormat, phrases.datepickerEndDatePlaceholder)}
            isActive={focusedInput === END_DATE}
          />
        </Grid>
      </DateWrapper>
      <Box mt="28px" position="relative">
        <Box position="absolute" top="-5px" left="0">
          <NavButton type="prev" onClick={goToPreviousMonths} />
        </Box>
        <Box position="absolute" top="-5px" right="0">
          <NavButton type="next" onClick={goToNextMonths} />
        </Box>
        <Grid gridTemplateColumns={`repeat(${numberOfMonths}, 1fr)`} gridGap="0 32px">
          {activeMonths.map((month: MonthType) => (
            <Month
              key={`${month.year}-${month.month}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={firstDayOfWeek}
              isDateBlocked={isDateBlocked}
              isDateSelected={isDateSelected}
              isStartOrEndDate={isStartOrEndDate}
              onDaySelect={onDaySelect}
              daySize={styles.daySize}
            />
          ))}
        </Grid>
      </Box>
      <Box mt="32px">
        <ResetDates onResetDates={onResetDates} text={phrases.resetDates} />
      </Box>
    </StyledDatepicker>
  )
}

export default Datepicker
