import React from 'react'
import {render} from 'react-testing-library'
import CalendarIcon from '.'

test('snapshot', () => {
  const {container} = render(<CalendarIcon height="30px" width="30px" color="red" />)
  expect(container).toMatchSnapshot()
})
