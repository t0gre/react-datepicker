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
  display,
  DisplayProps,
  justifyContent,
  JustifyContentProps,
  OverflowProps,
  overflow,
  height,
  HeightProps,
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

interface CloseWrapperProps extends JustifyContentProps, DisplayProps {}
const CloseWrapper = styled(Box)<CloseWrapperProps>`
  ${display}
  ${justifyContent}
`

interface MonthGridProps extends HeightProps, OverflowProps {}
const MonthGrid = styled(Grid)<MonthGridProps>`
  ${overflow}
  ${height}
`

export interface DatepickerProps extends UseDatepickerProps {
  phrases?: DatepickerPhrases
  displayFormat?: string | FormatFunction
  onClose?(): void
  showResetDates?: boolean
  showSelectedDates?: boolean
  showClose?: boolean
  vertical?: boolean
}

function Datepicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  focusedInput,
  onDateChange,
  vertical = false,
  showResetDates = true,
  showClose = true,
  showSelectedDates = true,
  exactMinBookingDays = false,
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
    exactMinBookingDays,
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp,
  })
  const theme: DatepickerTheme = useThemeProps({
    datepickerBackground: '#ffffff',
    datepickerPadding: vertical ? '16px' : '32px',
    datepickerBorderRadius: '2px',
    datepickerPosition: 'relative',
    datepickerCloseWrapperPosition: vertical ? 'relative' : 'absolute',
    datepickerCloseWrapperDisplay: vertical ? 'flex' : 'block',
    datepickerCloseWrapperJustifyContent: vertical ? 'flex-end' : 'initial',
    datepickerCloseWrapperMargin: vertical ? '0 0 16px' : '0',
    datepickerCloseWrapperRight: vertical ? '0' : '32px',
    datepickerCloseWrapperTop: 'unset',
    datepickerCloseWrapperLeft: 'unset',
    datepickerCloseWrapperBottom: 'unset',
    datepickerCloseWrapperZIndex: 1,
    datepickerSelectDateGridTemplateColumns: vertical ? '87px 50px 87px' : '126px 75px 126px',
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
    datepickerMonthsGridGap: vertical ? '32px' : '0 32px',
    datepickerMonthsGridOverflow: 'auto',
    datepickerMonthsGridHeight: vertical ? '50vh' : '100%',
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
      {showClose && (
        <CloseWrapper
          m={theme.datepickerCloseWrapperMargin}
          display={theme.datepickerCloseWrapperDisplay}
          justifyContent={theme.datepickerCloseWrapperJustifyContent}
          position={theme.datepickerCloseWrapperPosition}
          right={theme.datepickerCloseWrapperRight}
          top={theme.datepickerCloseWrapperTop}
          left={theme.datepickerCloseWrapperLeft}
          bottom={theme.datepickerCloseWrapperBottom}
          zIndex={theme.datepickerCloseWrapperZIndex}
        >
          <Close onClick={onClose} />
        </CloseWrapper>
      )}

      {showSelectedDates && (
        <DateWrapper>
          <Grid gridTemplateColumns={theme.datepickerSelectDateGridTemplateColumns}>
            <SelectedDate
              title={phrases.datepickerStartDateLabel}
              date={getInputValue(startDate, displayFormat, phrases.datepickerStartDatePlaceholder)}
              isActive={focusedInput === START_DATE}
              vertical={vertical}
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
              vertical={vertical}
            />
          </Grid>
        </DateWrapper>
      )}
      <Box m={theme.datepickerMonthsWrapperMargin} position="relative">
        <Box
          position={theme.datepickerPreviousMonthButtonPosition}
          top={theme.datepickerPreviousMonthButtonTop}
          left={theme.datepickerPreviousMonthButtonLeft}
          right={theme.datepickerPreviousMonthButtonRight}
          bottom={theme.datepickerPreviousMonthButtonBottom}
        >
          <NavButton type="prev" onClick={goToPreviousMonths} vertical={vertical} />
        </Box>
        <Box
          position={theme.datepickerNextMonthButtonPosition}
          top={theme.datepickerNextMonthButtonTop}
          left={theme.datepickerNextMonthButtonLeft}
          right={theme.datepickerNextMonthButtonRight}
          bottom={theme.datepickerNextMonthButtonBottom}
        >
          <NavButton type="next" onClick={goToNextMonths} vertical={vertical} />
        </Box>
        <MonthGrid
          overflow={theme.datepickerMonthsGridOverflow}
          height={theme.datepickerMonthsGridHeight}
          gridTemplateColumns={vertical ? '1fr' : `repeat(${numberOfMonths}, 1fr)`}
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
        </MonthGrid>
      </Box>
      {showResetDates && (
        <Box m={theme.datepickerResetDatesWrapperMargin}>
          <ResetDates onResetDates={onResetDates} text={phrases.resetDates} />
        </Box>
      )}
    </StyledDatepicker>
  )
}

export default Datepicker
