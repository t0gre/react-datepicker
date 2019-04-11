import {ResponsiveValue, TLengthStyledSystem} from 'styled-system'
import {
  FontFamilyProperty,
  FontSizeProperty,
  ColorProperty,
  MarginProperty,
  FontWeightProperty,
  PaddingProperty,
  LineHeightProperty,
  HeightProperty,
  WidthProperty,
  BackgroundProperty,
  BorderProperty,
} from 'csstype'

interface CommonTheme {
  fontFamily?: ResponsiveValue<FontFamilyProperty>
}

export interface SelectDateTheme extends CommonTheme {
  selectDateLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  selectDateLabelColor?: ResponsiveValue<ColorProperty>
  selectDateLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  selectDateDateColor?: ResponsiveValue<ColorProperty>
  selectDateDateFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  selectDateDateFontWeight?: ResponsiveValue<FontWeightProperty>
  selectDateDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  selectDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
}

export interface ResetDatesTheme extends CommonTheme {
  resetDatesIconColor?: string
  resetDatesIconHeight?: string
  resetDatesIconWidth?: string
  resetDatesTextColor?: ResponsiveValue<ColorProperty>
  resetDatesTextMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  resetDatesTextFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  resetDatesTextLineHeight?: ResponsiveValue<LineHeightProperty<TLengthStyledSystem>>
}

export interface NavButtonTheme {
  navButtonHeight?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
  navButtonWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
  navButtonBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  navButtonBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  navButtonPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  navButtonIconHeight?: string
  navButtonIconWidth?: string
  navButtonIconColor?: string
}

export interface MonthLabelTheme extends CommonTheme {
  monthLabelLineHeight?: ResponsiveValue<LineHeightProperty<TLengthStyledSystem>>
  monthLabelFontWeight?: ResponsiveValue<FontWeightProperty>
  monthLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  monthLabelColor?: ResponsiveValue<ColorProperty>
}
