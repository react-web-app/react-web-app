# React Web App

Simple starter kit for building web apps using [React], [Redux], [React Router] and [Bootstrap] - [Sass]. [Webpack], [Babel], [ESLint], [Jest] and [Enzyme] are preconfigured so you can focus on writing code.


<!-- TOC depthFrom:2 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Getting Started](#getting-started)
	- [Installation](#installation)
	- [Development](#development)
	- [Testing](#testing)
	- [Production](#production)
- [Documentation](#documentation)
	- [What's Included](#whats-included)
	- [Directory Structure](#directory-structure)

<!-- /TOC -->


## Getting Started

### Installation

[Download] this repo, extract it to some folder, say `my-app`, and run:

```bash
cd my-app
npm install
```

### Development

Run this to start the development server:

```bash
npm start
```

Open http://localhost:3000/ to see your app in browser.

### Testing

Run this to test your app:

```bash
npm test
```

Run this to generate coverage report:

```bash
npm run coverage
```

Coverage report will be placed inside the `coverage` folder.

### Production

Run this to build and optimize your app for production:

```bash
npm run build
```

Compiled files will be placed inside the `build` folder.

Run this to serve your build:

```bash
npm run serve
```

Open http://localhost:5000/ to see your app in browser.


## Documentation

### What's Included

##### Libraries

| Name | Version | Description |
| :--- | :--- | :--- |
| [React] | 16 | Main library |
| [Redux] | 3 | State management |
| [React Router] | 4 | Routing |
| [Bootstrap] - [Sass] | 4 | Styling |

##### Tools

| Name | Version | Description |
| :--- | :--- | :--- |
| [Webpack] | 3 | Compiles and bundles assets |
| [Babel] | 6 | ES6 and JSX compiler |
| [ESLint] | 3 | Linting |
| [Jest] | 20 | Testing |
| [Enzyme] | 3 | Testing utility for React |

Webpack, Babel and ESLint are configured using [webpack-setup].

##### Commands

| Command | Description |
| :--- | :--- |
| `npm start` | Starts development server at http://localhost:3000/ |
| `npm test` | Runs tests |
| `npm run coverage` | Generates test coverage report in `coverage` directory |
| `npm run build` | Builds app to `build` directory |
| `npm run serve` | Serves `build` directory at http://localhost:5000/ |
| `npm run clean` | Removes `build` and `coverage` directories |

### Directory Structure

This is the initial directory structure:

```
my-app
├── app
│   ├── App/
│   ├── Counter/
│   ├── styles/
│   ├── index.html
│   ├── index.js
│   ├── reducers.js
│   └── store.js
├── config/
├── public
│   └── favicon.ico
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

#### `app`

`app` directory contains the source code of your app. The main entry point for your app is `app/index.js`. Styles can be placed inside `app/styles` directory. Paths to compiled `js` and `css` files will be automatically injected into `app/index.html`.

#### `build`

`build` directory is created when you run `npm run build`. It contains the compiled output of your app which can be run by a browser.

#### `config`

`config` directory contains your app's config files. Webpack config is in `config/webpack.js` and Jest config is in `config/jest.js`. Babel and ESLint config is inside `package.json`.

#### `coverage`

`coverage` directory is created when you run `npm run coverage`. It contains the coverage report generated by Jest.

#### `public`

 Static files like `favicon.ico`, `robots.txt` etc., can be placed inside `public` directory. Contents of this directory are copied to the `build` directory.

#### `package.json`

`package.json` contains the list of scripts and libraries required to build and run your app. It also contains Babel and ESLint config under `"babel"` and `"eslintConfig"` keys respectively.


[Download]: https://github.com/react-web-app/react-web-app/archive/master.zip
[React]: https://reactjs.org
[Redux]: http://redux.js.org/
[React Router]: https://reacttraining.com/react-router/web
[Bootstrap]: https://getbootstrap.com
[Sass]: http://sass-lang.com/
[Webpack]: https://webpack.js.org/
[Babel]: https://babeljs.io/
[ESLint]: https://eslint.org/
[Jest]: https://facebook.github.io/jest/
[webpack-setup]: https://github.com/marella/webpack-setup
[Enzyme]: http://airbnb.io/enzyme/
