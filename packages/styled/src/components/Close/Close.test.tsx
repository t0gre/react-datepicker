import React from 'react'
import {render, fireEvent} from '../../testUtil'
import CloseModal from '.'

test('should match snapshot', () => {
  const {container} = render(<CloseModal rtl={false} onClick={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should render rtl variant', () => {
  const {container} = render(<CloseModal rtl={false} onClick={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should execute callback', () => {
  const onClick = jest.fn()
  const {container} = render(<CloseModal rtl={false} onClick={onClick} />)
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onClick).toHaveBeenCalled()
})
