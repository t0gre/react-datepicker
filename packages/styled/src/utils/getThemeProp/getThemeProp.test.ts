import getThemeProp from './getThemeProp'

test('should return default prop', () => {
  expect(getThemeProp('primaryColor', 'red', undefined)).toBe('red')
  expect(getThemeProp('primaryColor', 'red', {})).toBe('red')
  expect(getThemeProp('primaryColor', 'red', {reactDatepicker: {}})).toBe('red')
  expect(getThemeProp('primaryColor', 'red', {reactDatepicker: {primaryColor: 'blue'}})).toBe('red')
})

test('should return theme prop', () => {
  expect(
    getThemeProp('primaryColor', 'red', {reactDatepicker: {colors: {primaryColor: 'blue'}}}),
  ).toBe('blue')
})
