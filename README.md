# Selby's React Template

React using Typescript, Next.js, and Storybook with auto formatting, commit linting, and some other helpful stuff (most listed below under Scripts & References)

## Scripts

- `npm run build`
  - Runs next build
- `npm run commit`
  - Commitizen can help you build your commit messages. Run after you have staged files
- `npm run format`
  - Formats code using prettier-eslint
- `npm run lint-staged`
  - Formats code using prettier-quick
- `npm start` or `npm run start`
  - Runs the app with `next start`
- `npm run storybook`
  - Runs storybook
- `npm run build-storybook`
  - Builds storybook
- `npm run dev`
  - Runs live dev server
- `npm test` or `npm run test`
  - Runs tests

## Getting started

```bash
git clone git@github.com/selbyk/react-template
cd react-template
npm install
npm run dev # run live dev server @ http://localhost:3000
npm run storybook # run storybook @ http://localhost:6006
```

## Contributing

1. All changes should be made to a feature branch

   * `git checkout -b feat/<NAME>` or `git checkout -b <COMMIT_TYPE>/<NAME>`

2. Commit messages should follow [conventional commits](https://www.conventionalcommits.org) guidelines
    * Make a change in some files
    * Stage them with `git add` or GUI of choice
    * Run `npm run commit` to help format your commit message
    * If the commit fails because of linting or tests run `npm run commit -- --retry` to retry with the same params after fixing the errors and staging the changes

3. Push your branch to GitHub and open a PR!


## References

Helpful guides & API docs

### Typescript

JavaScript with some flare

https://basarat.gitbooks.io/typescript/content/docs/getting-started.html
https://www.typescriptlang.org/docs/handbook/basic-types.html

### React

Front-end lib

https://reactjs.org/docs/getting-started.html

### Next.js

Tooling on top of react for nice things like SSR (e.g. `npm run dev`, `npm start`)

https://nextjs.org/docs

### Storybook

Component story manager for testing and development

https://storybook.js.org/docs/basics/introduction/

### Enzyme

Testing lib to simulate user interaction

https://airbnb.io/enzyme/docs/api/
https://github.com/mthuret/storybook-addon-specifications#getting-started

### Bulma

CSS framework

https://bulma.io/documentation/overview/