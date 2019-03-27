import {
  bottom,
  BottomProps,
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
    WidthProps {}

const Box = styled('div')<BoxProps>`
  box-sizing: border-box;

  ${gridArea}
  ${height}
  ${space}
  ${width}
  ${position}
  ${top}
  ${left}
  ${right}
  ${bottom}
`

export default Box
