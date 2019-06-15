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
  compose,
} from 'styled-system'

interface TextProps
  extends FontWeightProps,
    FontSizeProps,
    FontFamilyProps,
    ColorProps,
    SpaceProps,
    LineHeightProps {}

const composeStyles = compose(
  fontFamily,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  space,
)

const Text = styled('div')<TextProps>`
  ${composeStyles}
`

export default Text
