# Theme props

```ts
fontFamily?: ResponsiveValue<FontFamilyProperty>
daySize?: number | (number | null)[] | undefined

colors: {
  primaryColor: string ('#00aeef'),
  silverCloud: string ('#929598'),
  charcoal: string ('#001217'),
  darcula: string ('#343132'),
  mud: string ('#58595B'),
  greey: string ('#808285'),
  graci: string ('#BCBEC0'),
  white: string ('#ffffff'),
  accessibility: string ('#009fef'),
  selectedDay: string ('#71c9ed'),
  selectedDayHover: string ('#39beef'),
  normalDayHover: string ('#e6e7e8'),
}

closeColor?: ResponsiveValue<ColorProperty>
closeHoverColor?: ResponsiveValue<ColorProperty>
closeMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
closeFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
closeFontWeight?: ResponsiveValue<FontWeightProperty>

selectDateLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
selectDateLabelColor?: ResponsiveValue<ColorProperty>
selectDateLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
selectDateDateColor?: ResponsiveValue<ColorProperty>
selectDateDateFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
selectDateDateFontWeight?: ResponsiveValue<FontWeightProperty>
selectDateDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
selectDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
selectDateBorderColor?: string

resetDatesIconColor?: string
resetDatesIconHeight?: string
resetDatesIconWidth?: string
resetDatesTextColor?: ResponsiveValue<ColorProperty>
resetDatesTextMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
resetDatesTextFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
resetDatesTextLineHeight?: ResponsiveValue<LineHeightProperty<TLengthStyledSystem>>

navButtonHeight?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
navButtonWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
navButtonBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
navButtonBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
navButtonPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
navButtonIconHeight?: string
navButtonIconWidth?: string
navButtonIconColor?: string

monthLabelLineHeight?: ResponsiveValue<LineHeightProperty<TLengthStyledSystem>>
monthLabelFontWeight?: ResponsiveValue<FontWeightProperty>
monthLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
monthLabelColor?: ResponsiveValue<ColorProperty>

dayLabelFontWeight?: ResponsiveValue<FontWeightProperty>
dayLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
dayLabelColor?: ResponsiveValue<ColorProperty>

dayFontWeight?: ResponsiveValue<FontWeightProperty>
dayFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
dayColor?: ResponsiveValue<ColorProperty>
dayHoverColor?: ResponsiveValue<ColorProperty>
dayHoverRangeColor?: ResponsiveValue<ColorProperty>
daySelectedColor?: ResponsiveValue<ColorProperty>
daySelectedHoverColor?: ResponsiveValue<ColorProperty>
daySelectedFirstOrLastColor?: ResponsiveValue<ColorProperty>
dayBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
dayHoverBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
dayHoverRangeBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
daySelectedBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
daySelectedHoverBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
daySelectedFirstOrLastBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
dayBorderColor?: ColorProperty
dayHoverRangeBorderColor?: ColorProperty
daySelectedBorderColor?: ColorProperty
daySelectedFirstOrLastBorderColor?: ColorProperty
dayAccessibilityBorderColor?: ColorProperty

monthLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
monthDayLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>

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
inputActiveBoxShadow?: ResponsiveValue<BoxShadowProperty>
inputCalendarWrapperPosition?: ResponsiveValue<PositionProperty>
inputCalendarWrapperHeight?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
inputCalendarWrapperWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
inputCalendarWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
inputCalendarWrapperLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
inputCalendarWrapperRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
inputCalendarIconWidth?: string
inputCalendarIconHeight?: string
inputCalendarIconColor?: string

datepickerBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
datepickerBoxShadow?: ResponsiveValue<BoxShadowProperty>
datepickerPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
datepickerBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>
datepickerPosition?: ResponsiveValue<PositionProperty>
datepickerWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
datepickerCloseWrapperPosition?: ResponsiveValue<PositionProperty>
datepickerCloseWrapperDisplay?: ResponsiveValue<DisplayProperty>
datepickerCloseWrapperJustifyContent?: ResponsiveValue<JustifyContentProperty>
datepickerCloseWrapperMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
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
datepickerMonthsGridHeight?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
datepickerMonthsGridOverflow?: ResponsiveValue<OverflowProperty>

dateRangeBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
dateRangeGridTemplateColumns?: ResponsiveValue<GridTemplateColumnsProperty<TLengthStyledSystem>>
dateRangeGridTemplateRows?: ResponsiveValue<GridTemplateRowsProperty<TLengthStyledSystem>>
dateRangeBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
dateRangeBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>
dateRangeArrowIconWidth?: string
dateRangeArrowIconHeight?: string
dateRangeArrowIconColor?: ResponsiveValue<ColorProperty>
dateRangeArrowIconOpacity?: ResponsiveValue<GlobalsNumber>
dateRangeDatepickerWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
dateRangeDatepickerWrapperRight?: ResponsiveValue<RightProperty<TLengthStyledSystem>>
dateRangeDatepickerWrapperLeft?: ResponsiveValue<LeftProperty<TLengthStyledSystem>>
dateRangeDatepickerWrapperBottom?: ResponsiveValue<BottomProperty<TLengthStyledSystem>>
dateRangeDatepickerWrapperPosition?: ResponsiveValue<PositionProperty>
dateRangeStartDateInputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
dateRangeEndDateInputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
```
