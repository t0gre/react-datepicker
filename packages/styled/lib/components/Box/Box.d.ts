import {
  BottomProps,
  GridAreaProps,
  HeightProps,
  LeftProps,
  PositionProps,
  RightProps,
  SpaceProps,
  TopProps,
  WidthProps,
} from 'styled-system'
interface BoxProps
  extends GridAreaProps,
    HeightProps,
    SpaceProps,
    PositionProps,
    TopProps,
    BottomProps,
    LeftProps,
    RightProps,
    WidthProps {}
declare const Box: import('styled-components').StyledComponent<'div', any, BoxProps, never>
export default Box
