import {
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  ColorProps,
  LineHeightProps,
  SpaceProps,
} from 'styled-system'
interface TextProps
  extends FontWeightProps,
    FontSizeProps,
    FontFamilyProps,
    ColorProps,
    SpaceProps,
    LineHeightProps {}
declare const Text: import('styled-components').StyledComponent<'div', any, TextProps, never>
export default Text
