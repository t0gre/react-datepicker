import React, {useContext, useState, useEffect, useRef} from 'react'
import styled, {ThemeContext} from 'styled-components'
import {parseDate} from '@datepicker-react/hooks'
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
  compose,
} from 'styled-system'
import CalendarIcon from '../../icons/CalendarIcon'
// eslint-disable-next-line import/no-unresolved
import {InputTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import {PaddingProperty} from 'csstype'
import getThemeProp from '../../utils/getThemeProp'

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

const composeInputLabelStyles = compose(position, border, background, display, borderRadius, space)
const InputLabel = styled('label')<InputLabelProps>`
  ${composeInputLabelStyles}
`

interface CalendarWrapperProps
  extends PositionProps,
    LeftProps,
    RightProps,
    TopProps,
    HeightProps,
    WidthProps {}

const composeCalendarWrapperStyles = compose(position, left, right, top, height, width)

const CalendarWrapper = styled('div')<CalendarWrapperProps>`
  ${composeCalendarWrapperStyles}
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

const composeStyledInputStyle = compose(
  background,
  space,
  fontFamily,
  fontSize,
  color,
  fontWeight,
  space,
  border,
  width,
  minHeight,
  boxShadow,
)

const StyledInput = styled('input')<StyledInputProps>`
  ${composeStyledInputStyle}
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    ${placeholderFontWeight}
    ${placeholderColor}
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    ${placeholderFontWeight}
    ${placeholderColor}
  }
  :-moz-placeholder {
    /* Firefox 18- */
    ${placeholderFontWeight}
    ${placeholderColor}
  }

  &:disabled {
    cursor: not-allowed;
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
  onChange?(date: Date): void
  dateFormat: string
  disabled?: boolean
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
  dateFormat,
  onChange = () => {},
  disabled = false,
}: InputProps) {
  const [searchString, setSearchString] = useState(value)
  const ref = useRef(null)
  useEffect(() => {
    setSearchString(value)
  }, [value])
  const themeContext = useContext(ThemeContext)
  const theme: InputTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    inputFontWeight: 600,
    inputFontSize: '14px',
    inputColor: getThemeProp('charcoal', globalStyles.colors.charcoal, themeContext),
    inputBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    inputMinHeight: '46px',
    inputWidth: '100%',
    inputPadding: padding,
    inputBorder: '0',
    inputPlaceholderFontWeight: 500,
    inputPlaceholderColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext,
    ),
    inputCalendarWrapperPosition: 'absolute',
    inputCalendarWrapperHeight: '12px',
    inputCalendarWrapperWidth: '12px',
    inputCalendarWrapperTop: '16px',
    inputCalendarWrapperLeft: rtl ? 'unset' : vertical ? '8px' : '16px',
    inputCalendarWrapperRight: rtl ? (vertical ? '8px' : '16px') : 'unset',
    inputCalendarIconWidth: '12px',
    inputCalendarIconHeight: '12px',
    inputCalendarIconColor: getThemeProp('graci', globalStyles.colors.graci, themeContext),
    inputLabelDisplay: 'block',
    inputLabelPosition: 'relative',
    inputLabelBorder: `1px solid ${getThemeProp('graci', globalStyles.colors.graci, themeContext)}`,
    inputLabelBorderRadius: '2px',
    inputLabelBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    inputLabelMargin: '0',
    inputActiveBoxShadow: `inset 0px -3px 0 ${getThemeProp(
      'primaryColor',
      globalStyles.colors.primaryColor,
      themeContext,
    )}`,
  })

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const dateValue = e.target.value
    setSearchString(dateValue)

    if (typeof ref.current === 'number') {
      // @ts-ignore
      clearTimeout(ref.current)
    }

    // @ts-ignore
    ref.current = setTimeout(() => {
      onClick()
      // @ts-ignore
      const parsedDate = parseDate(dateValue, dateFormat, new Date())

      // @ts-ignore
      if (!isNaN(parsedDate)) {
        onChange(parsedDate)
      }
    }, 1000)
  }

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
        tabIndex={disableAccessibility ? -1 : 0}
        border={theme.inputBorder}
        p={theme.inputPadding}
        // @ts-ignore
        width={theme.inputWidth}
        minHeight={theme.inputMinHeight}
        background={theme.inputBackground}
        fontFamily={theme.fontFamily}
        // @ts-ignore
        color={theme.inputColor as string}
        fontSize={theme.inputFontSize}
        fontWeight={theme.inputFontWeight}
        placeholderColor={theme.inputPlaceholderColor}
        placeholderFontWeight={theme.inputPlaceholderFontWeight}
        boxShadow={isActive ? theme.inputActiveBoxShadow : 'none'}
        id={id}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={searchString}
        autoComplete="off"
        onChange={handleOnChange}
        onFocus={onClick}
        data-testid="DatepickerInput"
        disabled={disabled}
      />
    </InputLabel>
  )
}

export default Input
