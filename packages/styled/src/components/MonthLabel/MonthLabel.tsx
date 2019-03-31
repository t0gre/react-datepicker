import React from 'react'
import Text from '../Text'

interface MonthLabelProps {
  label: string
}

const MonthLabel = ({label}: MonthLabelProps) => {
  return (
    <Text
      fontFamily="Montserrat"
      fontSize="14px"
      fontWeight={600}
      lineHeight={1.57}
      color="#343132"
    >
      {label}
    </Text>
  )
}

export default MonthLabel
