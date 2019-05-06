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
  minHeight,
  MinHeightProps,
  style,
} from 'styled-system'
import CalendarIcon from '../../icons/CalendarIcon'
// eslint-disable-next-line import/no-unresolved
import {InputTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'

const placeholderColor = style({
  prop: 'placeholderColor',
  cssProperty: 'color',
})

const placeholderFontWeight = style({
  prop: 'placeholderFontWeight',
  cssProperty: 'fontWeight',
})

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
    ${placeholderFontWeight}
    ${placeholderColor}
  }
  ::-moz-placeholder { /* Firefox 19+ */
    ${placeholderFontWeight}
    ${placeholderColor}
  }
  :-moz-placeholder { /* Firefox 18- */
    ${placeholderFontWeight}
    ${placeholderColor}
  }
`

interface InputProps {
  placeholder: string
  value: string
  id: string
  ariaLabel: string
  onClick(): void
  showCalendarIcon: boolean
}

function Input({placeholder, id, ariaLabel, onClick, value, showCalendarIcon}: InputProps) {
  const theme: InputTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    inputFontWeight: 600,
    inputFontSize: '14px',
    inputColor: globalStyles.colors.charcoal,
    inputBackground: '#ffffff',
    inputMinHeight: '46px',
    inputWidth: '100%',
    inputPadding: '0 44px',
    inputBorder: '0',
    inputPlaceholderFontWeight: 500,
    inputPlaceholderColor: globalStyles.colors.silverCloud,
    inputCalendarWrapperPosition: 'absolute',
    inputCalendarWrapperHeight: '12px',
    inputCalendarWrapperWidth: '12px',
    inputCalendarWrapperTop: '16px',
    inputCalendarWrapperLeft: '16px',
    inputCalendarIconWidth: '12px',
    inputCalendarIconHeight: '12px',
    inputCalendarIconColor: '#BCBEC0',
    inputLabelDisplay: 'block',
    inputLabelPosition: 'relative',
    inputLabelBorder: '1px solid #d0d0d0',
    inputLabelBorderRadius: '2px',
    inputLabelBackground: '#ffffff',
    inputLabelMargin: '0',
  })

  return (
    <InputLabel
      htmlFor={id}
      display={theme.inputLabelDisplay}
      position={theme.inputLabelPosition}
      border={theme.inputLabelBorder}
      background={theme.inputLabelBackground}
      borderRadius={theme.inputLabelBorderRadius}
      m={theme.inputLabelMargin}
    >
      {showCalendarIcon && (
        <CalendarWrapper
          position={theme.inputCalendarWrapperPosition}
          height={theme.inputCalendarWrapperHeight}
          width={theme.inputCalendarWrapperWidth}
          top={theme.inputCalendarWrapperTop}
          left={theme.inputCalendarWrapperLeft}
        >
          <CalendarIcon
            // @ts-ignore
            width={theme.inputCalendarIconWidth}
            // @ts-ignore
            height={theme.inputCalendarIconHeight}
            // @ts-ignore
            color={theme.inputCalendarIconColor}
          />
        </CalendarWrapper>
      )}
      <StyledInput
        readOnly
        border={theme.inputBorder}
        p={theme.inputPadding}
        // @ts-ignore
        width={theme.inputWidth}
        minHeight={theme.inputMinHeight}
        background={theme.inputBackground}
        fontFamily={theme.fontFamily}
        // @ts-ignore
        color={theme.inputColor}
        fontSize={theme.inputFontSize}
        fontWeight={theme.inputFontWeight}
        placeholderColor={theme.inputPlaceholderColor}
        placeholderFontWeight={theme.inputPlaceholderFontWeight}
        id={id}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={value}
        autoComplete="off"
        onFocus={onClick}
      />
    </InputLabel>
  )
}

export default Input
