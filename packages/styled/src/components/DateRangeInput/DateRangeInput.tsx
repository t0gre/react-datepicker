import React, {useRef, useEffect} from 'react'
import {
  GridTemplateColumnsProperty,
  BackgroundProperty,
  BorderProperty,
  BorderRadiusProperty,
  MinHeightProperty,
  TopProperty,
  PaddingProperty,
  ColorProperty,
  GlobalsNumber,
  HeightProperty,
  BottomProperty,
  LeftProperty,
} from 'csstype'
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system'
import styled from 'styled-components'
import {
  opacity,
  OpacityProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
} from 'styled-system'
import {
  UseDatepickerProps,
  START_DATE,
  FormatFunction,
  getInputValue,
  END_DATE,
  FocusedInput,
} from '@datepicker-react/hooks'
import {dateRangeInputPhrases, DateRangeInputPhrases} from '../../phrases'
import Grid from '../Grid'
import Flex from '../Flex'
import Box from '../Box'
import Input from '../Input'
import ArrowIcon from '../../icons/ArrowIcon'
import Datepicker from '../Datepicker'

interface InputArrowIconProps extends OpacityProps, ColorProps {}
const InputArrowIcon = styled(ArrowIcon)<InputArrowIconProps>`
  ${opacity}
  ${color}
`

interface StyledGridProps extends BackgroundProps, BorderProps, BorderRadiusProps {}
const InputGrid = styled(Grid)<StyledGridProps>`
  ${background}
  ${border}
  ${borderRadius}
`

export interface DateRangeInputStyles {
  datepickerLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  datepickerBottom?: ResponsiveValue<BottomProperty<TLengthStyledSystem>>

  inputGridTemplateColumns?: ResponsiveValue<GridTemplateColumnsProperty<TLengthStyledSystem>>
  inputGridBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  inputGridBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputGridBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>

  inputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  inputStartDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  inputEndDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  inputBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputMinHeight?: ResponsiveValue<MinHeightProperty<TLengthStyledSystem>>
  inputCalendarWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  inputArrowIconColor?: ResponsiveValue<ColorProperty>
  inputArrowIconOpacity?: ResponsiveValue<GlobalsNumber>
  daySize?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
  selectDateGridTemplateColumns?: ResponsiveValue<GridTemplateColumnsProperty<TLengthStyledSystem>>
}

export interface DateRangeInputProps extends UseDatepickerProps {
  displayFormat?: string | FormatFunction
  phrases?: DateRangeInputPhrases
  onFocusChange(focusInput: FocusedInput): void
  styles?: DateRangeInputStyles
  showStartDateCalendarIcon?: boolean
  showEndDateCalendarIcon?: boolean
  onClose?(): void
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
  onClose = () => {},
  showStartDateCalendarIcon = true,
  showEndDateCalendarIcon = true,
  styles = {},
  displayFormat = 'MM/DD/YYYY',
  phrases = dateRangeInputPhrases,
}: DateRangeInputProps) {
  const datepickerWrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', onClickOutsideHandler)
    }

    return () => {
      window.removeEventListener('click', onClickOutsideHandler)
    }
  })

  function onClickOutsideHandler(event: Event) {
    if (
      focusedInput !== null &&
      datepickerWrapperRef &&
      datepickerWrapperRef.current &&
      // @ts-ignore
      !datepickerWrapperRef.current.contains(event.target)
    ) {
      onFocusChange(null)
    }
  }

  function handleDatepickerClose() {
    onClose()
    onFocusChange(null)
  }

  return (
    <Box position="relative" ref={datepickerWrapperRef}>
      <InputGrid
        background={styles.inputGridBackground || 'transparent'}
        gridTemplateColumns={styles.inputGridTemplateColumns || '194px 39px 194px'}
        border={styles.inputGridBorder || '0'}
        borderRadius={styles.inputGridBorderRadius || '0'}
      >
        <Input
          id="startDate"
          ariaLabel={phrases.startDateAriaLabel}
          placeholder={phrases.startDatePlaceholder}
          value={getInputValue(startDate, displayFormat, '')}
          onClick={() => onFocusChange(START_DATE)}
          showCalendarIcon={showStartDateCalendarIcon}
          inputBorder={styles.inputBorder}
          inputMinHeight={styles.inputMinHeight}
          inputPadding={styles.inputStartDatePadding || styles.inputPadding}
          calendarWrapperTop={styles.inputCalendarWrapperTop}
        />
        <Flex alignItems="center" justifyContent="center">
          <InputArrowIcon
            width="15px"
            height="12px"
            color={styles.inputArrowIconColor || '#ffffff'}
            opacity={styles.inputArrowIconOpacity || 0.4}
          />
        </Flex>
        <Input
          id="startDate"
          ariaLabel={phrases.endDateAriaLabel}
          placeholder={phrases.endDatePlaceholder}
          value={getInputValue(endDate, displayFormat, '')}
          onClick={() => onFocusChange(!startDate ? START_DATE : END_DATE)}
          showCalendarIcon={showEndDateCalendarIcon}
          inputBorder={styles.inputBorder}
          inputMinHeight={styles.inputMinHeight}
          calendarWrapperTop={styles.inputCalendarWrapperTop}
          inputPadding={styles.inputEndDatePadding || styles.inputPadding}
        />
      </InputGrid>
      <Box
        position="absolute"
        bottom={styles.datepickerBottom || '65px'}
        left={styles.datepickerLeft || '0'}
      >
        {focusedInput !== null && (
          <Datepicker
            onClose={handleDatepickerClose}
            startDate={startDate}
            endDate={endDate}
            minBookingDate={minBookingDate}
            maxBookingDate={maxBookingDate}
            firstDayOfWeek={firstDayOfWeek}
            numberOfMonths={numberOfMonths}
            focusedInput={focusedInput}
            displayFormat={displayFormat}
            onDateChange={onDateChange}
            styles={{
              daySize: styles.daySize,
              selectDateGridTemplateColumns: styles.selectDateGridTemplateColumns,
            }}
          />
        )}
      </Box>
    </Box>
  )
}

export default DateRangeInput
