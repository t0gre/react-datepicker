import * as React from 'react'
import {render, fireEvent} from 'react-testing-library'
import ResetDates from '.'

test('should match snapshot', () => {
  const {container} = render(<ResetDates text="Reset dates" onResetDates={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should execute onClick callback', () => {
  const onResetDates = jest.fn()
  const {container} = render(<ResetDates text="Reset dates" onResetDates={onResetDates} />)
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onResetDates).toHaveBeenCalled()
  // @ts-ignore
  fireEvent.mouseUp(container.firstChild)
})
