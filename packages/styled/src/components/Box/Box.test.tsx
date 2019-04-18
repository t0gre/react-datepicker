import React from 'react'
import {render} from 'react-testing-library'
import Box from '.'

test('should match snapshot', () => {
  const {container} = render(
    <Box
      gridArea="test"
      height="150px"
      width="150px"
      p="10px"
      position="relative"
      top="10px"
      left="15px"
      right="20px"
      bottom="30px"
      zIndex={1}
    >
      <div>test1</div>
      <div>test2</div>
      <div>test3</div>
      <div>test4</div>
      <div>test5</div>
    </Box>,
  )
  expect(container).toMatchSnapshot()
})
