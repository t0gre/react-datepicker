import React from 'react'
import {render} from 'react-testing-library'
import ArrowIcon from '.'

test('matches snapshot', () => {
  const {container} = render(<ArrowIcon height="14px" width="14px" color="red" />)
  expect(container).toMatchSnapshot()
})

test('supports direction', () => {
  const {container} = render(<ArrowIcon direction="left" height="14px" width="14px" color="red" />)
  expect(container).toMatchSnapshot()
})
