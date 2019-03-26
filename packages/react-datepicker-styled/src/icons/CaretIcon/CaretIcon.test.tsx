import * as React from 'react'
import {render} from 'react-testing-library'
import CaretIcon from '.'

test('snapshot', () => {
  const {container} = render(<CaretIcon height="30px" width="30px" color="red" />)
  expect(container).toMatchSnapshot()
})

test('direction - left', () => {
  const {container} = render(<CaretIcon height="30px" width="30px" color="red" direction="left" />)
  expect(container).toMatchSnapshot()
})
