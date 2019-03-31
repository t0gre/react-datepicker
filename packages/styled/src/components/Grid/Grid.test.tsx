import React from 'react'
import {render} from 'react-testing-library'
import Grid from '.'

test('should match snapshot', () => {
  const {container} = render(
    <Grid
      gridTemplateColumns="repeat(6, 1fr)"
      gridTemplateRows="repeat(6, 1fr)"
      gridTemplateAreas={'"c1 c2 c3" "c4 c5 c6"'}
      gridGap="10px 10px"
      gridColumnGap="10px"
      gridRowGap="10px"
      justifyContent="initial"
      alignItems="initial"
    >
      <div>test1</div>
      <div>test2</div>
      <div>test3</div>
      <div>test4</div>
      <div>test5</div>
    </Grid>,
  )
  expect(container).toMatchSnapshot()
})
