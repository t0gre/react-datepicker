import React, {useContext} from 'react'
import styled, {css, ThemeContext} from 'styled-components'
import RedoIcon from '../../icons/RedoIcon'
import Text from '../Text'
// eslint-disable-next-line import/no-unresolved
import {ResetDatesTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'

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
  const themeContext = useContext(ThemeContext)
  const theme: ResetDatesTheme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    resetDatesIconColor: getThemeProp('mud', globalStyles.colors.mud, themeContext),
    resetDatesIconHeight: '14px',
    resetDatesIconWidth: '14px',
    resetDatesTextColor: getThemeProp('darcula', globalStyles.colors.darcula, themeContext),
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
        height={theme.resetDatesIconHeight as string}
        // @ts-ignore
        width={theme.resetDatesIconWidth as string}
        // @ts-ignore
        color={theme.resetDatesIconColor as string}
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
