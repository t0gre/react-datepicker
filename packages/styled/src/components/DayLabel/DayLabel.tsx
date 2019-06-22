import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import Text from '../Text'
// eslint-disable-next-line import/no-unresolved
import {DayLabelTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'

interface MonthLabelProps {
  label: string
}

const MonthLabel = ({label}: MonthLabelProps) => {
  const themeContext = useContext(ThemeContext)

  const theme: DayLabelTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    dayLabelColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, themeContext),
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
      data-testid="DayLabel"
    >
      {label}
    </Text>
  )
}

export default MonthLabel
