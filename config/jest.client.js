// eslint-disable-next-line
const path = require('path')

module.exports = {
  // eslint-disable-next-line
  ...require('./jest.common'),
  displayName: 'dom',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [require.resolve('./setupTest.ts')],
  testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/coverage/', '/config/'],
}
