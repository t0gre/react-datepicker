import * as React from 'react'
import {render} from 'react-testing-library'
import SelectedDate from '.'

test('should be unactive', () => {
  const {container} = render(<SelectedDate title="test" isActive={false} date="15.10.2018" />)
  expect(container).toMatchSnapshot()
})

test('should be active', () => {
  const {container} = render(<SelectedDate isActive title="test" date="15.10.2018" />)
  expect(container).toMatchSnapshot()
})
