## _React v15.3 / Redux v3.6 / TypeScript v2.1_ - starter-kit
#### __React-Router v2.8 / Seamless-Immutable / JSPM (SystemJS & Rollup with tree-shaking)__

> ##### Futuristic, bundle-free development environment for building _Component-Driven SPA with React, Redux and TypeScript_ - utilizing power of Static Type-checking, ES.Next, CSS-Modules, Hot-reload, in-browser transpilation, tree-shaking - powered by JSPM (SystemJS & Rollup with tree-shaking)

### Demo Page:  
*- http://piotrwitek.github.io/react-redux-typescript-starter-kit/*

### Learn more about React / Redux / TypeScript Patterns:  
*- https://github.com/piotrwitek/react-redux-typescript-patterns*

### Table of Contents  
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

### - RAPID-SPEED DEVELOPMENT WORKFLOW - no bundling!
No bundling during development, instead loading source files (.ts/.tsx) directly in the browser (using [plugin-typescript](https://github.com/frankwallis/plugin-typescript)).  
When file changes - skipping type-checking (which is delegated to another process) and reloading only the changed file with hot-reload

### - DELEGATED TYPE-CHECKING
Type-checking is delegated to a seperate process using following options:
- __CLI__ - TSC compiler process running in watch mode: [instruction here](#cli-workflow)  
- __Editor/IDE__ - use internal TypeScript Language Service (e.g. Webstorm, VS Code, Atom, Sublime Text, alm.tools and more...)

__NOTE:__ There are two seperate __tsconfig__ needed - one for type-checking during development and the other for sources compilation to create production bundle:

[tsconfig for development type-checking](https://github.com/piotrwitek/react-redux-typescript-starter-kit/blob/a00c1b5854c36ea4d31fa1255ce920134bfc3855/src/tsconfig.json)

[tsconfig for building production bundle](https://github.com/piotrwitek/react-redux-typescript-starter-kit/blob/a00c1b5854c36ea4d31fa1255ce920134bfc3855/jspm.config.js#L129)

### - STRICT NULL CHECKS
Enable strictNullChecks with noImplicitAny (compiler flags), to get Non-nullable Types (v2.0) and Smarter Type Inference (v2.1) [Source](https://blogs.msdn.microsoft.com/typescript/2016/11/08/typescript-2-1-rc-better-inference-async-functions-and-more/) which greatly increase your TypeScript experience.

### - HOT-RELOAD THAT SCALE
Local dev-server with hot-reloading out-of-the-box (using [systemjs-hot-reloader](https://github.com/capaj/systemjs-hot-reloader)).  
__How:__ Loading each module source file in the browser (no bundling) using SystemJS module loader, on file changes it will remove old module from a registry then re-import and re-evaluate only those modules that imported this module  

__Great scaling - can handle really large amounts of modules because will reload only that modules that has changed without caring about the rest.__
> __Differences with Webpack workflow__ from real project use-case by [@jonaskello](https://github.com/jonaskello)  https://github.com/Microsoft/TypeScript/issues/1564#issuecomment-252903932

### - CLI WORKFLOW
Most often your team is using different Editors/IDE's so you'll need to have a common way across the team to run type-checking using  right version of TypeScript compiler for consistent results and avoid version mismatch issues.  

Provided npm commands *(JS emit is disabled to not clutter your project with unnecessary intermediate JS files)*:
- `tsc -p src --watch` for quick incremental type-checking in watch mode  
- `tsc -p src` command for single complete check  

### - ASYNC/AWAIT/GENERATORS transformation when targeting ES5
TypeScript natively support "async & generator functions" when targeting ES5 - _don't use Babel in your workflow for that!_  
- Async/Await - TS v2.1 provide native downlevel transformation to ES5 ([Source](https://github.com/Microsoft/TypeScript/pull/9175))  
- Generators - TS v2.3 provide native downlevel transformation to ES5 ([Source](https://github.com/Microsoft/TypeScript/pull/12346))  

### - TESTING WITH TYPESCRIPT
- Writing and running tests for TypeScript only in TypeScript, without transpilation complexity (use `npm test` CLI command)
- Test harness using [jest](https://github.com/facebook/jest)

### - CSS-MODULES
Locally scoped CSS styles, encapsulated as ES6 Modules that can be imported in UI components, with capability to type-check CSS class-names in your components using interfaces and leverage TypeScript IntelliSense features in Editor/IDE (using [csjs](https://github.com/rtsao/csjs#faq)):  
- Define available CSS classes as interfaces in CSS-Modules to get className property auto-completion, type-checking and easy refactoring in your entire codebase.  
- Full CSS support - including pseudo classes, media queries & more...

__EXAMPLE:__ [Consumer Component](src/containers/css-modules-container/index.tsx) and it's [CSS Module in TypeScript with Class-Names Interface](src/containers/css-modules-container/container-styles.tsx)  
__DEMO:__ http://piotrwitek.github.io/react-redux-typescript-starter-kit/#/css-modules

### - Optimized JSPM (SystemJS) loading speed
Use "development vendor bundle" to speed up a full page reload by minimizing request count for external dependencies (in node_modules).  
If not trying to leverage HTTP/2, it is a best practice to bundle all external dependencies together and load as a single bundle

Test reload speed improvement using following simple test procedure:  
1. run `npm run unbundle` -> open network tab in chrome dev tools -> reload the page -> check logged results  
2. run `npm run build:dev` -> open network tab in chrome dev tools -> reload page -> compare logged results with previous  

---

## Features
- PRODUCTION-WORKFLOW - cross-platform npm scripts for production bundling & deployment, github-hooks, linter, test runner etc.
- TYPESAFE-API-CALLS - type safety of HTTP API calls (responses/requests) - stop checking for API docs and let your tools guide you
- REACT-ROUTER - `react-router-redux` to store routing history in redux state (Time-Travel Debugging)
- REDUX-DEV-TOOLS - Redux DevTools with [chrome-extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- IMMUTABLE-STORE - `seamless-immutable` for simplicity and backwards-compatibility with vanilla JS (no hassle with `toJS()`, `get()`, `getIn()` leaking to your components)
- BEM & ITCSS - BEM with Inverted Triangle conventions to give meaning and context to CSS classes

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
- Reactive Programming with RxJS
- Testing with Enzyme (JSDOM)
- Testing with Snapshots

---

## Installation

#### Prerequisites
- Node.js `>=6.0.0`
- Global [JSPM](http://jspm.io/) installation for CLI commands - `npm i -g jspm`

```
// Clone repo
git clone https://github.com/piotrwitek/react-redux-typescript-starter-kit.git my-project-folder

// Install dependencies
npm install

// Initiate JSPM and dev-bundle
npm run init

// Run development server with HMR
npm start
```

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
│   ├── services                # modules abstracting communication with web services
│   ├── store                   # modules containing redux modules (reducers/constants/action creators)
│   ├── types                   # custom TypeScript definitions
│   ├── utils                   # app utility modules
│   ├── app.tsx                 # app entry module with routing config
│   └── tsconfig.tsx            # TypeScript compiler config
├── index.html                  # index.html
├── index.prod.html             # index.html configured for production use
├── jspm.config.js              # system.js config for app dependencies
├── server.js                   # dev-server entry module
└── tslint.json                 # linter config
```

---

## Workflows Guide
__NOTE: Use index.prod.html for production, it have slightly different loading logic. Add references to your static assets like links/scripts and copy to the dist folder during a build process.__

#### Development Workflow
1. `npm run build:dev` - create bundle of vendor packages to speed-up full-page reload during development _(re-run only when project dependencies has changed)_
2. `npm run dev` - browser will open automatically

#### NO-IDE Workflow - command line type checking
1. `npm run tsc:watch` - if you don't use IDE with typescript integration, run tsc compiler in watch mode for fast incremental type-checking (NOTE: this will not emit any JS files, only type-checking - it's OK because you load ts file on-the-fly)
2. `npm run tsc` - one-time project wide type-safety check

#### Build for Production Workflow
1. `npm run build` - create app.js & vendor.js bundles in 'dist' folder
  - `npm run build:app` - build only app.js bundle _(run when project source code has changed)_
  - `npm run build:vendor` - build only vendor.js bundle _(run when project dependencies has changed)_
2. `npm run dev` & open `http://localhost/dist/` - check prod build on local server

---

## CLI Commands

#### Development

`npm run dev` or `yarn dev` - start local dev server with hot-reload [jspm-hmr](https://www.npmjs.com/package/jspm-hmr)

`npm run tsc` - run project-wide type-checking with TypeScript CLI (`/src` folder)

`npm run tsc:watch` - start TypeScript CLI in watch mode for fast incremental type-checking (`/src` folder)

#### Dev Bundling (`temp/` folder)

`npm run dev:bundle` - build vendor packages into vendor.dev.js bundle to speed-up full-page reload during development - non-minified with source-maps (dev bundle)

`npm run dev:unbundle` - delete vendor.dev.js bundle package __(WARNING: it will result in loading all of vendor packages as seperate requests - use it only if you know what you are doing e.g. when leveraging HTTP/2 multiplexing/pipelining)__

#### Production Bundling (`dist/` folder)

`npm run build` - build both app.js & vendor.js bundle for production

`npm run build:app` - build app source code into app.js (prod bundle) - minified, no source-maps

`npm run build:vendor` - build vendor packages into vendor.prod.js (prod bundle) - minified, no source-maps

`npm run build:debug` - build app source code into app.js (dev bundle) - non-minified with source-maps

#### Deployment

`npm run init` - install jspm packages and prebuilds vendor.dev.js bundle

`npm run init:deploy` - clone git repository in `/dist` folder (gh-pages branch)

`npm run deploy` - commit and push all changes found in `/dist` folder

#### Utility & Git Hooks

`npm run clean` - clean dist, node_modules, jspm_packages folder

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
