#Testbirds - Frontend Development Challenge

Application was developed by using vite-react-ts template.
The main purpose was to focus on the main functionality of the task.

## vite-react-ts-template

> extended version of [vite](https://vitejs.dev/)'s official `react-ts` template.

additional features:

- [eslint](https://eslint.org/) for linting.
- [jest](https://jestjs.io/) + [testing-library](https://testing-library.com/) for testing.
- [prettier](https://prettier.io/) + (optional) [pre-commit](https://pre-commit.com/) hook for code formatting.
- [github actions](https://github.com/features/actions) for continuous integration.
- [browserslist](https://github.com/browserslist/browserslist) + [autoprefixer](https://github.com/postcss/autoprefixer).

## Install

```sh
# install dependencies.
npm i
```

## Develop

```sh
npm run dev
```

## Build

```sh
npm run build
```

## Test

```sh
npm test

# run jest in watch mode.
npm run test:watch

# collect coverage.
npm run test:coverage
```

## Lint

```sh
npm run lint
```

## Format

```sh
npm run fmt
```

There is an optional [pre-commit](https://pre-commit.com/) hook to format code on commit. You need to install and activate it in order to use it.

```sh
# (macos) install via brew.
brew install pre-commit
# (any system) install via python's pip.
pip3 install pre-commit

# activate the hook.
pre-commit install

# when updating prettier, update the hook.
pre-commit autoupdate
```

This template uses [pre-commit](https://pre-commit.com/) over [lint-staged](https://github.com/okonet/lint-staged) due to the author's familiarity with it and its great support for other programming languages.

## Preview

Serves the content of `./dist` over a local http server.

```sh
npm run preview
```

## Recipes

Recipes for integrating common libraries can be found on separate `recipe/*` branches.
