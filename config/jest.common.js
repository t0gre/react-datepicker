const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      extends: path.join(__dirname, '..', 'babel.config.js'),
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coveragePathIgnorePatterns: ['**/*.test.+(ts|tsx|js)', '**/*.stories.+(ts|tsx|js)'],
  roots: ['<rootDir>packages'],
  snapshotSerializers: ['jest-serializer-html'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
    'jest-runner-eslint/watch-fix',
  ],
}
