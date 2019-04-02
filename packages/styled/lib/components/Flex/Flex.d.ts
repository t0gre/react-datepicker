import { AlignItemsProps, FlexDirectionProps, FlexWrapProps, JustifyContentProps, SpaceProps, GridAreaProps, HeightProps, WidthProps } from 'styled-system';
interface FlexProps extends SpaceProps, FlexWrapProps, FlexDirectionProps, AlignItemsProps, GridAreaProps, HeightProps, WidthProps, JustifyContentProps {
}
declare const Flex: import("styled-components").StyledComponent<"div", any, FlexProps, never>;
export default Flex;
