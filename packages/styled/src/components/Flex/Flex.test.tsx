import React from 'react'
import {render} from '../../testUtil'
import Flex from '.'

test('should match snapshot', () => {
  const {container} = render(
    <Flex
      height="50px"
      width="50px"
      gridArea="test"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flexWrap="wrap"
      m="30px"
    >
      <div>test1</div>
      <div>test2</div>
      <div>test3</div>
      <div>test4</div>
      <div>test5</div>
    </Flex>,
  )
  expect(container).toMatchSnapshot()
})
