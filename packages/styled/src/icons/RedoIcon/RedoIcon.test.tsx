import * as React from 'react'
import {render} from '@testing-library/react'
import RedoIcon from '.'

test('should match snapshot', () => {
  const {container} = render(<RedoIcon height="30px" width="30px" color="red" />)
  expect(container).toMatchSnapshot()
})

test('should get className', () => {
  const {container} = render(<RedoIcon height="30px" width="30px" color="red" className="test" />)
  expect(container).toMatchSnapshot()
})
