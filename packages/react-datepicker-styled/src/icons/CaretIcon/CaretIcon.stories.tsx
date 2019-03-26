import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, color, select} from '@storybook/addon-knobs'
import CaretIcon from '.'

const IconDirections = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down',
}

storiesOf('Components/Icons', module).add('CaretIcon', () => (
  <CaretIcon
    color={color('Color', '#000')}
    height={text('Height', '30px')}
    width={text('Width', '30px')}
    // @ts-ignore
    direction={select('Direction', IconDirections, 'right')}
  />
))
