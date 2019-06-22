import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import Text from '../Text'
// eslint-disable-next-line import/no-unresolved
import {MonthLabelTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'

interface MonthLabelProps {
  label: string
}

const MonthLabel = ({label}: MonthLabelProps) => {
  const themeContext = useContext(ThemeContext)
  const theme: MonthLabelTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    monthLabelColor: getThemeProp('darcula', globalStyles.colors.darcula, themeContext),
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
