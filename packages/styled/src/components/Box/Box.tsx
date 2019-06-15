import {
  bottom,
  BottomProps,
  compose,
  gridArea,
  GridAreaProps,
  height,
  HeightProps,
  left,
  LeftProps,
  position,
  PositionProps,
  right,
  RightProps,
  space,
  SpaceProps,
  top,
  TopProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from 'styled-system'
import styled from 'styled-components'

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
const composeBoxStyles = compose(
  gridArea,
  height,
  space,
  width,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
)

const Box = styled('div')<BoxProps>`
  box-sizing: border-box;
  ${composeBoxStyles}
`

export default Box
