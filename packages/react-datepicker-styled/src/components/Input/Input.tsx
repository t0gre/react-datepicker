import React from 'react'
import styled from 'styled-components'
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
} from 'styled-system'
import CalendarIcon from '../../icons/CalendarIcon'

interface InputLabelProps
  extends PositionProps,
    BorderProps,
    BackgroundProps,
    DisplayProps,
    BorderRadiusProps {}
const InputLabel = styled('label')<InputLabelProps>`
  ${position}
  ${border}
  ${background}
  ${display}
  ${borderRadius}
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
    HeightProps,
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
  ${height}
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

function Input() {
  return (
    <InputLabel
      htmlFor="test"
      display="block"
      position="relative"
      border="1px solid #d0d0d0"
      background="#ffffff"
      borderRadius="2px"
    >
      <CalendarWrapper position="absolute" height="12px" width="12px" top="18px" left="16px">
        <CalendarIcon width="12px" height="12px" color="#BCBEC0" />
      </CalendarWrapper>
      <StyledInput
        border="0"
        px="44px"
        width="100%"
        height="46px"
        background="#ffffff"
        fontFamily="Montserrat"
        color="#001217"
        fontSize="14px"
        fontWeight={600}
        id="test"
        placeholder="Set end date"
        readOnly
      />
    </InputLabel>
  )
}

export default Input
