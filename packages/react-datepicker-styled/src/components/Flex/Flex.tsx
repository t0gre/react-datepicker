import {
  alignItems,
  AlignItemsProps,
  flex,
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
} from 'styled-system'
import styled from 'styled-components'

interface FlexProps
  extends SpaceProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    GridAreaProps,
    JustifyContentProps {}
const Flex = styled('div')<FlexProps>`
  display: flex;

  ${space}
  ${flex}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${gridArea}
`

export default Flex
