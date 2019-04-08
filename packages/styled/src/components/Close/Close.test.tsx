import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import CloseModal from '.'

test('should match snapshot', () => {
  const {container} = render(<CloseModal onClick={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

test('should execute callback', () => {
  const onClick = jest.fn()
  const {container} = render(<CloseModal onClick={onClick} />)
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onClick).toHaveBeenCalled()
})
