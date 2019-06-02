import React, {useRef} from 'react'
import styled, {css} from 'styled-components'
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
  WidthProps,
  width,
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
import DatepickerContext from '../../context/datepickerContext'
// eslint-disable-next-line import/no-unresolved
import {DatepickerTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'

interface StyledDatepicker
  extends BackgroundProps,
    SpaceProps,
    BorderRadiusProps,
    PositionProps,
    WidthProps,
    BoxShadowProps {
  rtl: boolean
}
const StyledDatepicker = styled('div')<StyledDatepicker>`
  ${background}
  ${space}
  ${borderRadius}
  ${position}
  ${boxShadow}
  ${width}
  ${({rtl}) =>
    rtl &&
    css`
      direction: rtl;
    `}
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
  rtl?: boolean
}

function Datepicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  focusedInput,
  onDateChange,
  vertical = false,
  rtl = false,
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
    isDateFocused,
    focusedDate,
    onDayFocus,
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
  const monthGridRef = useRef<HTMLDivElement>(null)
  const theme: DatepickerTheme = useThemeProps({
    datepickerBackground: '#ffffff',
    datepickerPadding: vertical ? '16px 16px 0' : '32px',
    datepickerBorderRadius: '2px',
    datepickerPosition: 'relative',
    datepickerWidth: 'fit-content',
    datepickerCloseWrapperPosition: vertical ? 'relative' : 'absolute',
    datepickerCloseWrapperDisplay: vertical ? 'flex' : 'block',
    datepickerCloseWrapperJustifyContent: vertical ? 'flex-end' : 'initial',
    datepickerCloseWrapperMargin: vertical ? '0 0 16px' : '0',
    datepickerCloseWrapperRight: rtl ? 'unset' : vertical ? '0' : '32px',
    datepickerCloseWrapperTop: 'unset',
    datepickerCloseWrapperLeft: rtl ? '32px' : 'unset',
    datepickerCloseWrapperBottom: 'unset',
    datepickerCloseWrapperZIndex: 1,
    datepickerSelectDateGridTemplateColumns: vertical ? '87px 50px 87px' : '126px 75px 126px',
    datepickerSelectDateArrowIconWidth: '15px',
    datepickerSelectDateArrowIconHeight: '12px',
    datepickerSelectDateArrowIconColor: globalStyles.colors.silverCloud,
    datepickerMonthsWrapperMargin:
      !showClose && !showSelectedDates ? 'unset' : !showSelectedDates ? '48px 0 0' : '28px 0 0',
    datepickerPreviousMonthButtonPosition: vertical ? 'relative' : 'absolute',
    datepickerPreviousMonthButtonTop: vertical ? 'unset' : '-5px',
    datepickerPreviousMonthButtonLeft: vertical ? 'unset' : '0',
    datepickerPreviousMonthButtonRight: 'unset',
    datepickerPreviousMonthButtonBottom: 'unset',
    datepickerNextMonthButtonPosition: vertical ? 'relative' : 'absolute',
    datepickerNextMonthButtonTop: vertical ? 'unset' : '-5px',
    datepickerNextMonthButtonLeft: 'unset',
    datepickerNextMonthButtonRight: vertical ? 'unset' : '0',
    datepickerNextMonthButtonBottom: 'unset',
    datepickerMonthsGridGap: vertical ? '32px' : '0 32px',
    datepickerMonthsGridOverflow: 'auto',
    datepickerMonthsGridHeight: vertical ? '50vh' : '100%',
    datepickerResetDatesWrapperMargin: vertical ? 'unset' : '32px 0 0',
    datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
  })

  function scrollTopToMonthGrid() {
    if (monthGridRef && monthGridRef.current && vertical) {
      monthGridRef.current.scrollTop = 0
    }
  }

  function handleGoToNextMonth() {
    goToNextMonths()
    scrollTopToMonthGrid()
  }

  function handleGoToPreviousMonth() {
    goToPreviousMonths()
    scrollTopToMonthGrid()
  }

  return (
    <DatepickerContext.Provider
      value={{
        rtl,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDayFocus,
        focusedDate,
        onDaySelect,
        onDayHover,
      }}
    >
      <StyledDatepicker
        background={theme.datepickerBackground}
        p={theme.datepickerPadding}
        borderRadius={theme.datepickerBorderRadius}
        position={theme.datepickerPosition}
        boxShadow={theme.datepickerBoxShadow}
        width={theme.datepickerWidth}
        rtl={rtl}
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
            <Close onClick={onClose} rtl={rtl} />
          </CloseWrapper>
        )}

        {showSelectedDates && (
          <DateWrapper>
            <Grid gridTemplateColumns={theme.datepickerSelectDateGridTemplateColumns}>
              <SelectedDate
                title={phrases.datepickerStartDateLabel}
                date={getInputValue(
                  startDate,
                  displayFormat,
                  phrases.datepickerStartDatePlaceholder,
                )}
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
        <Box position="relative">
          <Box m={theme.datepickerMonthsWrapperMargin}>
            <MonthGrid
              overflow={theme.datepickerMonthsGridOverflow}
              height={theme.datepickerMonthsGridHeight}
              gridTemplateColumns={vertical ? '1fr' : `repeat(${numberOfMonths}, 1fr)`}
              gridGap={theme.datepickerMonthsGridGap}
              pr={rtl ? '1px' : '0'}
              ref={monthGridRef}
            >
              {activeMonths.map((month: MonthType) => (
                <Month
                  key={`${month.year}-${month.month}`}
                  year={month.year}
                  month={month.month}
                  firstDayOfWeek={firstDayOfWeek}
                />
              ))}
            </MonthGrid>
          </Box>
          <Flex alignItems="center">
            <>
              {showResetDates && (
                <Flex flex="1" m={theme.datepickerResetDatesWrapperMargin}>
                  <ResetDates rtl={rtl} onResetDates={onResetDates} text={phrases.resetDates} />
                </Flex>
              )}
              <Box
                position={theme.datepickerPreviousMonthButtonPosition}
                top={theme.datepickerPreviousMonthButtonTop}
                left={theme.datepickerPreviousMonthButtonLeft}
                right={theme.datepickerPreviousMonthButtonRight}
                bottom={theme.datepickerPreviousMonthButtonBottom}
              >
                <NavButton
                  type="prev"
                  onClick={rtl && !vertical ? handleGoToNextMonth : handleGoToPreviousMonth}
                  vertical={vertical}
                  rtl={rtl}
                  ariaLabel="Previous month"
                />
              </Box>
              <Box
                position={theme.datepickerNextMonthButtonPosition}
                top={theme.datepickerNextMonthButtonTop}
                left={theme.datepickerNextMonthButtonLeft}
                right={theme.datepickerNextMonthButtonRight}
                bottom={theme.datepickerNextMonthButtonBottom}
              >
                <NavButton
                  type="next"
                  onClick={rtl && !vertical ? handleGoToPreviousMonth : handleGoToNextMonth}
                  vertical={vertical}
                  rtl={rtl}
                  ariaLabel="Next month"
                />
              </Box>
            </>
          </Flex>
        </Box>
      </StyledDatepicker>
    </DatepickerContext.Provider>
  )
}

export default Datepicker
