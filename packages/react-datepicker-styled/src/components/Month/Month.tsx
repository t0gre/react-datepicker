import React from 'react'
import MonthLabel from '../MonthLabel'
import DayLabel from '../DayLabel'
import Flex from '../Flex'
import Grid from '../Grid'
import Day from '../Day'

interface MonthProps {
  montLabel: string
  dayLabels: string[]
}

const Month = ({montLabel, dayLabels}: MonthProps) => {
  return (
    <div>
      <Flex justifyContent="center" mb="28px">
        <MonthLabel label={montLabel} />
      </Flex>
      <Grid gridTemplateColumns="repeat(7, 36px)">
        {dayLabels.map(day => (
          <Flex key={day} justifyContent="center" mb="16px">
            <DayLabel label={day} />
          </Flex>
        ))}
      </Grid>
      <Grid gridTemplateColumns="repeat(7, 36px)">
        <div />
        <div />
        <div />
        <Day isActive={false} day="1" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="2" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="3" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="4" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="5" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="6" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="7" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="8" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="9" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="10" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="11" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="12" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="13" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="14" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="15" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="16" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="17" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="18" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="19" disabled={true} isStartOrEnd={false} />
        <Day isActive={false} day="20" disabled={false} isStartOrEnd={false} />
        <Day isActive={false} day="21" disabled={false} isStartOrEnd={false} />
        <Day isActive={false} day="22" disabled={false} isStartOrEnd={false} />
        <Day isActive={false} day="23" disabled={false} isStartOrEnd={false} />
        <Day isActive={false} day="24" disabled={false} isStartOrEnd={false} />
        <Day isActive={false} day="25" disabled={false} isStartOrEnd={false} />
        <Day isActive={false} day="26" disabled={false} isStartOrEnd={false} />
        <Day isActive={false} day="27" disabled={false} isStartOrEnd={false} />
        <Day isActive={true} day="28" disabled={false} isStartOrEnd={true} />
        <Day isActive={true} day="29" disabled={false} isStartOrEnd={false} />
        <Day isActive={true} day="30" disabled={false} isStartOrEnd={false} />
        <Day isActive={true} day="31" disabled={false} isStartOrEnd={true} />
      </Grid>
    </div>
  )
}

export default Month
