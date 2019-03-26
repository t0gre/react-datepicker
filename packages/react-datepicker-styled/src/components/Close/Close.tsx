import React from 'react'
import styled from 'styled-components'
import CloseIcon from '../..//icons/CloseIcon'

export const Text = styled('div')`
  margin-left: 16px;
  margin-top: 1px;
  float: left;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #929598;
  transition: color 0.15s;
`

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    transition: color 0.15s;
  }

  &:hover {
    ${Text} {
      color: #343132;
    }

    svg {
      color: #343132;
    }
  }
`

function CloseModal() {
  return (
    <Wrapper>
      <CloseIcon width="15px" height="16px" color="#ADADAD" />
      <Text>Close</Text>
    </Wrapper>
  )
}

export default CloseModal
