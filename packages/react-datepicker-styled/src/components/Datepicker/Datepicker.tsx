import React from 'react'
import {useMonth} from '@react-datepicker/hooks'
import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  space,
  SpaceProps,
  borderRadius,
  BorderRadiusProps,
  minWidth,
  MinWidthProps,
} from 'styled-system'
import Date from '../Date'
import Grid from '../Grid'
import Flex from '../Flex'
import Month from '../Month'
import Box from '../Box'
import ResetDates from '../ResetDates'
import NavButton from '../NavButton'
import ArrowIcon from '../../icons/ArrowIcon'

interface StyledDatepicker extends BackgroundProps, SpaceProps, BorderRadiusProps, MinWidthProps {}
const StyledDatepicker = styled('div')<StyledDatepicker>`
  ${background}
  ${space}
  ${borderRadius}
  ${minWidth}
`

const DateWrapper = styled('div')`
  position: relative;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background: #e6e7e8;
    bottom: 0;
    left: 0;
  }
`

function Datepicker() {
  useMonth()

  return (
    <StyledDatepicker minWidth="535px" background="#ffffff" p="32px" borderRadius="2px">
      <DateWrapper>
        <Grid gridTemplateColumns="126px 75px 126px">
          <Date title="Start date:" date="Select" isActive />
          <Flex justifyContent="center" alignItems="center">
            <ArrowIcon height="12px" width="15px" color="#929598" />
          </Flex>
          <Date title="end date:" date="Select" isActive={false} />
        </Grid>
      </DateWrapper>
      <Box mt="28px" position="relative">
        <Box position="absolute" top="-5px" left="0">
          <NavButton type="prev" />
        </Box>
        <Box position="absolute" top="-5px" right="0">
          <NavButton type="next" />
        </Box>
        <Grid gridTemplateColumns="1fr 1fr" gridGap="0 32px">
          <Month
            montLabel="November, 2018"
            dayLabels={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
          />
          <Month
            montLabel="November, 2018"
            dayLabels={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
          />
        </Grid>
      </Box>
      <Box mt="32px">
        <ResetDates />
      </Box>
    </StyledDatepicker>
  )
}

export default Datepicker
