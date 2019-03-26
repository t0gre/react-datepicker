import React from 'react'
import styled from 'styled-components'
import {
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  fontWeight,
  FontWeightProps,
} from 'styled-system'

interface DateSmallTextProps extends FontSizeProps, FontFamilyProps, ColorProps, SpaceProps {}
const DateSmallText = styled('div')<DateSmallTextProps>`
  ${fontFamily}
  ${fontSize}
  ${color}
  ${space}
`

interface StyledDateProps extends FontWeightProps, FontFamilyProps, ColorProps, FontSizeProps {}
const StyledDate = styled('div')<StyledDateProps>`
  ${color}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
`

interface DateProps {
  title: string
  date: string
}

function Date({title, date = 'Select'}: DateProps) {
  return (
    <div>
      <DateSmallText fontFamily="Montserrat" fontSize="11px" color="#929598" mb="8px">
        {title}
      </DateSmallText>
      <StyledDate color="#001217" fontSize="24px" fontWeight={500} fontFamily="Montserrat">
        {date}
      </StyledDate>
    </div>
  )
}

export default Date
