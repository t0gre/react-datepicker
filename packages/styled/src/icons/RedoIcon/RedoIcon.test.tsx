import * as React from 'react'
import {render} from 'react-testing-library'
import RedoIcon from '.'

test('should match snapshot', () => {
  const {container} = render(<RedoIcon height="30px" width="30px" color="red" />)
  expect(container).toMatchSnapshot()
})
