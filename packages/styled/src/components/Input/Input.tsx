import React from 'react'
import styled from 'styled-components'
import {BorderProperty, MinHeightProperty, TopProperty, PaddingProperty} from 'csstype'
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  space,
  SpaceProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  color,
  ColorProps,
  fontWeight,
  FontWeightProps,
  position,
  PositionProps,
  top,
  TopProps,
  left,
  LeftProps,
  width,
  WidthProps,
  height,
  HeightProps,
  display,
  DisplayProps,
  minHeight,
  MinHeightProps,
} from 'styled-system'
import CalendarIcon from '../../icons/CalendarIcon'

interface InputLabelProps
  extends PositionProps,
    BorderProps,
    BackgroundProps,
    DisplayProps,
    SpaceProps,
    BorderRadiusProps {}
const InputLabel = styled('label')<InputLabelProps>`
  ${position}
  ${border}
  ${background}
  ${display}
  ${borderRadius}
  ${space}
`

interface CalendarWrapperProps
  extends PositionProps,
    LeftProps,
    TopProps,
    HeightProps,
    WidthProps {}
const CalendarWrapper = styled('div')<CalendarWrapperProps>`
  ${position}
  ${left}
  ${top}
  ${height}
  ${width}
  cursor: pointer;
  
  svg {
    display: block;
  }
`

interface StyledInputProps
  extends BackgroundProps,
    SpaceProps,
    FontFamilyProps,
    ColorProps,
    FontWeightProps,
    BorderProps,
    WidthProps,
    MinHeightProps,
    FontSizeProps {}
const StyledInput = styled('input')<StyledInputProps>`
  ${background}
  ${space}
  ${fontFamily}
  ${fontSize}
  ${color}
  ${fontWeight}
  ${space}
  ${border}
  ${width}
  ${minHeight}
  cursor: pointer;
  box-sizing: border-box;
  
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-weight: 500;
    color: #929598;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    font-weight: 500;
    color: #929598;
  }
  :-moz-placeholder { /* Firefox 18- */
    font-weight: 500;
    color: #929598;
  }
`

interface InputProps {
  placeholder: string
  value: string
  id: string
  ariaLabel: string
  onClick(): void
  showCalendarIcon: boolean

  inputBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputMinHeight?: ResponsiveValue<MinHeightProperty<TLengthStyledSystem>>
  inputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  calendarWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
}

function Input({
  placeholder,
  id,
  ariaLabel,
  onClick,
  value,
  showCalendarIcon,

  inputBorder,
  inputMinHeight,
  inputPadding,
  calendarWrapperTop,
}: InputProps) {
  return (
    <InputLabel
      htmlFor={id}
      display="block"
      position="relative"
      border={inputBorder || '1px solid #d0d0d0'}
      background="#ffffff"
      borderRadius="2px"
      mb="0"
    >
      {showCalendarIcon && (
        <CalendarWrapper
          position="absolute"
          height="12px"
          width="12px"
          top={calendarWrapperTop || '16px'}
          left="16px"
        >
          <CalendarIcon width="12px" height="12px" color="#BCBEC0" />
        </CalendarWrapper>
      )}
      <StyledInput
        border="0"
        p={inputPadding || '0 44px'}
        width="100%"
        minHeight={inputMinHeight || '46px'}
        background="#ffffff"
        fontFamily="Montserrat"
        color="#001217"
        fontSize="14px"
        fontWeight={600}
        id={id}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={value}
        autoComplete="off"
        readOnly
        onFocus={onClick}
      />
    </InputLabel>
  )
}

export default Input
