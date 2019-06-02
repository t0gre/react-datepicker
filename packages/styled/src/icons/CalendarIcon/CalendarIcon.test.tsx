import React from 'react'
import {render} from '@testing-library/react'
import CalendarIcon from '.'

test('should match snapshot', () => {
  const {container} = render(<CalendarIcon height="30px" width="30px" color="red" />)
  expect(container).toMatchSnapshot()
})

test('should get classname', () => {
  const {container} = render(
    <CalendarIcon height="30px" width="30px" color="red" className="test" />,
  )
  expect(container).toMatchSnapshot()
})
