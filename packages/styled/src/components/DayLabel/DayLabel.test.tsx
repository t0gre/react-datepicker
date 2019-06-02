import * as React from 'react'
import {render} from '../../testUtil'
import DayLabel from '.'

test('should match snapshot', () => {
  const {container} = render(<DayLabel label="Test" />)
  expect(container).toMatchSnapshot()
})
