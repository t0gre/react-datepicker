import * as React from 'react'
import {render} from '../../testUtil'
import MonthLabel from '.'

test('should match snapshot', () => {
  const {container} = render(<MonthLabel label="Test" />)
  expect(container).toMatchSnapshot()
})
