import React, {useRef, useEffect} from 'react'
import {zIndex, ZIndexProps} from 'styled-system'
import styled, {css, ThemeProvider} from 'styled-components'
import {
  START_DATE,
  FormatFunction,
  getInputValue,
  OnDatesChangeProps,
  FirstDayOfWeek,
} from '@datepicker-react/hooks'
import {dateSingleInputPhrases, DateSingleInputPhrases} from '../../phrases'
import Box from '../Box'
import Input from '../Input'
import Datepicker from '../Datepicker'
// eslint-disable-next-line import/no-unresolved
import {DateSingleInputTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'

interface RtlProps {
  rtl: boolean
}
interface WrapperProps extends RtlProps, ZIndexProps {}
const Wrapper = styled(Box)<WrapperProps>`
  ${zIndex}
  ${({rtl}) =>
    rtl &&
    css`
      direction: rtl;
    `}
`

function getPlacement(placement: 'bottom' | 'top', rtl: boolean) {
  if (placement === 'top' && !rtl) {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: 'unset',
      dateSingleDatepickerWrapperBottom: '65px',
      dateSingleDatepickerWrapperLeft: '0',
    }
  } else if (placement === 'top' && rtl) {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: '0',
      dateSingleDatepickerWrapperBottom: '65px',
      dateSingleDatepickerWrapperLeft: 'unset',
    }
  } else if (placement === 'bottom' && rtl) {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: '0',
      dateSingleDatepickerWrapperBottom: 'unset',
      dateSingleDatepickerWrapperLeft: 'unset',
    }
  }

  return {
    dateSingleDatepickerWrapperTop: 'unset',
    dateSingleDatepickerWrapperRight: 'unset',
    dateSingleDatepickerWrapperBottom: 'unset',
    dateSingleDatepickerWrapperLeft: '0',
  }
}

export interface OnDateChangeProps {
  date: Date | null
  showDatepicker: boolean
}

export interface DateSingleInputProps {
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
  initialVisibleMonth?: Date
  onDateChange(data: OnDateChangeProps): void
  onFocusChange(focusInput: boolean): void
  isDateBlocked?(date: Date): boolean
  onClose?(): void
  dayLabelFormat?(date: Date): string
  weekdayLabelFormat?(date: Date): string
  monthLabelFormat?(date: Date): string
  onDayRender?(date: Date): React.ReactNode
  inputId?: string
  unavailableDates?: Date[]
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
  initialVisibleMonth,
  numberOfMonths = 1,
  showClose = true,
  showResetDate = true,
  vertical = false,
  rtl = false,
  isDateBlocked = () => false,
  onClose = () => {},
  showCalendarIcon = true,
  displayFormat = 'MM/dd/yyyy',
  phrases = dateSingleInputPhrases,
  placement = 'bottom',
  inputId = 'startDate',
  unavailableDates = [],
}: DateSingleInputProps) {
  const ref = useRef(null)
  const datepickerWrapperRef = useRef<HTMLDivElement>(null)
  const theme: DateSingleInputTheme = useThemeProps({
    dateSingleZIndex: null,
    dateSingleInputPadding: vertical ? (rtl ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
    dateSingleDatepickerWrapperPosition: 'absolute',
    ...getPlacement(placement, rtl),
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

  function handleInputChange(date: Date) {
    // @ts-ignore
    if (ref && ref.current && ref.current.onDateSelect) {
      // @ts-ignore
      ref.current.onDateSelect(date)
    }
  }

  return (
    <ThemeProvider theme={(theme: Record<string, unknown>) => theme || {}}>
      <Wrapper
        zIndex={theme.dateSingleZIndex}
        rtl={rtl}
        position="relative"
        ref={datepickerWrapperRef}
      >
        <Input
          id={inputId}
          ariaLabel={phrases.dateAriaLabel}
          placeholder={phrases.datePlaceholder}
          value={getInputValue(date, displayFormat, '')}
          onClick={() => onFocusChange(true)}
          showCalendarIcon={showCalendarIcon}
          vertical={vertical}
          isActive={false}
          padding={theme.dateSingleInputPadding}
          rtl={rtl}
          onChange={handleInputChange}
          // @ts-ignore
          dateFormat={displayFormat}
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
              ref={ref}
              unavailableDates={unavailableDates}
              initialVisibleMonth={initialVisibleMonth}
            />
          )}
        </Box>
      </Wrapper>
    </ThemeProvider>
  )
}

export default DateSingleInput
