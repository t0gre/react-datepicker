import React from 'react'
import styled, {css} from 'styled-components'
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
  return (
    <div>
      <Text fontFamily="Montserrat" fontSize="11px" color="#929598" mb="8px">
        {title}
      </Text>
      <StyledDate
        as="span"
        color="#001217"
        fontSize="24px"
        fontWeight={500}
        fontFamily="Montserrat"
        pb="15px"
        isActive={isActive}
      >
        {date}
      </StyledDate>
    </div>
  )
}

export default Date
