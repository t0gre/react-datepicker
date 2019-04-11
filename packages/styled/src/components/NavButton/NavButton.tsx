import React, {useRef} from 'react'
import styled from 'styled-components'
import {
  width,
  WidthProps,
  height,
  HeightProps,
  background,
  BackgroundProps,
  space,
  SpaceProps,
  border,
  BorderProps,
} from 'styled-system'
import CaretIcon from '../../icons/CaretIcon'
// eslint-disable-next-line import/no-unresolved
import {NavButtonTheme} from '../../@types/theme'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'

interface StyledNavButtonProps
  extends HeightProps,
    WidthProps,
    BackgroundProps,
    SpaceProps,
    BorderProps {}
const StyledNavButton = styled('button')<StyledNavButtonProps>`
  ${width}
  ${height}
  ${background}
  ${space}
  ${border}
  display: flex;
  justify-content: center;
  align-items: center;
`

interface NavButtonProps {
  type: 'next' | 'prev'
  onClick(): void
}

function NavButton({type, onClick}: NavButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const theme: NavButtonTheme = useThemeProps({
    navButtonWidth: '30px',
    navButtonHeight: '30px',
    navButtonBackground: '#ffffff',
    navButtonBorder: '1px solid #929598',
    navButtonPadding: '0',
    navButtonIconHeight: '11px',
    navButtonIconWidth: '18px',
    navButtonIconColor: globalStyles.colors.greey,
  })

  function handleMouseUp() {
    if (ref && ref.current) {
      ref.current.blur()
    }
  }

  return (
    <StyledNavButton
      width={theme.navButtonWidth}
      height={theme.navButtonHeight}
      background={theme.navButtonBackground}
      border={theme.navButtonBorder}
      p={theme.navButtonPadding}
      type="button"
      onClick={onClick}
      onMouseUp={handleMouseUp}
      ref={ref}
    >
      <CaretIcon
        // @ts-ignore
        width={theme.navButtonIconWidth}
        // @ts-ignore
        height={theme.navButtonIconHeight}
        // @ts-ignore
        color={theme.navButtonIconColor}
        direction={type === 'next' ? 'right' : 'left'}
      />
    </StyledNavButton>
  )
}

export default NavButton
