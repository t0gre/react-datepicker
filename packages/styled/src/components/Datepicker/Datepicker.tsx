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
  boxShadow,
  BoxShadowProps,
} from 'styled-system'
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
// eslint-disable-next-line import/no-unresolved
import {DatepickerTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'

interface StyledDatepicker
  extends BackgroundProps,
    SpaceProps,
    BorderRadiusProps,
    PositionProps,
    BoxShadowProps {}
const StyledDatepicker = styled('div')<StyledDatepicker>`
  ${background}
  ${space}
  ${borderRadius}
  ${position}
  ${boxShadow}
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

export interface DatepickerProps extends UseDatepickerProps {
  phrases?: DatepickerPhrases
  displayFormat?: string | FormatFunction
  onClose?(): void
}

function Datepicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  focusedInput,
  onDateChange,
  isDayBlocked = () => false,
  minBookingDays = 1,
  onClose = () => {},
  numberOfMonths: numberOfMonthsProp,
  firstDayOfWeek: firstDayOfWeekProp,
  displayFormat = 'MM/DD/YYYY',
  phrases = datepickerPhrases,
}: DatepickerProps) {
  const {
    activeMonths,
    isDateSelected,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateHovered,
    firstDayOfWeek,
    onDaySelect,
    onResetDates,
    goToPreviousMonths,
    goToNextMonths,
    numberOfMonths,
    onDayHover,
  } = useDatepicker({
    startDate,
    endDate,
    focusedInput,
    onDateChange,
    minBookingDate,
    maxBookingDate,
    minBookingDays,
    isDayBlocked,
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp,
  })
  const theme: DatepickerTheme = useThemeProps({
    datepickerBackground: '#ffffff',
    datepickerPadding: '32px',
    datepickerBorderRadius: '2px',
    datepickerPosition: 'relative',
    datepickerCloseWrapperPosition: 'absolute',
    datepickerCloseWrapperRight: '32px',
    datepickerCloseWrapperTop: 'unset',
    datepickerCloseWrapperLeft: 'unset',
    datepickerCloseWrapperBottom: 'unset',
    datepickerCloseWrapperZIndex: 1,
    datepickerSelectDateGridTemplateColumns: '126px 75px 126px',
    datepickerSelectDateArrowIconWidth: '15px',
    datepickerSelectDateArrowIconHeight: '12px',
    datepickerSelectDateArrowIconColor: globalStyles.colors.silverCloud,
    datepickerMonthsWrapperMargin: '28px 0 0',
    datepickerPreviousMonthButtonPosition: 'absolute',
    datepickerPreviousMonthButtonTop: '-5px',
    datepickerPreviousMonthButtonLeft: '0',
    datepickerPreviousMonthButtonRight: 'unset',
    datepickerPreviousMonthButtonBottom: 'unset',
    datepickerNextMonthButtonPosition: 'absolute',
    datepickerNextMonthButtonTop: '-5px',
    datepickerNextMonthButtonLeft: 'unset',
    datepickerNextMonthButtonRight: '0',
    datepickerNextMonthButtonBottom: 'unset',
    datepickerMonthsGridGap: '0 32px',
    datepickerResetDatesWrapperMargin: '32px 0 0',
    datepickerBoxShadow: 'none',
  })

  return (
    <StyledDatepicker
      background={theme.datepickerBackground}
      p={theme.datepickerPadding}
      borderRadius={theme.datepickerBorderRadius}
      position={theme.datepickerPosition}
      boxShadow={theme.datepickerBoxShadow}
    >
      <Box
        position={theme.datepickerCloseWrapperPosition}
        right={theme.datepickerCloseWrapperRight}
        top={theme.datepickerCloseWrapperTop}
        left={theme.datepickerCloseWrapperLeft}
        bottom={theme.datepickerCloseWrapperBottom}
        zIndex={theme.datepickerCloseWrapperZIndex}
      >
        <Close onClick={onClose} />
      </Box>
      <DateWrapper>
        <Grid gridTemplateColumns={theme.datepickerSelectDateGridTemplateColumns}>
          <SelectedDate
            title={phrases.datepickerStartDateLabel}
            date={getInputValue(startDate, displayFormat, phrases.datepickerStartDatePlaceholder)}
            isActive={focusedInput === START_DATE}
          />
          <Flex justifyContent="center" alignItems="center">
            <ArrowIcon
              // @ts-ignore
              height={theme.datepickerSelectDateArrowIconHeight}
              // @ts-ignore
              width={theme.datepickerSelectDateArrowIconWidth}
              // @ts-ignore
              iconColor={theme.datepickerSelectDateArrowIconColor}
            />
          </Flex>
          <SelectedDate
            title={phrases.datepickerEndDateLabel}
            date={getInputValue(endDate, displayFormat, phrases.datepickerEndDatePlaceholder)}
            isActive={focusedInput === END_DATE}
          />
        </Grid>
      </DateWrapper>
      <Box m={theme.datepickerMonthsWrapperMargin} position="relative">
        <Box
          position={theme.datepickerPreviousMonthButtonPosition}
          top={theme.datepickerPreviousMonthButtonTop}
          left={theme.datepickerPreviousMonthButtonLeft}
          right={theme.datepickerPreviousMonthButtonRight}
          bottom={theme.datepickerPreviousMonthButtonBottom}
        >
          <NavButton type="prev" onClick={goToPreviousMonths} />
        </Box>
        <Box
          position={theme.datepickerNextMonthButtonPosition}
          top={theme.datepickerNextMonthButtonTop}
          left={theme.datepickerNextMonthButtonLeft}
          right={theme.datepickerNextMonthButtonRight}
          bottom={theme.datepickerNextMonthButtonBottom}
        >
          <NavButton type="next" onClick={goToNextMonths} />
        </Box>
        <Grid
          numberOfMonthsGridTemplateColumns={numberOfMonths}
          gridGap={theme.datepickerMonthsGridGap}
        >
          {activeMonths.map((month: MonthType) => (
            <Month
              key={`${month.year}-${month.month}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={firstDayOfWeek}
              isDateBlocked={isDateBlocked}
              isDateSelected={isDateSelected}
              isStartOrEndDate={isFirstOrLastSelectedDate}
              onDaySelect={onDaySelect}
              onDayHover={onDayHover}
              isDateHovered={isDateHovered}
            />
          ))}
        </Grid>
      </Box>
      <Box m={theme.datepickerResetDatesWrapperMargin}>
        <ResetDates onResetDates={onResetDates} text={phrases.resetDates} />
      </Box>
    </StyledDatepicker>
  )
}

export default Datepicker
