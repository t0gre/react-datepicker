import styled from 'styled-components'
import {
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoRows,
  GridAutoRowsProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  gridColumnGap,
  GridColumnGapProps,
  gridGap,
  GridGapProps,
  gridRowGap,
  GridRowGapProps,
  gridTemplateAreas,
  GridTemplatesAreasProps,
  gridTemplateColumns,
  GridTemplatesColumnsProps,
  gridTemplateRows,
  GridTemplatesRowsProps,
  space,
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
    GridTemplatesRowsProps {}

const Grid = styled('div')<GridProps>`
  display: grid;
  ${gridAutoColumns}
  ${gridAutoFlow}
  ${gridAutoRows}
  ${gridColumnGap}
  ${gridGap}
  ${gridRowGap}
  ${gridTemplateAreas}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${alignItems}
  ${justifyContent}
  ${space}
`

export default Grid
