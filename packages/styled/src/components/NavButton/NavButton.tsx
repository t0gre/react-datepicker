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
  borders,
  BordersProps,
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
    BordersProps {}
const StyledNavButton = styled('button')<StyledNavButtonProps>`
  ${width}
  ${height}
  ${background}
  ${space}
  ${borders}
  display: flex;
  justify-content: center;
  align-items: center;
`

interface NavButtonProps {
  type: 'next' | 'prev'
  onClick(): void
  vertical: boolean
}

function NavButton({type, onClick, vertical}: NavButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const theme: NavButtonTheme = useThemeProps({
    navButtonWidth: vertical ? '48px' : '30px',
    navButtonHeight: vertical ? '48px' : '30px',
    navButtonBackground: '#ffffff',
    navButtonBorder: '1px solid #929598',
    navButtonPadding: '0',
    navButtonIconHeight: vertical ? '18px' : '11px',
    navButtonIconWidth: vertical ? '28px' : '18px',
    navButtonIconColor: globalStyles.colors.greey,
  })

  function handleMouseUp() {
    if (ref && ref.current) {
      ref.current.blur()
    }
  }

  function getDirection() {
    if (type === 'next' && !vertical) {
      return 'right'
    } else if (type === 'next' && vertical) {
      return 'down'
    } else if (type === 'prev' && !vertical) {
      return 'left'
    }

    return 'up'
  }

  return (
    <StyledNavButton
      width={theme.navButtonWidth}
      height={theme.navButtonHeight}
      background={theme.navButtonBackground}
      border={theme.navButtonBorder}
      borderRight={getDirection() === 'up' ? 'unset' : theme.navButtonBorder}
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
        direction={getDirection()}
      />
    </StyledNavButton>
  )
}

export default NavButton
