# Politech Weirdness

#### 🚀 Built with [Nova](https://github.com/yawnch/nova)

## Getting Started

### Install project dependencies

- Requires [NodeJS](https://nodejs.org/en/) `>= 10`. [NVM](https://github.com/nvm-sh/nvm) is recommended.
- `npm install`

### Developing locally

#### `npm start`

Starts a local dev server at localhost:8080. The port can be customized by updating the `PORT` environment variable in `.env.local`.

#### `npm run storybook`

Starts a local Storybook server and opens it in your browser.

## Storybook

> [Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation

All new components should have an accompanying `.stories.mdx` file containing the story and documentation.

`npm run storybook`

## Plop

Use [Plop](https://plopjs.com/) to scaffold new components automatically. To add or modify plop templates, see `plopfile.js` and `config/plop/`. 

```
npx plop Component
npx plop Page
```

## Tech Stack

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [React Router](https://github.com/ReactTraining/react-router)
- [Styled Components](https://www.styled-components.com)
- [Webpack](https://webpack.js.org)
- [Babel](https://babeljs.io)
- [Plop](https://plopjs.com)
- [Storybook](https://storybook.js.org)
- [Amplitude](https://amplitude.com)
- [Sentry](https://sentry.io)
- [CircleCI](https://circleci.com)

## Coding Style

[Standard](https://standardjs.com/)

Coding style is enforced using ESLint. You can also manually run the linter using `npm run lint:fix`.

## License

[MIT](https://opensource.org/licenses/MIT)
