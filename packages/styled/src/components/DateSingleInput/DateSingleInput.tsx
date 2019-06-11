import React, {useRef, useEffect} from 'react'
import styled, {css} from 'styled-components'
import {
  START_DATE,
  FormatFunction,
  getInputValue,
  OnDatesChangeProps,
} from '@datepicker-react/hooks'
import {dateSingleInputPhrases, DateSingleInputPhrases} from '../../phrases'
import Box from '../Box'
import Input from '../Input'
import Datepicker from '../Datepicker'
// eslint-disable-next-line import/no-unresolved
import {DateSingleInputTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import {FirstDayOfWeek, MonthType} from '@datepicker-react/hooks/src'

interface RtlProps {
  rtl: boolean
}
const Wrapper = styled(Box)<RtlProps>`
  ${({rtl}) =>
    rtl &&
    css`
      direction: rtl;
    `}
`

function getPlacement(placement: 'bottom' | 'top') {
  if (placement === 'top') {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: 'unset',
      dateSingleDatepickerWrapperBottom: '65px',
      dateSingleDatepickerWrapperLeft: '0',
    }
  }

  return {
    dateSingleDatepickerWrapperTop: 'unset',
    dateSingleDatepickerWrapperRight: '65px',
    dateSingleDatepickerWrapperBottom: 'unset',
    dateSingleDatepickerWrapperLeft: '0',
  }
}

export interface OnDateChangeProps {
  date: Date | null
  showDatepicker: boolean
}

export interface DateRangeInputProps {
  date: Date | null
  minBookingDate?: Date
  maxBookingDate?: Date
  showDatepicker: boolean
  numberOfMonths?: number
  firstDayOfWeek?: FirstDayOfWeek
  displayFormat?: string | FormatFunction
  phrases?: DateSingleInputPhrases
  showCalendarIcon?: boolean
  vertical?: boolean
  showResetDate?: boolean
  showClose?: boolean
  rtl?: boolean
  placement?: 'top' | 'bottom'
  onDateChange(data: OnDateChangeProps): void
  onFocusChange(focusInput: boolean): void
  initialVisibleMonth?(numberOfMonths: number): MonthType[]
  isDateBlocked?(date: Date): boolean
  onClose?(): void
  dayLabelFormat?(date: Date): string
  weekdayLabelFormat?(date: Date): string
  monthLabelFormat?(date: Date): string
  onDayRender?(date: Date): React.ReactNode
}

function DateSingleInput({
  date,
  minBookingDate,
  maxBookingDate,
  firstDayOfWeek,
  onFocusChange,
  showDatepicker,
  onDateChange,
  dayLabelFormat,
  weekdayLabelFormat,
  monthLabelFormat,
  onDayRender,
  numberOfMonths = 1,
  showClose = true,
  showResetDate = true,
  vertical = false,
  rtl = false,
  isDateBlocked = () => false,
  onClose = () => {},
  showCalendarIcon = true,
  displayFormat = 'MM/DD/YYYY',
  phrases = dateSingleInputPhrases,
  placement = 'bottom',
}: DateRangeInputProps) {
  const datepickerWrapperRef = useRef<HTMLDivElement>(null)
  const theme: DateSingleInputTheme = useThemeProps({
    dateSingleInputPadding: vertical ? (rtl ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
    dateSingleDatepickerWrapperPosition: 'absolute',
    ...getPlacement(placement),
  })

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
      showDatepicker &&
      datepickerWrapperRef &&
      datepickerWrapperRef.current &&
      // @ts-ignore
      !datepickerWrapperRef.current.contains(event.target)
    ) {
      onFocusChange(false)
    }
  }

  function handleDatepickerClose() {
    onClose()
    onFocusChange(false)
  }

  function onDatesChange({focusedInput, startDate}: OnDatesChangeProps) {
    onDateChange({
      showDatepicker: focusedInput !== null,
      date: startDate,
    })
  }

  return (
    <Wrapper rtl={rtl} position="relative" ref={datepickerWrapperRef}>
      <Input
        id="startDate"
        ariaLabel={phrases.dateAriaLabel}
        placeholder={phrases.datePlaceholder}
        value={getInputValue(date, displayFormat, '')}
        onClick={() => onFocusChange(true)}
        showCalendarIcon={showCalendarIcon}
        vertical={vertical}
        isActive={false}
        padding={theme.dateSingleInputPadding}
        rtl={rtl}
      />
      <Box
        position={theme.dateSingleDatepickerWrapperPosition}
        bottom={theme.dateSingleDatepickerWrapperBottom}
        left={theme.dateSingleDatepickerWrapperLeft}
        top={theme.dateSingleDatepickerWrapperTop}
        right={theme.dateSingleDatepickerWrapperRight}
      >
        {showDatepicker && (
          <Datepicker
            exactMinBookingDays
            minBookingDays={1}
            onClose={handleDatepickerClose}
            startDate={date}
            endDate={date}
            minBookingDate={minBookingDate}
            maxBookingDate={maxBookingDate}
            firstDayOfWeek={firstDayOfWeek}
            numberOfMonths={numberOfMonths}
            focusedInput={showDatepicker ? START_DATE : null}
            displayFormat={displayFormat}
            onDatesChange={onDatesChange}
            isDateBlocked={isDateBlocked}
            showResetDates={showResetDate}
            vertical={vertical}
            showSelectedDates={false}
            showClose={showClose}
            rtl={rtl}
            dayLabelFormat={dayLabelFormat}
            weekdayLabelFormat={weekdayLabelFormat}
            monthLabelFormat={monthLabelFormat}
            onDayRender={onDayRender}
            phrases={phrases}
          />
        )}
      </Box>
    </Wrapper>
  )
}

export default DateSingleInput
