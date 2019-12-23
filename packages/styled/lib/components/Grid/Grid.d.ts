import {
  GridAutoColumnsProps,
  GridAutoFlowProps,
  GridAutoRowsProps,
  AlignItemsProps,
  JustifyContentProps,
  GridColumnGapProps,
  GridGapProps,
  GridRowGapProps,
  GridTemplateAreasProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
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
    GridTemplateAreasProps,
    GridTemplateColumnsProps,
    SpaceProps,
    GridTemplateRowsProps {
  daySizeGridTemplateColumns?: number | (number | null)[] | undefined
  numberOfMonthsGridTemplateColumns?: number | (number | null)[] | undefined
}
declare const Grid: import('styled-components').StyledComponent<'div', any, GridProps, never>
export default Grid
