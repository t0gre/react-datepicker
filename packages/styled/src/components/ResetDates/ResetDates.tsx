import React, {useRef} from 'react'
import styled from 'styled-components'
import RedoIcon from '../../icons/RedoIcon'
import Text from '../Text'

const StyledReactDates = styled('button')`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  background: transparent;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

interface onResetDatesProps {
  onResetDates(): void
}

function ResetDates({onResetDates}: onResetDatesProps) {
  const ref = useRef<HTMLButtonElement>(null)

  function handleMouseUp() {
    if (ref && ref.current) {
      ref.current.blur()
    }
  }

  return (
    <StyledReactDates onClick={onResetDates} onMouseUp={handleMouseUp} ref={ref}>
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
    </StyledReactDates>
  )
}

export default ResetDates
