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

interface DateProps {
  title: string
  date: string
  isActive: boolean
}

function Date({title, isActive, date = 'Select'}: DateProps) {
  const theme: SelectDateTheme = useThemeProps([
    'fontFamily',
    'selectDateLabelFontSize',
    'selectDateLabelColor',
    'selectDateLabelMargin',
    'selectDateDateColor',
    'selectDateDateFontSize',
    'selectDateDateFontWeight',
    'selectDateDatePadding',
  ])

  return (
    <div>
      <Text
        fontFamily={theme.fontFamily || globalStyles.fontFamily}
        fontSize={theme.selectDateLabelFontSize || '11px'}
        // @ts-ignore
        color={theme.selectDateLabelColor || globalStyles.colors.silverCloud}
        m={theme.selectDateLabelMargin || '0 0 8px'}
      >
        {title}
      </Text>
      <StyledDate
        as="span"
        // @ts-ignore
        color={theme.selectDateDateColor || globalStyles.colors.charcoal}
        fontSize={theme.selectDateDateFontSize || '24px'}
        fontWeight={theme.selectDateDateFontWeight || 500}
        fontFamily={theme.fontFamily || globalStyles.fontFamily}
        p={theme.selectDateDatePadding || '0 0 15px'}
        isActive={isActive}
      >
        {date}
      </StyledDate>
    </div>
  )
}

export default Date
