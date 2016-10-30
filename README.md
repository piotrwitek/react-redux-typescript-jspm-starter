## _React v15.3.2 / Redux v3.6.0 / TypeScript v2.0.3_ - starter-kit
#### __React-Router v2.8.1 / Seamless-Immutable / JSPM (SystemJS & Rollup with tree-shaking)__

> ##### Futuristic, bundle-free development environment for building _Component-Driven SPA with React, Redux and TypeScript_ - utilizing power of Static Type-checking, ES.Next, CSS-Modules, Hot-reload, in-browser transpilation, tree-shaking - powered by JSPM (SystemJS & Rollup with tree-shaking).

### Demo: http://piotrwitek.github.io/react-redux-typescript-starter-kit/

Table of Contents  
1. [Innovations](#innovations)  
2. [Features](#features)  
3. [Roadmap](#roadmap)  
4. [Pros & Cons](#pros--cons)  
5. [Project Structure](#project-structure)  
6. [Installation](#installation)  
7. [Workflows Guide](#workflows-guide)  
8. [CLI Commands](#cli-commands)  

---

## Innovations

### RAPID-SPEED DEVELOPMENT WORKFLOW - no bundling!
No bundling during development, instead loading source files (.ts/.tsx) directly in the browser (using [plugin-typescript](https://github.com/frankwallis/plugin-typescript)).  
When file changes - skipping type-checking (which is delegated to seperate process) and reloading only the changed file with hot-reload.

### DELEGATED TYPE-CHECKING
Type-checking is delegated to a seperate process using following options:
- __CLI__ - TSC compiler process running in watch mode: [instruction here](#cli-workflow)  
- __Editor/IDE__ - use internal TypeScript Language Service (e.g. Webstorm, VS Code, Atom, Sublime Text, alm.tools and more...)

__NOTE:__ There are two seperate __tsconfig__ - for development type-checking and for production bundle build:

[tsconfig for development](https://github.com/piotrwitek/react-redux-typescript-starter-kit/blob/a00c1b5854c36ea4d31fa1255ce920134bfc3855/src/tsconfig.json)

[tsconfig for production](https://github.com/piotrwitek/react-redux-typescript-starter-kit/blob/a00c1b5854c36ea4d31fa1255ce920134bfc3855/jspm.config.js#L129)

### HOT-RELOAD THAT SCALE
Local dev server with hot-reloading out-of-the-box (using [systemjs-hot-reloader](https://github.com/capaj/systemjs-hot-reloader)).  
__How:__ Loading each module separately and using SystemJS module registry, on changes it's removing old module from registry and re-importing updated one then re-evaluating only those modules that was importing the changed module.  

__This solution scale really well with increasing modules count because you reload only modules that has changed.__
> __Differences with Webpack workflow explained__ from real project perspective by [@jonaskello](https://github.com/jonaskello)  https://github.com/Microsoft/TypeScript/issues/1564#issuecomment-252903932

### CLI WORKFLOW
Most often your team is using different Editors/IDE's so you'll need to have a common way to run type-checking using a specific version of TypeScript compiler for consistent results and avoid Editor specific issues.  
Run `tsc -p src --watch` command for quick incremental type-checking or `tsc -p src` command for one-time complete check (JS emit is disabled to not clutter your project with intermediate JS files)

### CSS-MODULES WITH TYPED CLASS-NAMES
Locally scoped CSS styles, encapsulated as ES6 Modules that can be imported in UI components, with capability to type-check CSS class-names in your components using interfaces and leverage TypeScript IntelliSense features in Editor/IDE (using [csjs](https://github.com/rtsao/csjs#faq)):  
- Define available CSS classes as interfaces in CSS-Modules to get className property auto-completion, type-checking and easy refactoring in your entire codebase.  
- Auto-generate documentation for CSS styles leveraging JSDoc support in defined interfaces.  
- Full CSS support - including pseudo classes, media queries & more...

__EXAMPLE:__ [Consumer Component](src/containers/css-modules-container/index.tsx) and it's [CSS Module Styles in TypeScript Format with Class-Names Interface](src/containers/css-modules-container/container-styles.tsx)  
__DEMO:__ http://piotrwitek.github.io/react-redux-typescript-starter-kit/#/css-modules  
__Overview Video:__ https://youtu.be/67pPYqom2a0

### ASYNC/AWAIT/GENERATORS transformation when targeting ES3/ES5 (No Babel)
Support "async & generator functions" when targeting ES3/ES5 __without Babel!__  
- Async/Await - starting from version 2.1 TypeScript provide native support for transformation to ES3/ES5 (https://github.com/Microsoft/TypeScript/pull/9175)  
- Generators - TypeScript Team have dropped request to support generator transformation to (ES3/ES5) so consider alternative solution covered below (https://github.com/Microsoft/TypeScript/issues/3975#issuecomment-250859415)  

__Generators transformation to ES3/ES5:__

Use [Facebook Regenerator Project](https://github.com/facebook/regenerator) instead of __Babel__ as dependency to transform Generators.  
_(NOTE: Internally **Babel** is also running "regenerator runtime" for async and generator functions transformations - https://babeljs.io/docs/usage/caveats/)_

When building for production use `npm run regenerator` command after completion of build step, this will run "regenerator" on app.js bundle. Alternatively use `npm run build:regenerator` command to automatically run "regenerator" with each production build.

### Optimized JSPM (SystemJS) loading speed
To speed up a full page reload by minimizing request count it is possible to create a development "vendor bundle" for external dependencies loaded from node_modules.  
If not leveraging HTTP/2, it is a best practice to bundle all external dependencies together and load as a one bundle.

Test reload speed improvement using this simple test procedure:  
1. run `npm run unbundle` -> open network tab in chrome dev tools -> reload the page -> check logged results  
2. run `npm run build:dev` -> open network tab in chrome dev tools -> reload page -> compare logged results with previous  

---

## Features

- PRODUCTION-WORKFLOW - npm scripts for production bundling & deployment, github-hooks, linter, test runner etc.
- TYPESAFE-API-CALLS - type checking contracts of REST API calls - forget constantly checking for API docs and let your IDE guide you
- GREAT-TOOLING - type cheking for JavaScript and DOM API with autocompletion and docs right in your editor - no more silly typos and runtime exceptions
- REACT-ROUTER - included `react-router-redux` to store your routing in state for Time-Travel capabilities
- REDUX-DEV-TOOLS - installed Redux DevTools capabilities with [chrome-extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- IMMUTABLE-STORE - using `seamless-immutable` for simplicity and backwards-compatibility with vanilla JS (no hassle with `toJS()`, `get()`, `getIn()` in your containers and components)
- BEM & ITCSS - using BEM with Inverted Triangle conventions to give meaning and context to CSS classes
- EASY TESTING IN TYPESCRIPT - write your tests only in TypeScript - don't worry about transpilation, easily import and run your TS source files from a command line (use `npm test` CLI command).
Test harness with [Tape](https://github.com/substack/tape) with Promise support from [blue-tape](https://github.com/spion/blue-tape)

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

#### JSPM / System.js / Rollup

- JSPM 0.17.X - production ready set-up with best-practices from real-world projects
- optimized loading speed by utilizing `vendor` dev-bundle (read below)
- using Rollup for bundling and tree-shaking optimizations
- bundles for production - seperate vendor & app bundles
- importing and bundling CSS / SCSS / JSON / Image files using plugins

---

## Roadmap

- Redux async flow with redux-saga - https://github.com/yelouafi/redux-saga/
- Testing async flow in redux sagas
- REDUX INNOVATION - using TS 2.0 "Tagged Union Types" - for solid Redux integration
  (https://blogs.msdn.microsoft.com/typescript/2016/08/30/announcing-typescript-2-0-rc)
- Reactive Programming with RxJS
- Testing with Enzyme (JSDOM)
- Testing Component markup (shallowRender)
- Testing Component behaviour/interactions (renderIntoDocument, Simulate)
- Integration Testing in Redux Store

---

## Pros / Cons

- I discourage using internal IDE TypeScript support to compile your source code, because the compiler version there could be a different version than what you should have locally installed in the project by npm. Visual Studio Code and alm.tools allows to use a locally installed TypeScript package in your project or use TSC cli command to compile your source code.
It is OK to use type-checking in the IDE because it will not emit any code.

---

## Project Structure

```
.
├── assets                      # static assets copied to dist folder
├── configs                     # dev / prod bundle config
|   ├── vendor.config.dev.js    # packages included in "vendor" bundle for dev
|   └── vendor.config.prod.js   # packages included in "vendor" bundle for prod
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
├── index.html                  # index.html
├── index.prod.html             # index.html configured for production use
├── jspm.config.js              # system.js config for app dependencies
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

## Workflows Guide
__NOTE: Use index.prod.html for production, it have slightly different loading logic. Add references to your static assets like links/scripts and copy to the dist folder during a build process.__

#### Development Workflow
1. `npm run build:dev` - create bundle of vendor packages to speed-up full-page reload during development _(re-run only when project dependencies has changed)_
2. `npm start` - browser will open automatically

#### NO-IDE Workflow - command line type checking
1. `npm run tsc:watch` - if you don't use IDE with typescript integration, run tsc compiler in watch mode for fast incremental type-checking (NOTE: this will not emit any JS files, only type-checking - it's OK because you load ts file on-the-fly)
2. `npm run tsc` - one-time project wide type-safety check

#### Build for Production Workflow
1. `npm run build` - create app.js & vendor.js bundles in 'dist' folder
  - `npm run build:app` - build only app.js bundle _(run when project source code has changed)_
  - `npm run build:vendor` - build only vendor.js bundle _(run when project dependencies has changed)_
2. open `http://localhost/dist/` - check prod build on local server
3. `npm run regenerator` - if you want to add "async/generator functions" downlevel transformation - use when targeting ES3/ES5

---

## CLI Commands

#### Development

`npm start` - start local dev server with hot-reload [jspm-hmr](https://www.npmjs.com/package/jspm-hmr)

`npm run tsc` - run project-wide type-checking with TypeScript CLI (`/src` folder)

`npm run tsc:watch` - start TypeScript CLI in watch mode for fast incremental type-checking (`/src` folder)

#### Dev Bundling (`temp/` folder)

`npm run build:dev` - build vendor packages into vendor.dev.js bundle to speed-up full-page reload during development - non-minified with source-maps (dev bundle)

`npm run unbundle` - delete vendor.dev.js bundle package __(WARNING: it will result in loading all of vendor packages as seperate requests - use it only if you know what you are doing e.g. when leveraging HTTP/2 multiplexing/pipelining)__

#### Production Bundling (`dist/` folder)

`npm run build` - build both app.js & vendor.js bundle for production

`npm run build:app` - build app source code into app.js (prod bundle) - minified, no source-maps

`npm run build:vendor` - build vendor packages into vendor.prod.js (prod bundle) - minified, no source-maps

`npm run build:debug` - build app source code into app.js (dev bundle) - non-minified with source-maps

`npm run regenerator` - transform "generator functions" in app.js (prod bundle) to ES3/ES5 using regenerator runtime (not supported natively by TypeScript)

`npm run build:regenerator` - alias to run both `npm run build:app` and `npm run regenerator`.

#### Deployment

`npm run init:deploy` - clone git repository in `/dist` folder (gh-pages branch)

`npm run deploy` - commit and push all changes found in `/dist` folder

#### Utility & Git Hooks

`npm run clean` - clean dist folder

`npm run lint` - run linter

`npm run test` or `npm test` - run test suites

`npm run precommit` - pre commit git hook - runs linter

`npm run prepush` - pre push git hook - runs linter and tests

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
