import * as React from 'react'
import {render, fireEvent} from '../../testUtil'
import Day from '.'

test('should render disabled day', () => {
  const {container} = render(
    <Day date={new Date(2019, 2, 27, 0, 0, 0)} day="1" />,
    {},
    {isDateBlocked: () => true},
  )
  expect(container).toMatchSnapshot()
})

test('should render normal day', () => {
  const onDateSelect = jest.fn()
  const {container} = render(
    <Day date={new Date(2019, 2, 27, 0, 0, 0)} day="1" />,
    {},
    {onDateSelect},
  )
  expect(container).toMatchSnapshot()
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onDateSelect).toBeCalled()
})

test('should render active day', () => {
  const {container} = render(
    <Day date={new Date(2019, 2, 27, 0, 0, 0)} day="1" />,
    {},
    {isDateSelected: () => true},
  )
  expect(container).toMatchSnapshot()
})

test('should render first or last active day', () => {
  const {container} = render(
    <Day date={new Date(2019, 2, 27, 0, 0, 0)} day="1" />,
    {},
    {isFirstOrLastSelectedDate: () => true},
  )
  expect(container).toMatchSnapshot()
})

test('should execute onDateHover callback', () => {
  const onDateHover = jest.fn()
  const {container} = render(
    <Day date={new Date(2019, 2, 27, 0, 0, 0)} day="1" />,
    {},
    {onDateHover, isDateHovered: () => true},
  )
  // @ts-ignore
  fireEvent.mouseEnter(container.firstChild)
  expect(onDateHover).toBeCalled()
})
