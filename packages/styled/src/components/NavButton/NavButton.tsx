import React from 'react'
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
  return (
    <StyledNavButton
      width="30px"
      height="30px"
      background="#ffffff"
      border="1px solid #929598"
      p="0"
      type="button"
      onClick={onClick}
    >
      <CaretIcon
        width="18px"
        height="11px"
        color="#808285"
        direction={type === 'next' ? 'right' : 'left'}
      />
    </StyledNavButton>
  )
}

export default NavButton
