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
  boxShadow,
  BoxShadowProps,
  right,
  RightProps,
  style,
  ResponsiveValue,
  TLengthStyledSystem,
} from 'styled-system'
import CalendarIcon from '../../icons/CalendarIcon'
// eslint-disable-next-line import/no-unresolved
import {InputTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import {PaddingProperty} from 'csstype'

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
    RightProps,
    TopProps,
    HeightProps,
    WidthProps {}
const CalendarWrapper = styled('div')<CalendarWrapperProps>`
  ${position}
  ${left}
  ${right}
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
    BoxShadowProps,
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
  ${boxShadow}
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  
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
  vertical: boolean
  isActive: boolean
  rtl: boolean
  disableAccessibility?: boolean
  padding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
}

function Input({
  placeholder,
  id,
  vertical,
  isActive,
  ariaLabel,
  onClick,
  value,
  showCalendarIcon,
  padding,
  rtl,
  disableAccessibility,
}: InputProps) {
  const theme: InputTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    inputFontWeight: 600,
    inputFontSize: '14px',
    inputColor: globalStyles.colors.charcoal,
    inputBackground: '#ffffff',
    inputMinHeight: '46px',
    inputWidth: '100%',
    inputPadding: padding,
    inputBorder: '0',
    inputPlaceholderFontWeight: 500,
    inputPlaceholderColor: globalStyles.colors.silverCloud,
    inputCalendarWrapperPosition: 'absolute',
    inputCalendarWrapperHeight: '12px',
    inputCalendarWrapperWidth: '12px',
    inputCalendarWrapperTop: '16px',
    inputCalendarWrapperLeft: rtl ? 'unset' : vertical ? '8px' : '16px',
    inputCalendarWrapperRight: rtl ? (vertical ? '8px' : '16px') : 'unset',
    inputCalendarIconWidth: '12px',
    inputCalendarIconHeight: '12px',
    inputCalendarIconColor: '#BCBEC0',
    inputLabelDisplay: 'block',
    inputLabelPosition: 'relative',
    inputLabelBorder: '1px solid #d0d0d0',
    inputLabelBorderRadius: '2px',
    inputLabelBackground: '#ffffff',
    inputLabelMargin: '0',
    inputActiveBoxShadow: 'inset 0px -3px 0 #00aeef',
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
          right={theme.inputCalendarWrapperRight}
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
        tabIndex={disableAccessibility ? -1 : 0}
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
        boxShadow={isActive ? theme.inputActiveBoxShadow : 'none'}
        id={id}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={value}
        autoComplete="off"
        onFocus={onClick}
        data-testid="DatepickerInput"
      />
    </InputLabel>
  )
}

export default Input
