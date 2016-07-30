# React / TypeScript / JSPM / Hot-Reload - starter-kit
> Modern & Minimalistic boilerplate for building modular apps with React - utilizing power of TypeScript, ES2016, Hot-Reload, async/await, ES Modules & in-browser transpiling powered by JSPM/SystemJS.

> Keeping up-to-date with new releases of React / TypeScript / JSPM, and to follow changes in the best practices as they might change with a new updates.

> TypeScript 2.0 on horizon - until the official release I will use beta branch for planned update.

## Features
- CLEAN - keep at minimal dependencies
- FAST-DEV-FEEDBACK-LOOP - dev server with hot-module-reload, bundle-free on-the-fly ES2016/TypeScript transpilation - using [jspm-hmr](https://www.npmjs.com/package/jspm-hmr)
- BEST-TYPESCRIPT-DEV-WORKFLOW - in browser module loading / no pre-compilation / no bundling / blazing fast hot-module-reload
- REACT-BEST-PRACTICES - no mixins, no ref string - ref callback, no bind - ES Class Fields, no new functions in render methods, render lists in dedicated components, don't use array index as key, ES6 style PureRenderMixin
- NO-SETUP - npm install && npm start to start coding
- COMPLETE-WORKFLOW - helpful npm scripts and tasks, github hooks, linter, test-harness etc.
- TDD-READY - test-harness setup with Tape (blue-tape) - included example code and @types
- EXTRAS - css only loader while waiting for React to "kick in"

##### Learn TypeScript from sample code
- Typescript definitions for third-party libraries
- solid tsconfig setup for ES2016 support
- get typings by `using npm i -D @types`
- async/await

##### Learn React from sample code
- React with TypeScript using ES6 classes
- Redux with TypeScript (TODO)
- Unit-testing the behaviour and rendering results of Components (TODO)

##### JSPM
- JSPM 0.17.X - most recent version, staying up-to-date with best-practices
- static dev-bundle setup for fast full-page reload (this will make JSPM/SystemJS workflow super fast in development, certainly as fast as webpack)
- automatic bundle creation for production in `~/dist/` folder - accessible on dev server `http://localhost/dist/`
- importing and bundling CSS files using `plugin-css`

NB: - temporarily using regenerator (NO-BABEL) to transpile generators/async/await to ES5 for production bundle (soon with TypeScript 2.1 will be removed completely - only TS)

---

## Making JSPM loading fast - Static Bundle for External Deps
Important point to keep in mind when running dev server with JSPM is to create a static bundle of external dependencies. As they only change when updated through NPM, it is best to bundle them all together and load as one package instead of separately making hundreds of requests slowing down page reload.
That way your only your modules from src are still loaded separately making possible to hot-reload them instantly without rebundling, and do full-page reload if necessary very quickly. This is the best of two development approaches (hot-reload vs. bundling) mixed together.

My test procedure:

1. run `npm run unbundle` -> open network tab in chrome dev tools -> reload the page -> check logged results
2. run `npm run bundle-dev` -> open network tab in chrome dev tools -> reload page -> compare logged results with previous

---

## Installation

#### Prerequisites
- Node.js and Git
- Install JSPM with global flag to have jspm command available: `npm install jspm -g` (otherwise you'll have to use a local version from `~/node_modules/`)


#### 1. Clone repo
    git clone https://github.com/piotrwitek/react-ts-jspm-starter-kit.git my-project-folder

#### 2. Install npm dependencies
    npm install

#### 3. Run development server with HMR and enjoy best possible dev feedback-loop
    npm start

---

## Usage

#### Dev Workflow
1. `npm run bundle-dev` - _**OPTIONAL:** re-run only when your dependencies has changed_
2. `npm start`

#### Build for Production Workflow
1. `npm run build`
2. `npm run build-deps` - _**OPTIONAL:** re-run only when your dependencies has changed_
3. open `http://localhost/dist/` to check
4. deploy 'dist' contents on your server

---

## All Npm Commands & Scripts

`npm start` - start local dev server with hot-module-reload for JSPM [jspm-hmr](https://www.npmjs.com/package/jspm-hmr)

#### Development Bundling

`npm run bundle-dev` - bundle static dependencies for quick full-page reload, app sources remain as seperate modules for on-the-fly HMR & transpilation

`npm run unbundle` - un-bundle static dependencies (usefull when changing app dependencies)

#### Production Bundling (`dist/` folder)

`npm run build` - build app bundle (only your app source) - minified, no source-maps

`npm run build-deps` - build dependency bundle (only external dependencies) - minified, no source-maps

`npm run build-all` - build both app & dependecy bundle

`npm run build-debug` - build app bundle - debug version with source-maps

#### Deployment

`npm run init-deploy` - initialize new git repository in `/dist` folder aiming at gh-pages branch

`npm run deploy` - checkout, add, commit and push changes in `/dist` folder to gh-pages branch

#### Utility & Git Hooks

`npm run bd` - build and deploy your app bundle

`npm run bdd` - build and deploy your deps bundle

`npm run lint` - run linter

`npm run test` - run test suites

`npm run precommit` - pre commit git hook - runs linter
    
`npm run prepush` - pre push git hook - runs linter and tests

---

## Dependencies
- https://github.com/Microsoft/TypeScript/
- https://github.com/facebook/react/
- https://github.com/jspm/jspm-cli/
- https://github.com/piotrwitek/jspm-hmr/

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
