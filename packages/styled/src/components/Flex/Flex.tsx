import {
  alignItems,
  AlignItemsProps,
  flex,
  FlexProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
  space,
  SpaceProps,
  gridArea,
  GridAreaProps,
  height,
  HeightProps,
  width,
  WidthProps,
} from 'styled-system'
import styled from 'styled-components'

interface FlexComponentProps
  extends SpaceProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    GridAreaProps,
    HeightProps,
    WidthProps,
    FlexProps,
    JustifyContentProps {}
const Flex = styled('div')<FlexComponentProps>`
  display: flex;

  ${space}
  ${flex}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${gridArea}
  ${height}
  ${width}
`

export default Flex
