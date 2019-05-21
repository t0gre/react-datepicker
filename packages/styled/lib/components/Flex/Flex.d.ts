import {
  AlignItemsProps,
  FlexProps,
  FlexDirectionProps,
  FlexWrapProps,
  JustifyContentProps,
  SpaceProps,
  GridAreaProps,
  HeightProps,
  WidthProps,
} from 'styled-system'
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
declare const Flex: import('styled-components').StyledComponent<
  'div',
  any,
  FlexComponentProps,
  never
>
export default Flex
