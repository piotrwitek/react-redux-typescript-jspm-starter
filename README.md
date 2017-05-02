# _React / Redux / TypeScript / JSPM - Starter_
#### __based on JSPM (SystemJS - ES module loader + bundling with Rollup)__

> ##### Futuristic, bundle-free development environment for building _Component-Driven SPA with React, Redux and TypeScript_ - utilizing power of Static Type-checking, ES.Next, CSS-Modules, Hot-reload, in-browser transpilation, tree-shaking - powered by JSPM (SystemJS & Rollup with tree-shaking)

### Learn more about static typing with TypeScript in "React & Redux" apps here:
> A comprehensive guide to static typing "React & Redux" apps using TypeScript  
> *https://github.com/piotrwitek/react-redux-typescript-guide*

### Alternative Webpack-2 powered Starter with react-hot-loader, optimized for performance:
> *https://github.com/piotrwitek/react-redux-typescript-webpack-starter*

### Demo:  
> *http://piotrwitek.github.io/react-redux-typescript-starter-kit/*

---

## Table of Contents  
1. [Innovations](#innovations)  
2. [Features](#features)  
3. [Roadmap](#roadmap)  
4. [Installation](#installation)  
5. [Project Structure](#project-structure)  
6. [Workflows Guide](#workflows-guide)  
7. [CLI Commands](#cli-commands)  

---

## Innovations

### RAPID-SPEED DEVELOPMENT WORKFLOW - no bundling!
No module bundling during development, instead loading source files (.ts/.tsx) directly in the browser (using [plugin-typescript](https://github.com/frankwallis/plugin-typescript)). Type-checking is disabled for speed and delegated to another process.

### DELEGATED TYPE-CHECKING
Type-checking is delegated to a seperate process using following options:
- **CLI** - TypeScript compiler running in CLI ([instructions](#cli-workflow))  
- **Editor/IDE** - TypeScript Language Service providing Intellisense (e.g. Webstorm, VS Code, Atom, Sublime Text, alm.tools and more...)

**NOTE:** There are two seperate **tsconfig** needed - one for type-checking during development and the other for sources compilation to create production bundle:
- [tsconfig for development type-checking](https://github.com/piotrwitek/react-redux-typescript-starter-kit/blob/a00c1b5854c36ea4d31fa1255ce920134bfc3855/src/tsconfig.json)  
- [tsconfig for building production bundle](https://github.com/piotrwitek/react-redux-typescript-starter-kit/blob/a00c1b5854c36ea4d31fa1255ce920134bfc3855/jspm.config.js#L129)  

### STRICT NULL CHECKS
Enable strictNullChecks with noImplicitAny (compiler flags), to get Non-nullable Types (v2.0) and Smarter Type Inference (v2.1) ([Source](https://blogs.msdn.microsoft.com/typescript/2016/11/08/typescript-2-1-rc-better-inference-async-functions-and-more/)) which greatly increase your TypeScript experience.

### HOT-RELOAD THAT SCALE
Local dev-server with hot-reload out-of-the-box (using [systemjs-hot-reloader](https://github.com/capaj/systemjs-hot-reloader)).

**Scaling:** - this workflow can handle very large projects with thousands of modules without slowing down, basically because it re-import and re-evaluate only those modules that has changed in the browser using SystemJS Module Loader.__
> __More on differences with Webpack workflow__ from real project use-case by [@jonaskello](https://github.com/jonaskello)  https://github.com/Microsoft/TypeScript/issues/1564#issuecomment-252903932

### CLI WORKFLOW
Most often your team is using different Editors/IDE's so you'll need to have a common way across the team to run type-checking using  right version of TypeScript compiler for consistent results and avoid version mismatch issues.  

Provided npm commands *(*JS emit is disabled to not emit files for type-checking)*:
- `tsc -p src --watch` - fast incremental type-checking in watch mode  
- `tsc -p src` - single thorough check  

### ASYNC/AWAIT/GENERATORS - transpilation to ES5
TypeScript natively support "async & generator functions" transformations without any other tools when targeting ES5:  
- Async/Await - TS v2.1 provide native downlevel transformation to ES5 ([Source](https://github.com/Microsoft/TypeScript/pull/9175))  
- Generators - TS v2.3 provide native downlevel transformation to ES5 ([Source](https://github.com/Microsoft/TypeScript/pull/12346))  

### TESTING WITH TYPESCRIPT
- Running tests without transpilation with `ts-node` runtime (CLI command `npm test`)
- Test harness using ([jest](https://github.com/facebook/jest))
- Jest Snapshot Testing in TypeScript

### AUTOMATIC BUILD SCRIPTS
Fully automatic build script will generate your "vendor bundle" by parsing and extracting JSPM dependencies from package.json. No manual configuration.

### OPTIMIZED JSPM LOADING SPEED
When trying to load multiple external dependencies as seperate calls it can slow down page reload in the browsers.
Splitting external dependencies to a "vendor bundle" (from `node_modules/` dependencies)can speed up page reload significantly by minimizing requests count.

Test reload speed improvement using following simple test procedure:  
1. run `npm run dev:unbundle` -> open network tab in chrome dev tools -> reload the page -> check logged results  
2. run `npm run dev:bundle` -> open network tab in chrome dev tools -> reload page -> compare logged results with previous  

---

## Features
- PRODUCTION-WORKFLOW - cross-platform npm scripts for production bundling & deployment, github-hooks, linter, test runner etc.
- TYPESAFE-API-CALLS - type safety of HTTP API calls (responses/requests) - stop checking for API docs and let your tools guide you
- REACT-ROUTER - `react-router-redux` to store routing history in redux state (Time-Travel Debugging)
- REDUX-DEV-TOOLS - Redux DevTools with [chrome-extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- BEM & ITCSS - BEM with Inverted Triangle conventions to give meaning and context to CSS classes
- CSS-MODULES - locally scoped CSS, encapsulated as ES6 Modules (using [csjs](https://github.com/rtsao/csjs#faq))
> __EXAMPLE:__ [Consumer Component](src/containers/css-modules-container/index.tsx) and [CSS Module in TypeScript](src/containers/css-modules-container/styles.tsx)  

#### React Best Practices & Optimizations
- no mixins -> use ES6 style PureRenderMixin with PureComponent
- no ref strings -> use ref callbacks
- no method binding -> use ES Class Fields
- no function/objects instantiation in render method -> instantiate in outer scope and use references
- render big collections in separate, dedicated components -> no unfortunate re-renders when other props changes
- don't use array index as key property -> use item unique id property to eliminate bugs
- remove `bindActionCreators` boilerplate using object literal with actions instead of `mapDispatchToProps` function [issue #32](/../../issues/32)

#### React-Redux Patterns
- Flux Standard Actions for Redux - https://github.com/acdlite/redux-actions
- Redux Reducer Modules - https://github.com/erikras/ducks-modular-redux

#### JSPM / System.js / Rollup
- JSPM 0.17.X - production ready set-up with best-practices from real-world projects
- optimized loading speed by utilizing `vendor` dev-bundle (read below)
- using Rollup for bundling and tree-shaking optimizations
- bundles for production - seperate vendor & app bundles
- importing and bundling CSS / SCSS / JSON / Image files using plugins

---

## Roadmap
- Redux integration testing
- Testing with Enzyme (JSDOM)
- Testing with Snapshots

---

## Installation

#### Prerequisites
- Node.js `>=4.0.0`
- Optional: Global [JSPM](http://jspm.io/) installation for CLI commands - `npm i -g jspm`
- you can use Yarn

```
// Clone repo
git clone https://github.com/piotrwitek/react-redux-typescript-starter-kit.git my-project-folder

// Install dependencies
npm install

// Install JSPM packages and create vendor dependencies bundle
npm run init

// Run development server with HMR
npm run dev
```

---

## Project Structure

```
.
├── assets                      # static assets copied to dist folder
|   ├── index.html              # index.html configured for production use
|   ├── loader-styles.css       # css app loading indicator
|   └── shim.min.js             # core-js polyfill
├── dist                        # production build output
├── scripts                     # build and workflow scripts
├── src                         # app source code
│   ├── components              # global reusable presentational components
│   ├── containers              # container components providing redux context
│   ├── layouts                 # components defining page layouts
│   ├── services                # modules abstracting communication with web services
│   ├── store                   # modules containing redux modules (reducers/constants/action creators)
│   ├── types                   # custom TypeScript definitions
│   ├── utils                   # app utility modules
│   ├── app.tsx                 # app entry module with routing config
│   └── tsconfig.tsx            # TypeScript compiler config
├── temp                        # development vendor bundle output
├── index.html                  # index.html
├── jspm.config.js              # system.js config for app dependencies
├── server.js                   # dev-server entry module
└── tslint.json                 # linter config
```

---

## Workflows Guide
**NOTE**: Use index.html from assets for production, it have optimized loading logic for production. It is already configured in build script.

#### - Development Workflow
1. `npm run dev:bundle` - build optional vendor dependencies bundle to speed-up page reload during development _(re-run when dependencies was changed)_
2. `npm run dev` - start local dev server with hot-reload and open browser

#### - NO-IDE Workflow - command line type checking
1. `npm run tsc:watch` - if you don't use IDE with Intellisense, run this command for fast incremental type-checking in CLI

#### - Build for Production Workflow
1. `npm run build` - create app.js & vendor.js bundles in `dist/` folder
  - `npm run build:app` - build only app.js bundle _(run when project source code has changed)_
  - `npm run build:vendor` - build only vendor.js bundle _(run when project dependencies has changed)_
2. `npm run prod` - start local dev server in `dist/` folder running production bundle

---

## CLI Commands

#### - Init

`npm run init` - install jspm packages and prebuilds vendor.dev.js bundle

#### - Development

`npm run dev` or `yarn dev` - start local dev server with hot-reload [jspm-hmr](https://www.npmjs.com/package/jspm-hmr)

`npm run dev:bundle` - build optional vendor dependencies bundle (vendor.dev.js) to speed-up page reload during development (non-minified with source-maps)

`npm run dev:unbundle` - remove vendor.dev.js bundle package  
*(**WARNING**: it will result in loading all of vendor packages as multiple requests - use it only when needed e.g. leveraging HTTP/2 multiplexing/pipelining)*

#### - Type checking

`npm run tsc` - single thorough check 

`npm run tsc:watch` - fast incremental type-checking in watch mode

#### - Production Bundling (`dist/` folder)

`npm run prod` - start local dev server in `dist/` folder running production bundle

`npm run build` - build all, app.js & vendor.prod.js bundle

`npm run build:app` - build only `src/` - app.js (minified, no source-maps)

`npm run build:vendor` - build only `node_modules/` dependencies - vendor.prod.js (minified, no source-maps)

`npm run build:debug` - build debug version of app.js (non-minified with source-maps)

#### - Utility & Git Hooks

`npm run clean` - clean dist, node_modules, jspm_packages folders

`npm run lint` - run ts linter

`npm run test` - run tests with jest runner

`npm run test:update` - updates jest snapshots

`npm run precommit` - pre commit git hook - runs linter and check types

`npm run prepush` - pre push git hook - runs linter and tests

#### - Deployment

`npm run deploy:init` - clone git repository in `/dist` folder (gh-pages branch)

`npm run deploy` - commit and push all changes found in `/dist` folder

---

## The MIT License (MIT)

Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
