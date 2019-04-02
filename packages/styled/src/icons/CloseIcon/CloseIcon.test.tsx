import * as React from 'react'
import {render} from 'react-testing-library'
import CloseIcon from '.'

test('should match snapshot', () => {
  const {container} = render(<CloseIcon height="30px" width="30px" color="red" />)
  expect(container).toMatchSnapshot()
})

test('should get className', () => {
  const {container} = render(<CloseIcon height="30px" width="30px" color="red" className="test" />)
  expect(container).toMatchSnapshot()
})
