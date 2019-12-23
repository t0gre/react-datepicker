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
  ZIndexProps,
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
    ZIndexProps,
    WidthProps {}
declare const Box: import('styled-components').StyledComponent<'div', any, BoxProps, never>
export default Box
