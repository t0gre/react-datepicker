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
  style,
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
  numberOfMonthsGridTemplateColumns?: number | (number | null)[] | undefined
}

const daySizeGridTemplateColumns = style({
  // React prop name and CSS property
  prop: 'daySizeGridTemplateColumns',
  // CSS property (if different from prop argument)
  cssProperty: 'gridTemplateColumns',
  // key for theme values
  key: 'gridTemplateColumns',
  // accessor function for transforming the value
  transformValue: n => `repeat(7, ${n}px)`,
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})

const numberOfMonthsGridTemplateColumns = style({
  // React prop name and CSS property
  prop: 'numberOfMonthsGridTemplateColumns',
  // CSS property (if different from prop argument)
  cssProperty: 'gridTemplateColumns',
  // key for theme values
  key: 'gridTemplateColumns',
  // accessor function for transforming the value
  transformValue: n => `repeat(${n}, 1fr)`,
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})

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
  ${daySizeGridTemplateColumns}
  ${numberOfMonthsGridTemplateColumns}
`

export default Grid
