# Contribution Guidelines

Styled System has a [Code of Conduct][]. Please review and help enforce this code of conduct to help
us foster an open and inclusive project.

[code of conduct]: ./CODE_OF_CONDUCT.MD

## How to Contribute

Feel free to contribute by opening and commenting on issues, helping answer questions, updating
docs, or opening a pull request. For quick bug fixes or PRs that address an open issue, feel free to
open a PR. If you'd like to suggest a new feature or change to the API, please open an issue for
discussion first.

## Pull Requests

To submit a pull request, follow these steps

1. Fork and clone this repo
2. Create a branch for your changes
3. Install dependencies with `yarn install && bootstrap`
4. Ensure tests are passing by running `yarn test`
5. If you're fixing a bug, it's recommended to write a failing test before writing any code
6. Make changes locally and commit them
7. Try to make sure tests still pass and that there's 100% coverage
8. Push your branch to origin
9. Open a pull request in this repository with a clear title and description and link to any
   relevant issues
10. Wait for a maintainer to review your PR

## Documentation

The documentation is in [README](./README.MD).

## Architecture

@datepicker-react is intentionally divided into two libraries, `@datepicker-react/styled`
(./packages/styled) and `@datepicker-react/hooks` (./packages/hooks). `@datepicker-react/hooks`
library contains hooks, which allows us to control the date picker. The second library
(`@datepicker-react/styled`) contains date picker components.

### Monorepo

This repo is set up as a monorepo using Yarn workspaces and Lerna.
