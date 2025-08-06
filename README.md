# MyVueDesignSystem

This project is my ongoing goal to build a Vue 3‑powered design system and dashboard that demonstrates modern frontend engineering practices.
Built with `Vue 3` `PrimeVue`, `Tailwind CSS`, and `Storybook`, it aims to show how to create reusable, accessible UI components, document them effectively, and test them with `Vitest` and `Playwright`.

The dashboard will include responsive layouts, interactive charts, and CMS‑ready content areas, making it a solid example of how to structure and maintain scalable design systems for real‑world applications.

## Core Goals

- [x] Apply utility‑first styling using Tailwind CSS
- [ ] Build a reusable component library with PrimeVue
- [ ] Document components in Storybook with interactive controls
- [ ] Ensure quality with unit & E2E testing (Vitest + Playwright)
- [ ] Maintain accessibility (ARIA roles, keyboard navigation)
- [ ] Prepare for CI/CD with GitHub Actions

🚧 Status: Work in Progress – Actively developing and adding features regularly.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
