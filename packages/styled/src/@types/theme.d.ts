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
  MinHeightProperty,
  PositionProperty,
  TopProperty,
  LeftProperty,
  DisplayProperty,
  BorderRadiusProperty,
  RightProperty,
  ZIndexProperty,
  BottomProperty,
  GridTemplateColumnsProperty,
  GridGapProperty,
} from 'csstype'

interface CommonTheme {
  fontFamily?: ResponsiveValue<FontFamilyProperty>
  daySize?: number | (number | null)[] | undefined
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

export interface DayLabelTheme extends CommonTheme {
  dayLabelFontWeight?: ResponsiveValue<FontWeightProperty>
  dayLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  dayLabelColor?: ResponsiveValue<ColorProperty>
}

export interface DayTheme extends CommonTheme {
  dayFontWeight?: ResponsiveValue<FontWeightProperty>
  dayFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  dayColor?: ResponsiveValue<ColorProperty>
  dayHoverColor?: ResponsiveValue<ColorProperty>
  daySelectedColor?: ResponsiveValue<ColorProperty>
  daySelectedHoverColor?: ResponsiveValue<ColorProperty>
  daySelectedFirstOrLastColor?: ResponsiveValue<ColorProperty>
  dayBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  dayHoverBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  daySelectedBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  daySelectedHoverBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  daySelectedFirstOrLastBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  dayBorderColor?: ColorProperty
  dayBorderSelectedColor?: ColorProperty
  dayBorderSelectedFirstOrLastColor?: ColorProperty
  dayBorderAccessibility?: ColorProperty
}

export interface MonthTheme extends CommonTheme {
  monthLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  monthDayLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
}

export interface InputTheme extends CommonTheme {
  inputLabelDisplay?: ResponsiveValue<DisplayProperty>
  inputLabelPosition?: ResponsiveValue<PositionProperty>
  inputLabelBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputLabelBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>
  inputLabelBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  inputLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  inputFontWeight?: ResponsiveValue<FontWeightProperty>
  inputPlaceholderFontWeight?: ResponsiveValue<FontWeightProperty>
  inputFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  inputColor?: ResponsiveValue<ColorProperty>
  inputPlaceholderColor?: ResponsiveValue<ColorProperty>
  inputBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  inputMinHeight?: ResponsiveValue<MinHeightProperty<TLengthStyledSystem>>
  inputWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
  inputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  inputBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputCalendarWrapperPosition?: ResponsiveValue<PositionProperty>
  inputCalendarWrapperHeight?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
  inputCalendarWrapperWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
  inputCalendarWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  inputCalendarWrapperLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  inputCalendarIconWidth?: string
  inputCalendarIconHeight?: string
  inputCalendarIconColor?: string
}

export interface DatepickerTheme extends CommonTheme {
  datepickerBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  datepickerPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  datepickerBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>
  datepickerPosition?: ResponsiveValue<PositionProperty>
  datepickerCloseWrapperPosition?: ResponsiveValue<PositionProperty>
  datepickerCloseWrapperRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
  datepickerCloseWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  datepickerCloseWrapperLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  datepickerCloseWrapperBottom?: ResponsiveValue<BottomProperty<TLengthStyledSystem>>
  datepickerCloseWrapperZIndex?: ResponsiveValue<ZIndexProperty>
  datepickerSelectDateGridTemplateColumns?: ResponsiveValue<
    GridTemplateColumnsProperty<TLengthStyledSystem>
  >
  datepickerSelectDateArrowIconWidth?: string
  datepickerSelectDateArrowIconHeight?: string
  datepickerSelectDateArrowIconColor?: string
  datepickerMonthsWrapperMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  datepickerResetDatesWrapperMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  datepickerMonthsGridGap?: ResponsiveValue<GridGapProperty<TLengthStyledSystem>>
  datepickerPreviousMonthButtonPosition?: ResponsiveValue<PositionProperty>
  datepickerPreviousMonthButtonRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
  datepickerPreviousMonthButtonTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  datepickerPreviousMonthButtonLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  datepickerPreviousMonthButtonBottom?: ResponsiveValue<BottomProperty<TLengthStyledSystem>>
  datepickerNextMonthButtonPosition?: ResponsiveValue<PositionProperty>
  datepickerNextMonthButtonRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
  datepickerNextMonthButtonTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  datepickerNextMonthButtonLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
  datepickerNextMonthButtonBottom?: ResponsiveValue<BottomProperty<TLengthStyledSystem>>
}
