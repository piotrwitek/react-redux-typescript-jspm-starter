## _React v15.3.1 / Redux v3.5.2 / TypeScript v2.0_ - starter-kit
> ### (Hot-Reload / React-Router / Seamless-Immutable / Fetch / JSPM / SystemJS / Rollup)

> ##### Futuristic, production-ready development environment for building _Component-Driven, Flux Single Page Applications with React, Redux and TypeScript_ - utilizing power of Static Type Checking, ES2016, Async/Await, ES Modules, Linting, Reliable Hot-Reload, Git-Hooks, in browser (on-the-fly) transpilation, bundling with Rollup - powered by JSPM / SystemJS / Rollup.

### Demo: http://piotrwitek.github.io/react-redux-typescript-starter-kit/

### Features
- CLEAN - minimal dependencies, no clutter!
- NO-SETUP - working out-of-the-box (more in Usage section below...)
- RELIABLE HOT-RELOAD - dev server with `systemjs-hot-reloader` - highly reliable and scalable with increasing modules count (more in Notes section below...)
- GREAT-TYPESCRIPT-EXPERIENCE - in browser (on-the-fly) loading / no transpilation step / no bundling step
- TYPESAFE-API-CALLS - type checking (request and response object) in calls to REST API, no more problems with service contracts
- REACT-BEST-PRACTICES - no mixins / no ref strings / no method binding - instead ES Class Fields / no function creation in render methods / render lists in dedicated components / don't use array index as key / ES6 style PureRenderMixin with PureComponent
- REACT-ROUTER - included `react-router-redux` to store your routing in state for Time-Travel capabilities
- IMMUTABLE-STORE - using `seamless-immutable` for simplicity and backwards-compatibility with vanilla JS (no hassle with `toJS()`, `get()`, `getIn()` in your containers and components)
- COMPLETE-WORKFLOW - npm scripts for bundling & deploy, github-hooks, linter, test runner etc.
- EASY-TESTING - complete testing solution with Tape (blue-tape), Enzyme, JSDOM - functional approach makes it easy to test, you can even write and run test entirely in TypeScript - no transpilation step!
- CSS MODULES - simplest and reliable approach for local CSS styles using csjs - https://github.com/rtsao/csjs#faq
- BEM and ITCSS - using BEM with Inverted Triangle conventions to give meaning and context to CSS classes

---

### Code Examples 
- React and Redux with TypeScript - production ready code samples
- Flux Standard Actions for Redux - https://github.com/acdlite/redux-actions
- Redux Reducer Modules - https://github.com/erikras/ducks-modular-redux

### Testing Examples
- Testing Redux Action Creators
- Testing Redux Async Actions

---

## Roadmap
- Redux async flow with redux-saga - https://github.com/yelouafi/redux-saga/
- Time Travel Debugging
- CSS Modules using csjs - https://github.com/rtsao/csjs#faq

- REDUX-INNOVATIVE-APPROACH - using TS 2.0 "Tagged Union Types" - for solid Redux integration
  (https://blogs.msdn.microsoft.com/typescript/2016/08/30/announcing-typescript-2-0-rc)

- Testing with Enzyme (JSDOM)
- Testing Component markup (shallowRender)
- Testing Component behaviour/interactions (renderIntoDocument, Simulate)
- Integration Testing in Redux Store

---

## JSPM (System.js / Rollup)
- JSPM 0.17.X - most recent version with best-practices from real world projects
- optimized full-page reload speed by utilizing `vendor` dev-bundle (read below)
- internally using Rollup for bundling and optimizations
- bundles for production - seperate vendor & app bundles
- importing and bundling CSS or SCSS files using plugins

### Optimized JSPM (SystemJS) for speed
I saw people complaining about JSPM loading very slow in development when there are a lot of modules loaded in the project.
This can be optimized in development using bundles.
I have found that a lot of modules are external dependencies so we can speed up a page reload considerably by creating a `vendor` bundle. As external dependencies don't need to be hot-reloaded and they'll only change when updated through NPM, so it is obvious to bundle them all together and load as one file without any drawbacks.
Using this approach you will have both faster full page reload and your own `src` modules loaded separately utilizing hot-reload.
This is the best of two development approaches (hot-reload vs. bundling) mixed together.

Check yourself using this easy test procedure:

1. run `npm run unbundle` -> open network tab in chrome dev tools -> reload the page -> check logged results
2. run `npm run bundle-dev` -> open network tab in chrome dev tools -> reload page -> compare logged results with previous

---

## Project Structure

```
.
├── assets                   # static assets copied to dist folder
├── src                      # app source code
│   ├── components           # global reusable presentational components
│   ├── containers           # container components providing redux context
│   ├── layouts              # components defining page layouts
│   ├── reducers             # modules containing redux reducers/constants/action creators
│   ├── services             # modules abstracting communication with web services
│   ├── typings              # custom TypeScript definitions
│   ├── utils                # app utility modules
│   ├── app.tsx              # app entry module
│   ├── router.tsx           # app routes module
│   ├── store.tsx            # app store module
│   ├── test-runner.tsx      # test suites config
│   └── tsconfig.tsx         # TypeScript compiler config
├── dev-bundle.config.js     # libs should be included in dev bundle
├── index.html               # index.html
├── jspm.config.js           # system.js config for app dependencies
├── jspm.init.js             # system.js app import & hot-reload setup
├── server.js                # dev-server entry module
└── tslint.json              # linter config
```

---

## Notes

- I'm temporarily using regenerator transform to transpile async/generators to ES5 only in production build step (it's necessary for compatibility with older browsers, you can opt-out if not necessary)
__I'll get rid of this clunky step soon enough with release of TypeScript 2.1 which will natively support it__

- I've seen most boilerplates adding Babel transpilation into their dev workflow with TypeScript, which introduces additional and unnecessary costly full build step, my solution only adds async/generators transform (not a full transpilation) only when generating app bundle for production (not in development workflow so it stays fast)
__It's worth to know that Babel is similarly using regenerator internally for async/generators transform https://babeljs.io/docs/usage/caveats/__

- On Webpack Hot Module Reload: SystemJS hot-reloading works differently from Webpack HMR, it loads module files separately so there is no need for bundling step. Then it deletes the module from module registry and re-imports it with the modules that depend on it ensuring to always load latest changes.
Because of this approach it is highly scalable with increasing modules count in your project and is more reliable in contrary to Webpack/React-Hot-Reloader - __Webpack is breaking it's HMR flow occasionally thus requiring you to do a full page reload__.

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

#### Build for Production Workflow
1. `npm run build` - package created in 'dist' folder
  - `npm run build:app` - build only app.js _(run when app source code has changed)_
  - `npm run build:vendor` - build only vendor.js _(run when app dependencies has changed)_
2. open `http://localhost/dist/` - to check build on local server

---

## All Npm Commands & Scripts

`npm start` - start local dev server with hot-reload for JSPM [jspm-hmr](https://www.npmjs.com/package/jspm-hmr)

#### Development Bundling

`npm run bundle-dev` - bundle static dependencies for quick full-page reload, app sources remain as seperate modules for on-the-fly HMR & transpilation

`npm run unbundle` - un-bundle static dependencies (usefull when changing app dependencies)

#### Production Bundling (`dist/` folder)

`npm run build` - build both app & dependecy bundle

`npm run build:app` - build app sources bundle (only app source code) - minified, no source-maps

`npm run build:vendor` - build app dependencies bundle (only vendor dependencies) - minified, no source-maps

`npm run build:debug` - build app sources bundle - debug version with source-maps

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
