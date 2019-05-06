import * as React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Input from '.'

test('should render with icon', () => {
  const onClick = jest.fn()
  const {container, getByPlaceholderText} = render(
    <Input
      showCalendarIcon
      ariaLabel="startDate"
      id="startDate"
      placeholder="Placeholder"
      onClick={onClick}
      value=""
    />,
  )

  expect(container).toMatchSnapshot()
  getByPlaceholderText('Placeholder')
  // @ts-ignore
  fireEvent.focus(getByPlaceholderText('Placeholder'))
  expect(onClick).toHaveBeenCalled()
})

test('should render without icon', () => {
  const onClick = jest.fn()
  const {container} = render(
    <Input
      showCalendarIcon={false}
      ariaLabel="startDate"
      id="startDate"
      placeholder="Placeholder"
      onClick={onClick}
      value=""
    />,
  )

  expect(container).toMatchSnapshot()
})

test('should render with value', () => {
  const onClick = jest.fn()
  const {container, getByValue} = render(
    <Input
      showCalendarIcon={false}
      ariaLabel="startDate"
      id="startDate"
      placeholder="Placeholder"
      onClick={onClick}
      value="14/11/1992"
    />,
  )

  expect(container).toMatchSnapshot()
  getByValue('14/11/1992')
})
