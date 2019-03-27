import styled from 'styled-components'
import {
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  color,
  ColorProps,
  lineHeight,
  LineHeightProps,
  space,
  SpaceProps,
} from 'styled-system'

interface TextProps
  extends FontWeightProps,
    FontSizeProps,
    FontFamilyProps,
    ColorProps,
    SpaceProps,
    LineHeightProps {}

const Text = styled('div')<TextProps>`
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${color}
  ${lineHeight}
  ${space}
`

export default Text
