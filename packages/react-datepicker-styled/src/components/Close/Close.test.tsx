import React from 'react'
import {render} from 'react-testing-library'
import CloseModal from '.'

test('should match snapshot', () => {
  const {container} = render(<CloseModal />)
  expect(container).toMatchSnapshot()
})
