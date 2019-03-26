import {configure, addDecorator} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /\.stories\.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withKnobs)

configure(loadStories, module)
