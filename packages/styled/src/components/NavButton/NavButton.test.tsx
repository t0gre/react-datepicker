import * as React from 'react'
import {render, fireEvent} from 'react-testing-library'
import NavButton from '.'

test('should match snapshot - prev month', () => {
  const {container} = render(<NavButton vertical={false} type="prev" onClick={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should match snapshot - next month', () => {
  const {container} = render(<NavButton vertical={false} type="next" onClick={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should match snapshot - prev month vertical', () => {
  const {container} = render(<NavButton vertical type="prev" onClick={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should match snapshot - next month vertical', () => {
  const {container} = render(<NavButton vertical type="next" onClick={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should execute onClick callback', () => {
  const onClick = jest.fn()
  const {container} = render(<NavButton vertical={false} type="next" onClick={onClick} />)
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onClick).toHaveBeenCalled()
  // @ts-ignore
  fireEvent.mouseUp(container.firstChild)
  expect(container).toMatchSnapshot()
})
