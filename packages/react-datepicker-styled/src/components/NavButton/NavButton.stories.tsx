import React from 'react'
import {storiesOf} from '@storybook/react'
import {select} from '@storybook/addon-knobs'
import NavButton from '.'

const iconDirections = {
  left: 'left',
  right: 'right',
}

storiesOf('Components/s', module).add('NavButton', () => (
  <NavButton
    // @ts-ignore
    type={select('Type', iconDirections, 'left')}
  />
))
