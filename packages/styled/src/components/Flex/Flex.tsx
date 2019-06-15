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
  compose,
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

const composeFlexStyles = compose(
  space,
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  gridArea,
  height,
  width,
)

const Flex = styled('div')<FlexComponentProps>`
  display: flex;
  ${composeFlexStyles}
`

export default Flex
