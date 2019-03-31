import React from 'react'
import RedoIcon from '../../icons/RedoIcon'
import Text from '../Text'
import Flex from '../Flex'

interface onResetDatesProps {
  onResetDates(): void
}

function ResetDates({onResetDates}: onResetDatesProps) {
  return (
    <Flex role="button" onClick={onResetDates} alignItems="center">
      <RedoIcon height="14px" width="14px" color="58595B" />
      <Text
        ml="8px"
        mt="1px"
        lineHeight={1.18}
        fontFamily="Montserrat"
        fontSize="11px"
        color="#343132"
      >
        Reset dates
      </Text>
    </Flex>
  )
}

export default ResetDates
