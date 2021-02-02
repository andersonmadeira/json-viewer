# Contributing

Thanks for your interest in contributing to `json-viewer`! :)

If you're looking into contributing to this project checkout [these issues](https://github.com/andersonmadeira/json-viewer/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22+label%3AUp-for-Grabs)

## Getting started

**Prerequisites**: Node.js v12+, Yarn 1.22+

After cloning this repo, run:

```bash
yarn
```

then start the app with

```bash
yarn start
```

### Editor

We strongly suggest using [Visual Studio Code](https://code.visualstudio.com/) with the following extensions installed:

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

After opening this project for the first time, you'll be prompted to install those extensions, please do so.

Those plugins should read the already existing config files in this repo and configure themselves automatically.

### Code Conventions

- Make sure to keep all the components intended for reuse in the `components` directory and pay attention to the folder structure convention found there:

  - `styles.ts` for styling
  - `types.ts` for type definitions
  - `index.ts(x)` for the components themselves

- Use the `styled` strategy as much as possible when styling your components

- `testing-library` for testing in the codebase

- When styling your components, please isolate as much css colors as you can in the existing `Theme` definition

## Request feature or report a bug

Before opening a new issue, please make sure there's no equivalent issue already open [here](https://github.com/andersonmadeira/json-viewer/issues)

If you have any idea of new feature of even want to report a bug, please address the following guidelines:

- Add a descriptive title including the component name or context in brackets, e.g. `[Button] Button is not updating label as expected`
- Describe what is the current issue and what is the expected behavior
- Attach images to illustrate the issue if possible
- Include the version of this repo (commit or release) and browser information where the issue was found

## How to submit changes

1. Create a local feature branch off of the `develop` branch and switch to it
1. Write your changes
1. Make sure you've setup your editor for appropriate linting and formatting
1. Write tests for your changes
1. Commit your code with a descriptive message. If your changes resolve an existing issue, please include "Fixes #123" or "Closes #321" on a newline, with the correct number of the issue.
1. Create a new pull request
1. Fill the PR form as instructed
1. When addressing feedback, push additional commits instead of overwriting or squashing. Be descriptive in your commit messages: prefer "fix style colors" to "address someone elses review" because the former provides better context

## Style guides

### Commit messages

Please follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0)

### Styling

Use `emotion/styled` as CSS-in-JS strategy

### JavaScript

Style is enforced using [eslint](https://eslint.org/) with the configuration defined in the `.eslintrc` file.

Here are other guidelines:

- Variables and properties should use lower camel case capitalization
- Any non-trivial conditions should be assigned to a descriptive variable. Ex.: if (isAdminUser)

### React

- Always prefer functional components
- Prefer named exports over default
- Use camelCase for prop names
