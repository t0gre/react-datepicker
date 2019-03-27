import React from 'react'
import Text from '../Text'

interface MonthLabelProps {
  label: string
}

const MonthLabel = ({label}: MonthLabelProps) => {
  return (
    <Text fontFamily="Montserrat" fontSize="11px" fontWeight={500} color="#929598">
      {label}
    </Text>
  )
}

export default MonthLabel
