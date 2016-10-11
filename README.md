## _React v15.3.2 / Redux v3.6.0 / TypeScript v2.0.3_ - starter-kit
#### __React-Router v2.8.1 / Seamless-Immutable / Fetch API / JSPM  (SystemJS with Hot-Reload & Rollup)__

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
8. [Workflows Guide](#workflows-guide)  
9. [CLI Commands](#cli-commands)  

---

## Innovations

### RAPID-SPEED DEVELOPMENT WORKFLOW - TypeScript source file hot-reload and in-the-browser transpilation
Super-fast development experience by loading TypeScript source files directly in the browser (using [plugin-typescript](https://github.com/frankwallis/plugin-typescript)) while seperately type-checking them in the IDE or in the command-line in watch mode, without transpilation for intermediate JS files or bundling.
Joined together with single-file hot-reload gives you almost instant feedback-loop as there is no costly project-wide transpilation or bundling step involved.
Great explanation from @jonaskello of how this works compared to Webpack workflow: https://github.com/Microsoft/TypeScript/issues/1564#issuecomment-252903932

### SCALABLE-HOT-RELOAD
Local HTTP dev server with hot-reload out-of-the-box - highly reliable leveraging SystemJS import feature and scalable for speed with increasing modules count using [systemjs-hot-reloader](https://github.com/capaj/systemjs-hot-reloader)
It can load each src file separately eliminating extra bundling step. First it will delete old module from the SystemJS registry and then re-imports updated module with additional modules which have imported the updated module, ensuring to always have the latest changes.
This approach gives you great scalability with increasing modules count as you reload only necessary modules.

### NO-IDE-NO-PROBLEM
If you are coding in a NO-IDE environment (notepad/vim) or expecting to have a common way across a team to target a specific version of typescript compiler even while using different Editors/IDEs, you can utilize __CLI type-checking workflow__ using `tsc -p src --watch` command for fast incremental type-checking or `tsc -p src` command for project-wide type-check, there is no JS emit so it will not clutter your project or disrupt different build processes based on various IDE plugins or gulp/grunt based tasks.

### CSS-MODULES WITH TYPED CLASS-NAMES
Own concept to achieve locally scoped CSS styles using [csjs](https://github.com/rtsao/csjs#faq) with statically typed CSS class-names using TypeScript.
- Full CSS support with pseudo-classes & media queries, encapsulated in ES6 Modules that can be nicely imported by your UI components.  
- Define interfaces with your CSS classes and you get className property type-checking, solid auto-completion and easy refactoring. You can also add doc comments and auto-generate docs of your styles library for your team and utilize IntelliSense features of your IDE.  

__EXAMPLE:__ [Consumer Component](src/containers/css-modules-container/index.tsx) and it's [CSS Module Styles in TypeScript Format with Class-Names Interface](src/containers/css-modules-container/container-styles.tsx)  
__DEMO:__ http://piotrwitek.github.io/react-redux-typescript-starter-kit/#/css-modules  
__Overview Video:__ https://youtu.be/67pPYqom2a0

### ASYNC/AWAIT/GENERATORS transformation when targeting ES3/ES5 (without Babel)
Beware of TypeScript boilerplates using Babel transformation step after the TypeScript compiler to transform "async & generator functions" when targeting ES3/ES5. This is costly process and introduces additional build step into the build workflow.
- Async/Await - starting from version 2.1 TypeScript provide native support for transformation to ES3/ES5, so in this case you are fine using only TS (https://github.com/Microsoft/TypeScript/pull/9175)  
- Generators - TypeScript Team have dropped adding support for generator transformation to (ES3/ES5) so consider alternative solution covered below (https://github.com/Microsoft/TypeScript/issues/3975#issuecomment-250859415)  

__Alternative solution to resolve Generator transformation to ES3/ES5:__
My solution prefer using only [Facebook Regenerator Project](https://github.com/facebook/regenerator) instead of adding Babel as dependency _(NOTE: Babel internally is using the same approach, running "regenerator runtime" internally for async and generator functions transformations - https://babeljs.io/docs/usage/caveats/)_

When building for production use `npm run regenerator` CLI command just after a build command to apply transform to app.js bundle, or use an alias command `npm run build:regenerator` to run it automatically with each build.

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

- be aware that using TypeScript compiler built-in into the editor/IDE like in WebStorm, can give you some trouble because of compiler version over which you don't have any control. Instead you should depend on a local npm TypeScript installation included in project. Visual Studio Code and alm.tools allows the possibility to use a locally installed TS package in your project.
In case you want to stick to using IDE with "baked-in TS" you could turn off it's compilation process and run type-checking from a command line utilizing provided helper scripts `npm run tsc` or `npm run tsc:watch` commands for one-time check or a continuous-incremental type-checking.

- During development there is no need to emit intermediate JS files, this workflow will load your TS files directly in-browser, otherwise you'll lose Hot-Reload capability (new files emitted after each change) and experience much slower workflow without any advantages.

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
1. `npm run bundle-dev` - create bundle of vendor packages to speed-up full-page reload during development _(re-run only when project dependencies has changed)_
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

#### Initialization

`npm run init:dist` - clean dist folder and copy assets

`npm run init:deploy` - clone git repository in `/dist` folder (gh-pages branch)

#### Utility & Git Hooks

`npm run deploy` - commit and push all changes found in `/dist` folder

`npm run bad` - build app.js and deploy

`npm run bvd` - build vendor.js and deploy

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
