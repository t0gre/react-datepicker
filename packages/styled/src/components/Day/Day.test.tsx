import * as React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Day from '.'

test('should render disabled day', () => {
  const {container} = render(
    <Day
      disabled
      isActive={false}
      isStartOrEnd={false}
      date={new Date()}
      day="1"
      onDaySelect={jest.fn()}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render normal day', () => {
  const onDaySelect = jest.fn()
  const {container} = render(
    <Day
      disabled={false}
      isActive={false}
      isStartOrEnd={false}
      date={new Date()}
      day="1"
      onDaySelect={onDaySelect}
    />,
  )
  expect(container).toMatchSnapshot()
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onDaySelect).toBeCalled()
})

test('should render active day', () => {
  const {container} = render(
    <Day
      isActive
      disabled={false}
      isStartOrEnd={false}
      date={new Date()}
      day="1"
      onDaySelect={jest.fn()}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('should render first or last active day', () => {
  const {container} = render(
    <Day
      isStartOrEnd
      isActive={false}
      disabled={false}
      date={new Date()}
      day="1"
      onDaySelect={jest.fn()}
    />,
  )
  expect(container).toMatchSnapshot()
})
