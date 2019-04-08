import {ResponsiveValue, TLengthStyledSystem} from 'styled-system'
import {
  FontFamilyProperty,
  FontSizeProperty,
  ColorProperty,
  MarginProperty,
  FontWeightProperty,
  PaddingProperty,
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
