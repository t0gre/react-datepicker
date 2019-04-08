import React, {useRef} from 'react'
import styled from 'styled-components'
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

interface onResetDatesProps {
  onResetDates(): void
  text: string
}

function ResetDates({onResetDates, text}: onResetDatesProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const theme: ResetDatesTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    resetDatesIconColor: globalStyles.colors.mud,
    resetDatesIconHeight: '14px',
    resetDatesIconWidth: '14px',
    resetDatesTextColor: globalStyles.colors.darcula,
    resetDatesTextMargin: '1px 0 0 8px',
    resetDatesTextLineHeight: 1.18,
    resetDatesTextFontSize: '11px',
  })

  function handleMouseUp() {
    if (ref && ref.current) {
      ref.current.blur()
    }
  }

  return (
    <StyledReactDates onClick={onResetDates} onMouseUp={handleMouseUp} ref={ref}>
      <RedoIcon
        // @ts-ignore
        height={theme.resetDatesIconHeight}
        // @ts-ignore
        width={theme.resetDatesIconWidth}
        // @ts-ignore
        color={theme.resetDatesIconColor}
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
