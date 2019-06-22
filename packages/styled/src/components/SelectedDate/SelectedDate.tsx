import React, {useContext} from 'react'
import styled, {css, ThemeContext} from 'styled-components'
import useThemeProps from '../../hooks/useThemeProps'
// eslint-disable-next-line import/no-unresolved
import {SelectDateTheme} from '../../@types/theme'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'
import Text from '../Text'
import Box from '../Box'

interface StyledDateProps {
  isActive: boolean
  selectDateBorderColor: string
}
const StyledDate = styled(Text)<StyledDateProps>`
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  ${({isActive, selectDateBorderColor}) =>
    isActive &&
    css`
      &:after {
        background: ${selectDateBorderColor};
      }
    `}
`

export interface SelectDateProps {
  title: string
  date: string
  isActive: boolean
  vertical: boolean
}

function SelectDate({title, isActive, date, vertical}: SelectDateProps) {
  const themeContext = useContext(ThemeContext)
  const theme: SelectDateTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    selectDateLabelFontSize: '11px',
    selectDateLabelColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext,
    ),
    selectDateLabelMargin: '0 0 8px',
    selectDateDateColor: getThemeProp('charcoal', globalStyles.colors.charcoal, themeContext),
    selectDateDateFontSize: vertical ? '16px' : '24px',
    selectDateDateFontWeight: 500,
    selectDateDatePadding: '0 0 15px',
    selectDateBorderColor: getThemeProp(
      'primaryColor',
      globalStyles.colors.primaryColor,
      themeContext,
    ),
    selectDatePadding: '0',
  })

  return (
    <Box p={theme.selectDatePadding}>
      <Text
        fontFamily={theme.fontFamily}
        fontSize={theme.selectDateLabelFontSize}
        // @ts-ignore
        color={theme.selectDateLabelColor}
        m={theme.selectDateLabelMargin}
      >
        {title}
      </Text>
      <StyledDate
        as="span"
        // @ts-ignore
        color={theme.selectDateDateColor}
        fontSize={theme.selectDateDateFontSize}
        fontWeight={theme.selectDateDateFontWeight}
        fontFamily={theme.fontFamily}
        p={theme.selectDateDatePadding}
        isActive={isActive}
        // @ts-ignore
        selectDateBorderColor={theme.selectDateBorderColor}
      >
        {date}
      </StyledDate>
    </Box>
  )
}

export default SelectDate
