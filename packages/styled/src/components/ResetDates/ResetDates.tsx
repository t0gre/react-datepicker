import React from 'react'
import styled, {css} from 'styled-components'
import RedoIcon from '../../icons/RedoIcon'
import Text from '../Text'
// eslint-disable-next-line import/no-unresolved
import {ResetDatesTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'

const StyledReactDates = styled('button')`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  background: transparent;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

interface RedoIconProps {
  rtl: boolean
}
const RedoIconStyle = styled(RedoIcon)<RedoIconProps>`
  ${({rtl}) =>
    rtl &&
    css`
      transform: rotate(-180deg);
    `}
`

interface ResetDatesProps {
  onResetDates(): void
  text: string
  rtl: boolean
}

function ResetDates({onResetDates, text, rtl}: ResetDatesProps) {
  const theme: ResetDatesTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    resetDatesIconColor: globalStyles.colors.mud,
    resetDatesIconHeight: '14px',
    resetDatesIconWidth: '14px',
    resetDatesTextColor: globalStyles.colors.darcula,
    resetDatesTextMargin: rtl ? '1px 8px 0 0' : '1px 0 0 8px',
    resetDatesTextLineHeight: 1.18,
    resetDatesTextFontSize: '11px',
  })

  function handleMouseUp(e: React.MouseEvent) {
    // @ts-ignore
    e.currentTarget.blur()
  }

  return (
    <StyledReactDates
      aria-label="Reset dates"
      tabIndex={-1}
      onClick={onResetDates}
      onMouseUp={handleMouseUp}
    >
      <RedoIconStyle
        // @ts-ignore
        height={theme.resetDatesIconHeight}
        // @ts-ignore
        width={theme.resetDatesIconWidth}
        // @ts-ignore
        color={theme.resetDatesIconColor}
        rtl={rtl}
      />
      <Text
        m={theme.resetDatesTextMargin}
        lineHeight={theme.resetDatesTextLineHeight}
        fontFamily={theme.fontFamily}
        fontSize={theme.resetDatesTextFontSize}
        // @ts-ignore
        color={theme.resetDatesTextColor}
      >
        {text}
      </Text>
    </StyledReactDates>
  )
}

export default ResetDates
