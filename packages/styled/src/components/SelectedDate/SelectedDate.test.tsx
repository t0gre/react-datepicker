import * as React from 'react'
import {render} from 'react-testing-library'
import SelectedDate from '.'

test('should be unactive', () => {
  const {container} = render(
    <SelectedDate vertical={false} title="test" isActive={false} date="15.10.2018" />,
  )
  expect(container).toMatchSnapshot()
})

test('should be active', () => {
  const {container} = render(
    <SelectedDate isActive vertical={false} title="test" date="15.10.2018" />,
  )
  expect(container).toMatchSnapshot()
})

test('should render vertical variant', () => {
  const {container} = render(<SelectedDate vertical isActive title="test" date="15.10.2018" />)
  expect(container).toMatchSnapshot()
})
