import React from 'react'
import styled, {css} from 'styled-components'
import {HeightProperty} from 'csstype'
import {
  height,
  HeightProps,
  width,
  WidthProps,
  boxShadow,
  BoxShadowProps,
  background,
  BackgroundProps,
  ResponsiveValue,
  TLengthStyledSystem,
} from 'styled-system'
import Text from '../Text'
import Flex from '../Flex'

interface StyledDayProps extends HeightProps, WidthProps, BoxShadowProps, BackgroundProps {
  isActive: boolean
  disabled: boolean
  isStartOrEnd: boolean
}
const StyledDay = styled('button')<StyledDayProps>`
  ${width}
  ${height}
  ${boxShadow}
  ${background}
  cursor: pointer;
  border: 0;
  padding: 0;
  outline: 0;
  
  ${({disabled}) =>
    disabled &&
    css`
      cursor: initial;
      opacity: 0.4;
    `}
  
  ${({disabled, isActive, isStartOrEnd}) => {
    if (!disabled && !isActive && !isStartOrEnd) {
      return css`
        &:hover {
          background: #e6e7e8;
        }
      `
    } else if (isActive && !isStartOrEnd) {
      return css`
        &:hover {
          background: #39beef;
        }
      `
    }

    return ''
  }}
`

function getBorderColor(isActive: boolean, isStartOrEnd: boolean) {
  if (isStartOrEnd) {
    return '#00aeef'
  } else if (isActive) {
    return '#71c9ed'
  } else {
    return '#e6e7e8'
  }
}

function getBackgroundColor(isActive: boolean, isStartOrEnd: boolean) {
  if (isStartOrEnd) {
    return '#00aeef'
  } else if (isActive) {
    return '#71c9ed'
  } else {
    return '#ffffff'
  }
}

function getColor(isActive: boolean, isStartOrEnd: boolean) {
  if (isActive || isStartOrEnd) {
    return '#ffffff'
  } else {
    return '#58595b'
  }
}

interface DayProps {
  day: string
  date: Date
  isActive: boolean
  disabled: boolean
  isStartOrEnd: boolean
  onDaySelect(date: Date): void
  daySize?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
}
function Day({day, isActive, isStartOrEnd, disabled, onDaySelect, date, daySize}: DayProps) {
  const borderColor = getBorderColor(isActive, isStartOrEnd)
  const background = getBackgroundColor(isActive, isStartOrEnd)
  const color = getColor(isActive, isStartOrEnd)

  return (
    <StyledDay
      role="button"
      onClick={() => onDaySelect(date)}
      disabled={disabled}
      isActive={isActive}
      isStartOrEnd={isStartOrEnd}
      height={daySize || '36px'}
      width={daySize || '36px'}
      background={background}
      boxShadow={`1px 0 0 0 ${borderColor},
        0 1px 0 0 ${borderColor},
        1px 1px 0 0 ${borderColor},
        1px 0 0 0 ${borderColor} inset,
        0 1px 0 0 ${borderColor} inset`}
    >
      <Flex justifyContent="center" alignItems="center" height="100%" width="100%">
        <Text color={color} fontFamily="Montserrat" fontWeight={500} fontSize="14px">
          {day}
        </Text>
      </Flex>
    </StyledDay>
  )
}

export default React.memo(Day)
