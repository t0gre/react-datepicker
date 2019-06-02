import * as React from 'react'
import {render, fireEvent} from '../../testUtil'
import NavButton from '.'

test('should match snapshot - prev month', () => {
  const {container} = render(
    <NavButton ariaLabel="test" vertical={false} rtl={false} type="prev" onClick={jest.fn()} />,
  )
  expect(container).toMatchSnapshot()
})

test('should match snapshot - prev month rtl', () => {
  const {container} = render(
    <NavButton ariaLabel="test" rtl vertical={false} type="prev" onClick={jest.fn()} />,
  )
  expect(container).toMatchSnapshot()
})

test('should match snapshot - next month', () => {
  const {container} = render(
    <NavButton ariaLabel="test" vertical={false} rtl={false} type="next" onClick={jest.fn()} />,
  )
  expect(container).toMatchSnapshot()
})

test('should match snapshot - next month rtl', () => {
  const {container} = render(
    <NavButton ariaLabel="test" rtl vertical={false} type="next" onClick={jest.fn()} />,
  )
  expect(container).toMatchSnapshot()
})

test('should match snapshot - prev month vertical', () => {
  const {container} = render(
    <NavButton ariaLabel="test" vertical type="prev" rtl={false} onClick={jest.fn()} />,
  )
  expect(container).toMatchSnapshot()
})

test('should match snapshot - next month vertical', () => {
  const {container} = render(
    <NavButton ariaLabel="test" vertical type="next" rtl={false} onClick={jest.fn()} />,
  )
  expect(container).toMatchSnapshot()
})

test('should match snapshot - prev month vertical, rtl', () => {
  const {container} = render(
    <NavButton ariaLabel="test" vertical type="prev" rtl onClick={jest.fn()} />,
  )
  expect(container).toMatchSnapshot()
})

test('should match snapshot - next month vertical, rtl', () => {
  const {container} = render(
    <NavButton ariaLabel="test" vertical type="next" rtl onClick={jest.fn()} />,
  )
  expect(container).toMatchSnapshot()
})

test('should execute onClick callback', () => {
  const onClick = jest.fn()
  const {container} = render(
    <NavButton ariaLabel="test" vertical={false} rtl={false} type="next" onClick={onClick} />,
  )
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onClick).toHaveBeenCalled()
  // @ts-ignore
  fireEvent.mouseUp(container.firstChild)
  expect(container).toMatchSnapshot()
})
