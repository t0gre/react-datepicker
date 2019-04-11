import * as React from 'react'
import {render, fireEvent} from 'react-testing-library'
import NavButton from '.'

test('should match snapshot - left direction', () => {
  const {container} = render(<NavButton type="prev" onClick={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should match snapshot - right direction', () => {
  const {container} = render(<NavButton type="next" onClick={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should execute onClick callback', () => {
  const onClick = jest.fn()
  const {container} = render(<NavButton type="next" onClick={onClick} />)
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onClick).toHaveBeenCalled()
  // @ts-ignore
  fireEvent.mouseUp(container.firstChild)
  expect(container).toMatchSnapshot()
})
