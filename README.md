This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# I want to start this procedure from create-react-app

1. create project with ts

```sh
$ npx create-react-app app --typescript
```

2. add add prettier, precommit

```sh
$ yarn add -D prettier husky lint-staged
```

3. add stylelint

```sh
$ yarn add -D stylelint stylelint-order stylelint-config-rational-order stylelint-config-prettier prettier-stylelint
```

`.stylelintrc.js`

```js
module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  extends: [
    'stylelint-config-rational-order',
    './node_modules/prettier-stylelint/config.js',
    'stylelint-config-prettier',
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
  },
  ignoreFiles: [
    '**/node_modules/**',
    'src/styles/**'
  ],
};
```

4. add eslint packages

- eslint
- react hooks
- for ts
- jest
- es
- prettier

```sh
$ npx install-peerdeps --dev eslint-config-airbnb

$ yarn add -D eslint-plugin-react-hooks \
@typescript-eslint/eslint-plugin @typescript-eslint/parser \
eslint-plugin-jest \
eslint-plugin-prefer-arrow \
eslint-config-prettier eslint-plugin-prettier
```

5. add eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    '__DEV__': true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'prettier',
    'prefer-arrow',
    'react',
    'react-hooks'
  ],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx']
      }
    },
    react: {
      version: 'detect'
    }
  },
  rules: {
    // eslint official
    'newline-before-return': 'error',
    'no-console': 'warn',
    'require-yield': 'error',

    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-member-accessibility': 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // prefer-arrow
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false
      }
    ],

    // react
    'react/jsx-filename-extension': [1, {extensions: ['jsx', 'tsx'] }],
    // 'react/jsx-one-expression-per-line': 'none',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',

    // react hooks
    'react-hooks/rules-of-hooks': 'error',

    // import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/prefer-default-export': 'off',

    // prettier
    'prettier/prettier': [
      'error', {
        bracketSpacing: true,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false
      }
    ]
  }
};
```

6. change browser list

```json
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
