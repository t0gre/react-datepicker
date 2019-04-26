import {
  GridAutoColumnsProps,
  GridAutoFlowProps,
  GridAutoRowsProps,
  AlignItemsProps,
  JustifyContentProps,
  GridColumnGapProps,
  GridGapProps,
  GridRowGapProps,
  GridTemplatesAreasProps,
  GridTemplatesColumnsProps,
  GridTemplatesRowsProps,
  SpaceProps,
} from 'styled-system'
interface GridProps
  extends GridAutoColumnsProps,
    GridAutoFlowProps,
    GridAutoRowsProps,
    AlignItemsProps,
    JustifyContentProps,
    GridColumnGapProps,
    GridGapProps,
    GridRowGapProps,
    GridTemplatesAreasProps,
    GridTemplatesColumnsProps,
    SpaceProps,
    GridTemplatesRowsProps {
  daySizeGridTemplateColumns?: number | (number | null)[] | undefined
}
declare const Grid: import('styled-components').StyledComponent<'div', any, GridProps, never>
export default Grid
