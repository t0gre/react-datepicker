import React from 'react'
import Text from '../Text'
// eslint-disable-next-line import/no-unresolved
import {DayLabelTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'

interface MonthLabelProps {
  label: string
}

const MonthLabel = ({label}: MonthLabelProps) => {
  const theme: DayLabelTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    dayLabelColor: globalStyles.colors.silverCloud,
    dayLabelFontWeight: 500,
    dayLabelFontSize: '11px',
  })
  return (
    <Text
      fontFamily={theme.fontFamily}
      fontSize={theme.dayLabelFontSize}
      fontWeight={theme.dayLabelFontWeight}
      // @ts-ignore
      color={theme.dayLabelColor}
    >
      {label}
    </Text>
  )
}

export default MonthLabel
