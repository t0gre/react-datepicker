import React from 'react'
import styled, {css} from 'styled-components'
import useThemeProps from '../../hooks/useThemeProps'
// eslint-disable-next-line import/no-unresolved
import {SelectDateTheme} from '../../@types/theme'
import globalStyles from '../../globalStyles'
import Text from '../Text'

interface StyledDateProps {
  isActive: boolean
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

  ${({isActive}) =>
    isActive &&
    css`
      &:after {
        background: #00aeef;
      }
    `}
`

export interface SelectDateProps {
  title: string
  date: string
  isActive: boolean
}

function SelectDate({title, isActive, date}: SelectDateProps) {
  const theme: SelectDateTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    selectDateLabelFontSize: '11px',
    selectDateLabelColor: globalStyles.colors.silverCloud,
    selectDateLabelMargin: '0 0 8px',
    selectDateDateColor: globalStyles.colors.charcoal,
    selectDateDateFontSize: '24px',
    selectDateDateFontWeight: 500,
    selectDateDatePadding: '0 0 15px',
  })

  return (
    <div>
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
      >
        {date}
      </StyledDate>
    </div>
  )
}

export default SelectDate
