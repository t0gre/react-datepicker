import React, {useMemo, useContext, useRef} from 'react'
import styled, {css, ThemeContext} from 'styled-components'
import {compose, ResponsiveValue, style, TLengthStyledSystem} from 'styled-system'
import {useDay} from '@datepicker-react/hooks'
import {
  boxShadow,
  BoxShadowProps,
  background,
  BackgroundProps,
  color,
  ColorProps,
  fontFamily,
  FontFamilyProps,
  fontWeight,
  FontWeightProps,
  fontSize,
  FontSizeProps,
} from 'styled-system'
import Flex from '../Flex'
import datepickerContext from '../../context/datepickerContext'
// eslint-disable-next-line import/no-unresolved
import {DayTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import {BackgroundProperty, ColorProperty} from 'csstype'
import getThemeProp from '../../utils/getThemeProp'

const dayHeight = style({
  // React prop name and CSS property
  prop: 'dayHeight',
  // CSS property (if different from prop argument)
  cssProperty: 'height',
  // key for theme values
  key: 'dayHeight',
  // accessor function for transforming the value
  transformValue: n => n + 'px',
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})

const dayWidth = style({
  // React prop name and CSS property
  prop: 'dayWidth',
  // CSS property (if different from prop argument)
  cssProperty: 'width',
  // key for theme values
  key: 'dayWidth',
  // accessor function for transforming the value
  transformValue: n => n + 'px',
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})

const dayHoverColor = style({
  // React prop name and CSS property
  prop: 'dayHoverColor',
  // CSS property (if different from prop argument)
  cssProperty: 'color',
  // key for theme values
  key: 'dayHoverColor',
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})

const daySelectedHoverColor = style({
  // React prop name and CSS property
  prop: 'daySelectedHoverColor',
  // CSS property (if different from prop argument)
  cssProperty: 'color',
  // key for theme values
  key: 'daySelectedHoverColor',
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})

const dayHoverBackground = style({
  // React prop name and CSS property
  prop: 'dayHoverBackground',
  // CSS property (if different from prop argument)
  cssProperty: 'background',
  // key for theme values
  key: 'dayHoverBackground',
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})

const daySelectedHoverBackground = style({
  // React prop name and CSS property
  prop: 'daySelectedHoverBackground',
  // CSS property (if different from prop argument)
  cssProperty: 'background',
  // key for theme values
  key: 'daySelectedHoverBackground',
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})

interface StyledDayProps
  extends BoxShadowProps,
    BackgroundProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps {
  isSelected: boolean
  disabledDate: boolean
  isSelectedStartOrEnd: boolean
  isWithinHoverRange: boolean
  dayHeight: number | (number | null)[] | undefined
  dayWidth: number | (number | null)[] | undefined
  borderAccessibilityColor: string
  daySelectedHoverBackground: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  dayHoverBackground: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  dayHoverColor: ResponsiveValue<ColorProperty>
  daySelectedHoverColor: ResponsiveValue<ColorProperty>
}

const composeStyledDayStyles = compose(
  boxShadow,
  background,
  color,
  fontFamily,
  fontWeight,
  fontSize,
)

const StyledDay = styled('button')<StyledDayProps>`
  ${dayHeight}
  ${dayWidth}
  ${composeStyledDayStyles}
  cursor: pointer;
  border: 0;
  padding: 0;
  outline: 0;
  
  ${({disabledDate, isSelectedStartOrEnd}) =>
    disabledDate &&
    !isSelectedStartOrEnd &&
    css`
      cursor: initial;
      opacity: 0.4;
    `}
  
  ${({disabledDate, isSelected, isSelectedStartOrEnd, isWithinHoverRange}) => {
    if (!disabledDate && !isSelected && !isSelectedStartOrEnd && !isWithinHoverRange) {
      return css`
        &:hover {
          ${dayHoverBackground}
          ${dayHoverColor}
        }
      `
    } else if (isSelected && !isSelectedStartOrEnd) {
      return css`
        &:hover {
          ${daySelectedHoverBackground}
          ${daySelectedHoverColor}
        }
      `
    }

    return ''
  }}
  
  &:focus {
    ${({borderAccessibilityColor}) => css`
      box-shadow: none;
      border: 2px solid ${borderAccessibilityColor};
    `}
  }
`

function getColor(
  isSelected: boolean,
  isSelectedStartOrEnd: boolean,
  isWithinHoverRange: boolean,
  {
    selectedFirstOrLast,
    normal,
    selected,
    rangeHover,
  }: {
    selectedFirstOrLast: ResponsiveValue<ColorProperty>
    selected: ResponsiveValue<ColorProperty>
    normal: ResponsiveValue<ColorProperty>
    rangeHover: ResponsiveValue<ColorProperty>
  },
) {
  if (isSelectedStartOrEnd) {
    return selectedFirstOrLast
  } else if (isSelected) {
    return selected
  } else if (isWithinHoverRange) {
    return rangeHover
  } else {
    return normal
  }
}

interface DayProps {
  day: string
  date: Date
}
function Day({day, date}: DayProps) {
  const dayRef = useRef<HTMLButtonElement>(null)
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
    onDayRender,
    unavailableDates,
  } = useContext(datepickerContext)

  const dayProps = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
    unavailableDates,
  })

  const themeContext = useContext(ThemeContext)
  const white = getThemeProp('white', globalStyles.colors.white, themeContext)
  const mud = getThemeProp('mud', globalStyles.colors.mud, themeContext)
  const primaryColor = getThemeProp('primaryColor', globalStyles.colors.primaryColor, themeContext)
  const accessibility = getThemeProp(
    'accessibility',
    globalStyles.colors.accessibility,
    themeContext,
  )
  const selectedDay = getThemeProp('selectedDay', globalStyles.colors.selectedDay, themeContext)
  const selectedDayHover = getThemeProp(
    'selectedDayHover',
    globalStyles.colors.selectedDayHover,
    themeContext,
  )
  const normalDayHover = getThemeProp(
    'normalDayHover',
    globalStyles.colors.normalDayHover,
    themeContext,
  )
  const theme: DayTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    daySize: globalStyles.daySize,
    dayFontWeight: 500,
    dayFontSize: '14px',
    dayColor: mud,
    dayHoverColor: mud,
    daySelectedColor: white,
    daySelectedHoverColor: white,
    dayHoverRangeColor: white,
    daySelectedFirstOrLastColor: white,
    dayBackground: white,
    dayHoverBackground: normalDayHover,
    daySelectedBackground: selectedDay,
    daySelectedHoverBackground: selectedDayHover,
    dayHoverRangeBackground: selectedDay,
    daySelectedFirstOrLastBackground: primaryColor,
    dayBorderColor: normalDayHover,
    daySelectedBorderColor: selectedDay,
    dayHoverRangeBorderColor: selectedDay,
    daySelectedFirstOrLastBorderColor: primaryColor,
    dayAccessibilityBorderColor: accessibility,
  })
  const borderColor = useMemo(
    () =>
      getColor(dayProps.isSelected, dayProps.isSelectedStartOrEnd, dayProps.isWithinHoverRange, {
        // @ts-ignore
        selectedFirstOrLast: theme.daySelectedFirstOrLastBorderColor,
        // @ts-ignore
        selected: theme.daySelectedBorderColor,
        // @ts-ignore
        normal: theme.dayBorderColor,
        // @ts-ignore
        rangeHover: theme.dayHoverRangeColor,
      }),
    [dayProps.isSelected, dayProps.isSelectedStartOrEnd, theme, dayProps.isWithinHoverRange],
  )
  const background = useMemo(
    () =>
      getColor(dayProps.isSelected, dayProps.isSelectedStartOrEnd, dayProps.isWithinHoverRange, {
        // @ts-ignore
        selectedFirstOrLast: theme.daySelectedFirstOrLastBackground,
        // @ts-ignore
        selected: theme.daySelectedBackground,
        // @ts-ignore
        normal: theme.dayBackground,
        // @ts-ignore
        rangeHover: theme.dayHoverRangeBackground,
      }),
    [dayProps.isSelected, dayProps.isSelectedStartOrEnd, theme, dayProps.isWithinHoverRange],
  )
  const color = useMemo(
    () =>
      getColor(dayProps.isSelected, dayProps.isSelectedStartOrEnd, dayProps.isWithinHoverRange, {
        // @ts-ignore
        selectedFirstOrLast: theme.daySelectedFirstOrLastColor,
        // @ts-ignore
        selected: theme.daySelectedColor,
        // @ts-ignore
        normal: theme.dayColor,
        // @ts-ignore
        rangeHover: theme.dayHoverRangeColor,
      }),
    [dayProps.isSelected, dayProps.isSelectedStartOrEnd, theme, dayProps.isWithinHoverRange],
  )

  return (
    <StyledDay
      {...dayProps}
      ref={dayRef}
      dayHeight={theme.daySize}
      dayWidth={theme.daySize}
      background={background}
      color={color}
      fontFamily={theme.fontFamily}
      fontWeight={theme.dayFontWeight}
      fontSize={theme.dayFontSize}
      // @ts-ignore
      daySelectedHoverBackground={theme.daySelectedHoverBackground}
      // @ts-ignore
      dayHoverBackground={theme.dayHoverBackground}
      // @ts-ignore
      dayHoverColor={theme.dayHoverColor}
      // @ts-ignore
      daySelectedHoverColor={theme.daySelectedHoverColor}
      // @ts-ignore
      borderAccessibilityColor={theme.dayAccessibilityBorderColor}
      boxShadow={`1px 0 0 0 ${borderColor},
        0 1px 0 0 ${borderColor},
        1px 1px 0 0 ${borderColor},
        1px 0 0 0 ${borderColor} inset,
        0 1px 0 0 ${borderColor} inset`}
      data-testid="Day"
      aria-label={`Day-${date.toDateString()}`}
      type="button"
    >
      {typeof onDayRender === 'function' ? (
        onDayRender(date)
      ) : (
        <Flex justifyContent="center" alignItems="center" height="100%" width="100%">
          {day}
        </Flex>
      )}
    </StyledDay>
  )
}

export default Day
