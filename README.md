# React / TypeScript / JSPM - starter-kit with Hot-Reload
> Modern & Minimalistic boilerplate for building modular apps with React - utilizing power of TypeScript, ES2016, Hot-Reload, async/await, ES Modules & in-browser transpiling powered by JSPM/SystemJS.

> Main goal of this boilerplate project is to keep up-to-date with the new releases of React / TypeScript / JSPM, and to follow changes in the best practices as they might change with a new updates.

> TypeScript 2.0 on horizon - until the official release I will use beta branch for planned update.

## Features

##### Core
- clean with minimal dependencies to make React & TypeScript work
- dead-simple dev server with hot-module-reload and in-browser transpiling - [jspm-hmr](https://www.npmjs.com/package/jspm-hmr)
- easy start - npm install && npm start to start coding
- helpful npm scripts to automate development workflow tasks
- github hooks using husky
- nice css loader while waiting for React to "kick in"

##### TypeScript
- Typescript custom ambient definitions for external libraries - best-practices & example
- tsconfig setup for ES2016 support
- using npm @types instead of typings
- unit testing examples in TypeScript with Tape
- async/await - example code (WIP)
- using regenerator instead of Babel to transpile generators/async/await to ES5 (soon with TypeScript 2.1 release it will be not needed anymore)

##### React 
- React usage with TypeScript and ES6 - example code
- Redux Store with TypeScript - example code (TODO)
- Unit-testing behaviour and rendering of React Components (TODO)

##### JSPM
- JSPM 0.17.X - most recent beta version up stay up-to-date with best-practices
- added static dev-bundle (external deps) setup for quick full-page reload (this will make JSPM lighting fast)
- bundling for production in `~/dist/` folder - open production build on dev server `http://localhost/dist/`
- importing and bundling CSS dependencies using JSPM `plugin-css`

---

## Making JSPM loading fast - Static Bundle for External Deps
Important point to keep in mind when running dev server with JSPM is to create a static bundle of external dependencies. As they only change when updated through NPM, it is best to bundle them all together and load as one package instead of separately making hundreds of requests slowing down page reload.
That way your only your modules from src are still loaded separately making possible to hot-reload them instantly without rebundling, and do full-page reload if necessary very quickly. This is the best of two development approaches (hot-reload vs. bundling) mixed together.

My test procedure:

1. run `npm run unbundle` -> open network tab in chrome dev tools -> reload the page -> check logged results
2. run `npm run bundle-dev` -> open network tab in chrome dev tools -> reload page -> compare logged results with previous

---

## Usage

#### NPM Commands

`npm start` - start local dev server with hot-module-reload for JSPM [jspm-hmr](https://www.npmjs.com/package/jspm-hmr)

`npm run bundle-dev` - inject static dev-bundle to JSPM config for quick full-page reload

`npm run unbundle` - un-inject static dev-bundle from JSPM config

`npm run build` - build production app bundle (only your app source) - optimized minified version w/o source-maps (dist/ folder)

`npm run build-debug` - same as build but debug version with source-maps

`npm run build-deps` - build production dependency bundle (only external dependencies) (dist/ folder)

#### Dev Workflow
1. `npm run bundle-dev` - _**OPTIONAL:** run only when your dependencies has changed_
2. `npm start`

#### Build for Production Workflow (WIP -> in next release)
1. `npm run build`
2. `npm run build-deps` - _**OPTIONAL:** run only when your dependencies has changed_
3. open `http://localhost/dist/` to check
4. deploy 'dist' contents on your server

---

## Installation

#### Prerequisites
- node.js and git
- install JSPM with global flag to have jspm command available: `npm install jspm -g` (otherwise you'll have to use a local version from `~/node_modules/`)


#### 1. Create new project folder
    mkdir my-project && cd my-project

#### 2. Clone repo
    git clone https://github.com/piotrwitek/react-ts-jspm-starter-kit.git

#### 3. Install npm dependencies
    npm install

#### 4. Run development server and start developing
    npm start


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
