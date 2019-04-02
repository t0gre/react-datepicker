import * as React from 'react'
import {render} from 'react-testing-library'
import CaretIcon from '.'

test('should match snapshot', () => {
  const {container} = render(<CaretIcon height="30px" width="30px" color="red" />)
  expect(container).toMatchSnapshot()
})

test('should be facing to the left', () => {
  const {container} = render(<CaretIcon height="30px" width="30px" color="red" direction="left" />)
  expect(container).toMatchSnapshot()
})

test('should be facing to the right', () => {
  const {container} = render(<CaretIcon height="30px" width="30px" color="red" direction="right" />)
  expect(container).toMatchSnapshot()
})

test('should be facing down', () => {
  const {container} = render(<CaretIcon height="30px" width="30px" color="red" direction="down" />)
  expect(container).toMatchSnapshot()
})

test('should be facing up', () => {
  const {container} = render(<CaretIcon height="30px" width="30px" color="red" direction="up" />)
  expect(container).toMatchSnapshot()
})
