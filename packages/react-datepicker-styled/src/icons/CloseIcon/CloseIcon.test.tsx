import * as React from 'react'
import {render} from 'react-testing-library'
import CloseIcon from '.'

test('snapshot', () => {
  const {container} = render(<CloseIcon height="30px" width="30px" color="red" />)
  expect(container).toMatchSnapshot()
})
