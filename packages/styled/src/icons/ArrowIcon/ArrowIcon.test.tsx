import React from 'react'
import {render} from 'react-testing-library'
import ArrowIcon from '.'

test('should match snapshot', () => {
  const {container} = render(<ArrowIcon height="14px" width="14px" iconColor="red" />)
  expect(container).toMatchSnapshot()
})

test('should be facing to the left', () => {
  const {container} = render(
    <ArrowIcon direction="left" height="14px" width="14px" iconColor="red" />,
  )
  expect(container).toMatchSnapshot()
})

test('should be facing to the right', () => {
  const {container} = render(
    <ArrowIcon direction="right" height="14px" width="14px" iconColor="red" />,
  )
  expect(container).toMatchSnapshot()
})

test('should be facing to the down', () => {
  const {container} = render(
    <ArrowIcon direction="down" height="14px" width="14px" iconColor="red" />,
  )
  expect(container).toMatchSnapshot()
})

test('should be facing to the up', () => {
  const {container} = render(
    <ArrowIcon direction="up" height="14px" width="14px" iconColor="red" />,
  )
  expect(container).toMatchSnapshot()
})
