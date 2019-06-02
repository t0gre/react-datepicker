import * as React from 'react'
import {render, fireEvent} from '../../testUtil'
import ResetDates from '.'

test('should match snapshot', () => {
  const {container} = render(<ResetDates rtl={false} text="Reset dates" onResetDates={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should render rtl variant', () => {
  const {container} = render(<ResetDates rtl text="Reset dates" onResetDates={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should execute onClick callback', () => {
  const onResetDates = jest.fn()
  const {container} = render(
    <ResetDates rtl={false} text="Reset dates" onResetDates={onResetDates} />,
  )
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onResetDates).toHaveBeenCalled()
  // @ts-ignore
  fireEvent.mouseUp(container.firstChild)
})
