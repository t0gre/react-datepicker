import React, {useRef, useContext, useImperativeHandle} from 'react'
import styled, {css, keyframes, ThemeContext, ThemeProvider} from 'styled-components'
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
  zIndex,
  ZIndexProps,
  compose,
} from 'styled-system'
import {
  useDatepicker,
  MonthType,
  UseDatepickerProps,
  getInputValue,
  START_DATE,
  END_DATE,
  FormatFunction,
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
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
import getThemeProp from '../../utils/getThemeProp'

const opacity0To100 = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

interface StyledDatepicker
  extends BackgroundProps,
    SpaceProps,
    BorderRadiusProps,
    PositionProps,
    WidthProps,
    ZIndexProps,
    BoxShadowProps {
  rtl: boolean
}
const composeStyledDatepickerStyles = compose(
  background,
  space,
  borderRadius,
  position,
  boxShadow,
  width,
  zIndex,
)

const StyledDatepicker = styled('div')<StyledDatepicker>`
  ${composeStyledDatepickerStyles}
  ${({rtl}) =>
    rtl &&
    css`
      direction: rtl;
    `}
  
  animation-name: ${opacity0To100};
  animation-duration: 0.15s;
  animation-timing-function: ease-in;
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
const composeCloseWrapperStyles = compose(display, justifyContent)

const CloseWrapper = styled(Box)<CloseWrapperProps>`
  ${composeCloseWrapperStyles}
`

interface MonthGridProps extends HeightProps, OverflowProps {}
const composeMonthGridStyles = compose(overflow, height)

const MonthGrid = styled(Grid)<MonthGridProps>`
  ${composeMonthGridStyles}
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
  dayLabelFormat?(date: Date): string
  weekdayLabelFormat?(date: Date): string
  monthLabelFormat?(date: Date): string
  onDayRender?(date: Date): React.ReactNode
  unavailableDates?: Date[]
}

function Datepicker(
  {
    startDate,
    endDate,
    minBookingDate,
    maxBookingDate,
    focusedInput,
    onDatesChange,
    dayLabelFormat,
    weekdayLabelFormat,
    monthLabelFormat,
    onDayRender,
    vertical = false,
    rtl = false,
    showResetDates = true,
    showClose = true,
    showSelectedDates = true,
    exactMinBookingDays = false,
    isDateBlocked = () => false,
    minBookingDays = 1,
    onClose = () => {},
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp,
    displayFormat = 'MM/dd/yyyy',
    phrases = datepickerPhrases,
    unavailableDates = [],
  }: DatepickerProps,
  ref?: React.Ref<unknown>,
) {
  const {
    activeMonths,
    isDateSelected,
    isFirstOrLastSelectedDate,
    isDateHovered,
    firstDayOfWeek,
    onDateSelect,
    onResetDates,
    goToPreviousMonths,
    goToNextMonths,
    numberOfMonths,
    hoveredDate,
    onDateHover,
    isDateFocused,
    focusedDate,
    onDateFocus,
    isDateBlocked: isDateBlockedFn,
  } = useDatepicker({
    startDate,
    endDate,
    focusedInput,
    onDatesChange,
    minBookingDate,
    maxBookingDate,
    minBookingDays,
    isDateBlocked,
    exactMinBookingDays,
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp,
  })
  useImperativeHandle(ref, () => ({
    onDateSelect: (date: Date) => {
      onDateSelect(date)
    },
  }))
  const monthGridRef = useRef<HTMLDivElement>(null)
  const themeContext = useContext(ThemeContext)
  const theme: DatepickerTheme = useThemeProps({
    datepickerZIndex: null,
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
    datepickerSelectDateGridTemplateRows: 'unset',
    datepickerSelectDateArrowIconWidth: '15px',
    datepickerSelectDateArrowIconHeight: '12px',
    datepickerSelectDateArrowIconColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext,
    ),
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
    <ThemeProvider theme={(theme: Record<string, unknown>) => theme || {}}>
      <DatepickerContext.Provider
        value={{
          rtl,
          isDateFocused,
          isDateSelected,
          isDateHovered,
          isFirstOrLastSelectedDate,
          onDateFocus,
          focusedDate,
          onDateSelect,
          onDateHover,
          onDayRender,
          isDateBlocked: isDateBlockedFn,
          unavailableDates,
        }}
      >
        <StyledDatepicker
          background={theme.datepickerBackground}
          p={theme.datepickerPadding}
          borderRadius={theme.datepickerBorderRadius}
          position={theme.datepickerPosition}
          boxShadow={theme.datepickerBoxShadow}
          width={theme.datepickerWidth}
          zIndex={theme.datepickerZIndex}
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
              <Close onClick={onClose} rtl={rtl} closeText={phrases.close} />
            </CloseWrapper>
          )}

          {showSelectedDates && (
            <DateWrapper>
              <Grid
                data-testid="SelectedDatesGrid"
                gridTemplateColumns={theme.datepickerSelectDateGridTemplateColumns}
                gridTemplateRows={theme.datepickerSelectDateGridTemplateRows}
              >
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
                data-testid="MonthGrid"
                overflow={theme.datepickerMonthsGridOverflow}
                height={theme.datepickerMonthsGridHeight}
                gridTemplateColumns={vertical ? '1fr' : `repeat(${numberOfMonths}, 1fr)`}
                gridGap={theme.datepickerMonthsGridGap}
                pr={rtl ? '1px' : '0'}
                ref={monthGridRef}
                onMouseLeave={() => {
                  if (hoveredDate) {
                    onDateHover(null)
                  }
                }}
              >
                {activeMonths.map((month: MonthType) => (
                  <Month
                    key={`month-${month.year}-${month.month}`}
                    year={month.year}
                    month={month.month}
                    firstDayOfWeek={firstDayOfWeek}
                    dayLabelFormat={dayLabelFormat || dayLabelFormatFn}
                    weekdayLabelFormat={weekdayLabelFormat || weekdayLabelFormatFn}
                    monthLabelFormat={monthLabelFormat || monthLabelFormatFn}
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
    </ThemeProvider>
  )
}

export default React.forwardRef(Datepicker)
