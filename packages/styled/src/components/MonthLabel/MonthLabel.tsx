import React from 'react'
import Text from '../Text'
// eslint-disable-next-line import/no-unresolved
import {MonthLabelTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'

interface MonthLabelProps {
  label: string
}

const MonthLabel = ({label}: MonthLabelProps) => {
  const theme: MonthLabelTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    monthLabelColor: globalStyles.colors.darcula,
    monthLabelLineHeight: 1.57,
    monthLabelFontWeight: 600,
    monthLabelFontSize: '14px',
  })

  return (
    <Text
      fontFamily={theme.fontFamily}
      fontSize={theme.monthLabelFontSize}
      fontWeight={theme.monthLabelFontWeight}
      lineHeight={theme.monthLabelLineHeight}
      // @ts-ignore
      color={theme.monthLabelColor}
      data-testid="MonthLabel"
    >
      {label}
    </Text>
  )
}

export default MonthLabel
