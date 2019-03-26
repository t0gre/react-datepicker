const {rootDir, moduleFileExtensions} = require('./jest.common')

module.exports = {
  rootDir,
  moduleFileExtensions,
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['**/*.+(ts|tsx|js)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
    '/coverage/',
    '/config/',
    'commitlint.config.js',
  ],
}
