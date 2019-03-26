import * as React from 'react'
import {render} from 'react-testing-library'
import Demo from '.'

test('test', () => {
  const {container} = render(<Demo />)
  expect(container).toMatchSnapshot()
})
