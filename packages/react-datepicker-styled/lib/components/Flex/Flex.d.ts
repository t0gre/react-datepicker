import {
  AlignItemsProps,
  FlexDirectionProps,
  FlexWrapProps,
  JustifyContentProps,
  SpaceProps,
  GridAreaProps,
} from 'styled-system'
interface FlexProps
  extends SpaceProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    GridAreaProps,
    JustifyContentProps {}
declare const Flex: import('styled-components').StyledComponent<'div', any, FlexProps, never>
export default Flex
