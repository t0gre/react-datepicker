import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, color} from '@storybook/addon-knobs'
import RedoIcon from '.'

storiesOf('Components/Icons', module).add('RedoIcon', () => (
  <RedoIcon
    color={color('Color', '#000')}
    height={text('Height', '30px')}
    width={text('Width', '30px')}
  />
))
