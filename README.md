## _React v15.3.1 / Redux v3.5.2 / TypeScript v2.0_ - starter-kit
#### __React-Router / Seamless-Immutable / Fetch API / JSPM  (SystemJS with Hot-Reload & Rollup)__

> ##### Futuristic, production-ready development environment for building _Component-Driven, Flux Single Page Applications with React, Redux and TypeScript_ - utilizing power of Static Type Checking, ES2016, Async/Await, ES6 Modules, Linting,  Git-Hooks, fast in browser (on-the-fly) transpilation, bundling with tree-shaking - powered by JSPM (SystemJS with Hot-Reload & Rollup).

### Demo: http://piotrwitek.github.io/react-redux-typescript-starter-kit/

Table of Contents  
1. [Innovations](#innovations)  
2. [Features](#features)  
3. [Roadmap](#roadmap)  
4. [JSPM integration](#jspm--systemjs--rollup)  
5. [Pros & Cons](#pros--cons)  
6. [Project Structure](#project-structure)  
7. [Installation](#installation)  
8. [Usage](#usage)  
9. [CLI Commands](#cli-commands)  


## Innovations
- __TYPESCRIPT RAPID SPEED WORKFLOW WITH INCREMENTAL TYPE-CHECKING - loading TS files in browser (on-the-fly) -> no JS emit, it's OK to use only TS files, also for unit testing, it means no transpilation step & no bundling step during development__ _(bundling step is only necessary to create app & vendor bundle for production)_
- RELIABLE-HOT-RELOAD - dev server with hot-reload using [jspm-hmr](https://www.npmjs.com/package/jspm-hmr) - highly reliable and scalable for speed with increasing modules count (more in [Pros & Cons](#pros--cons)...)
- TYPESCRIPT-TESTING - complete testing solution with Tape (blue-tape) - write and run tests only in TS - no transpilation required!
- NO-IDE-NO-PROBLEM - you can use Notepad, just run `tsc --watch` in command line for fast incremental type-checking or `tsc` for project-wide type-check, there is no emit so it never breaks reliable hot-reload :)

## Features
- PRODUCTION-WORKFLOW - npm scripts for production bundling & deployment, github-hooks, linter, test runner etc.
- TYPESAFE-API-CALLS - type checking contracts of REST API calls - forget constantly checking for API docs and let your IDE guide you
- GREAT-TOOLING - type cheking for JavaScript and DOM API with autocompletion and docs right in your editor - no more silly typos and runtime exceptions
- REACT-ROUTER - included `react-router-redux` to store your routing in state for Time-Travel capabilities
- REDUX-DEV-TOOLS - installed Redux DevTools capabilities with [chrome-extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- IMMUTABLE-STORE - using `seamless-immutable` for simplicity and backwards-compatibility with vanilla JS (no hassle with `toJS()`, `get()`, `getIn()` in your containers and components)
- CSS-MODULES - simplest and reliable approach for local CSS styles using csjs - https://github.com/rtsao/csjs#faq
- BEM & ITCSS - using BEM with Inverted Triangle conventions to give meaning and context to CSS classes

#### React Best Practices & Optimizations
- no mixins -> use ES6 style PureRenderMixin with PureComponent
- no ref strings -> use ref callbacks
- no method binding -> use ES Class Fields
- no new function/objects creation in render methods -> declare them in outer scope and use a reference
- render big collections in separate dedicated components -> omit re-renders invoked by other prop changes
- don't use array index as key property -> use item unique id property to eliminate bugs

#### React Patterns
- Flux Standard Actions for Redux - https://github.com/acdlite/redux-actions
- Redux Reducer Modules - https://github.com/erikras/ducks-modular-redux

---

## Roadmap
- Redux async flow with redux-saga - https://github.com/yelouafi/redux-saga/
- Testing async flow in redux sagas
- REDUX INNOVATION - using TS 2.0 "Tagged Union Types" - for solid Redux integration
  (https://blogs.msdn.microsoft.com/typescript/2016/08/30/announcing-typescript-2-0-rc)
- CSS Modules using csjs - https://github.com/rtsao/csjs#faq
- Reactive Programming with RxJS
- Testing with Enzyme (JSDOM)
- Testing Component markup (shallowRender)
- Testing Component behaviour/interactions (renderIntoDocument, Simulate)
- Integration Testing in Redux Store

---

## JSPM / System.js / Rollup
- JSPM 0.17.X - production ready set-up with best-practices from real-world projects
- optimized loading speed by utilizing `vendor` dev-bundle (read below)
- using Rollup for bundling and tree-shaking optimizations
- bundles for production - seperate vendor & app bundles
- importing and bundling CSS / SCSS / JSON / Image files using plugins

### Optimized JSPM (SystemJS) loading speed
I saw people complaining about JSPM loading very slow in development when there are a lot of modules loaded in the project.
This can be optimized in development using bundles.
I have found that a lot of modules are external dependencies so we can speed up a page reload considerably by creating a `vendor` bundle. As external dependencies don't need to be hot-reloaded and they'll only change when updated through NPM, so it is obvious to bundle them all together and load as one file without any drawbacks.
Using this approach you will have both faster full page reload and your own `src` modules loaded separately utilizing hot-reload.
This is the best of two development approaches (hot-reload vs. bundling) mixed together.

Check yourself using this easy test procedure:

1. run `npm run unbundle` -> open network tab in chrome dev tools -> reload the page -> check logged results
2. run `npm run bundle-dev` -> open network tab in chrome dev tools -> reload page -> compare logged results with previous

---

## Pros / Cons

- If you are using TypeScript compiler built-in in the editor/IDE you can experience some quirks and limitations. You should always use a local npm TypeScript installation. For the best IDE experience I suggest to use Atom Editor with atom-typescript plugin (include single file compilation feature) or any other Editor with `npm run tsc:watch` starter-kit CLI Command for fast incremental type-checking.

- You should never emit intermediate JS files during development workflow, because you'll lose Hot-Reload capability (new files emitted after each change) and experience much slower workflow without any advantages.

- I've seen most boilerplates adding Babel transpilation into their dev workflow with TypeScript, which introduces additional and unnecessary costly full build step, my solution only adds async/generators transform (not a full transpilation) only when generating app bundle for production (not in development workflow so it stays fast)
__It's worth to know that Babel is similarly using regenerator internally for async/generators transform https://babeljs.io/docs/usage/caveats/__

- Comparing to Webpack Hot Module Reload: SystemJS hot-reloading works differently from Webpack HMR, it loads module files separately so there is no need for bundling step. Then it deletes the module from module registry and re-imports it with the modules that depend on it ensuring to always load latest changes.
Because of this approach it is highly scalable with increasing modules count in your project and is more reliable in contrary to Webpack/React-Hot-Reloader - __Webpack is breaking it's HMR flow occasionally thus requiring you to do a full page reload__.

- Ttemporarily using regenerator transform to transpile async/generators to ES5 only in production build step (it's necessary for compatibility with older browsers without generators support, you can opt-out if not necessary)
__Soon with release of TypeScript 2.1 proper transpilation will be provided eliminating this step__

---

## Project Structure

```
.
├── assets                      # static assets copied to dist folder
├── src                         # app source code
│   ├── components              # global reusable presentational components
│   ├── containers              # container components providing redux context
│   ├── layouts                 # components defining page layouts
│   ├── reducers                # modules containing redux reducers/constants/action creators
│   ├── services                # modules abstracting communication with web services
│   ├── typings                 # custom TypeScript definitions
│   ├── utils                   # app utility modules
│   ├── app.tsx                 # app entry module with routing config
│   ├── store.tsx               # app store module
│   ├── test-runner.tsx         # test suites config
│   └── tsconfig.tsx            # TypeScript compiler config
├── bundle-config.vendor.dev.js # packages included in dev vendor bundle
├── bundle-config.vendor.js     # packages included in prod vendor bundle
├── index.html                  # index.html
├── jspm.config.js              # system.js config for app dependencies
├── jspm.init.js                # system.js app import & hot-reload setup
├── server.js                   # dev-server entry module
└── tslint.json                 # linter config
```

---

## Installation

#### Prerequisites
- Node.js and Git
- Install JSPM with global flag to have jspm command available: `npm install jspm -g` (otherwise you'll have to use a local version from `~/node_modules/`)


#### 1. Clone repo
    git clone https://github.com/piotrwitek/react-redux-typescript-starter-kit.git my-project-folder

#### 2. Install npm dependencies
    npm install

#### 3. Run development server with HMR and enjoy best possible dev feedback-loop
    npm start

---

## Usage

#### Dev Workflow
1. `npm run bundle-dev` - bundle vendor packages for development _(re-run only when app dependencies has changed)_
2. `npm start` - browser will open automatically

No IDE Option: `npm run tsc:watch` - if you don't use IDE with typescript integration, run tsc in watch mode for fast incremental type-checking (NOTE: this will not emit any JS files, only type-checking - it's OK because you load ts file on-the-fly)

#### Build for Production Workflow
1. `npm run build` - create app.js & vendor.js bundles in 'dist' folder
  - `npm run build:app` - build only app.js bundle _(run when app source code has changed)_
  - `npm run build:vendor` - build only vendor.js bundle _(run when app dependencies has changed)_
2. open `http://localhost/dist/` - check prod build on local server

---

## CLI Commands

#### Development

`npm start` - start local dev server with hot-reload [jspm-hmr](https://www.npmjs.com/package/jspm-hmr)

`npm run tsc` - run project-wide type-checking with TypeScript CLI (`/src` folder)

`npm run tsc:watch` - start TypeScript CLI in watch mode for fast incremental type-checking (`/src` folder)

`npm run bundle-dev` - build vendor packages in single file bundle for quick full-page reload __(app sources remain as seperate modules for on-the-fly HMR & transpilation)__

`npm run unbundle` - delete vendor bundle package __(WARNING: it will result in loading all of vendor packages as seperate requests - use it only if you know what you are doing e.g. when experimenting with HTTP/2 multiplexing/pipelining)__

#### Production Bundling (`dist/` folder)

`npm run build` - build both app & dependecy bundle

`npm run build:app` - build app sources bundle (only app source code) - minified, no source-maps

`npm run build:vendor` - build app dependencies bundle (only vendor dependencies) - minified, no source-maps

`npm run build:debug` - build app sources bundle - non-minified version with source-maps

#### Initialization

`npm run init:dist` - clean dist folder and copy assets

`npm run init:deploy` - clone git repository in `/dist` folder (gh-pages branch)

#### Utility & Git Hooks

`npm run deploy` - commit and push all changes found in `/dist` folder

`npm run bad` - build app.js and deploy

`npm run bvd` - build vendor.js and deploy

`npm run lint` - run linter

`npm run test` - run test suites

`npm run precommit` - pre commit git hook - runs linter

`npm run prepush` - pre push git hook - runs linter and tests

`npm run regenerator` - transpile your app.js through regenerator

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
