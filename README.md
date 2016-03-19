# React / TypeScript / JSPM starter-kit
Unopinionated starter-kit to build modular web apps with React & TypeScript powered by JSPM/SystemJS

## Features
- unopinionated, just core stuff and dev server setup with hot-reload - the rest is up to you
- fully automated - just npm install, npm start to run dev server and you're ready to code
- pretty usual folder structure - src/dist
- React-TypeScript usage example code
- React & ReactDOM typings
- typescript nightly version (@next) for coolest new features, default tsconfig for ES2015
- JSPM 0.17.X with hot-module reload enabled and example code (systemjs-hot-reloader)
- development server with browser-sync (live-reload & css inject)
- bundling for production in ~/dist/ folder - test productions available on http://localhost/dist/
- npm run scripts to automate bundling & dev server startup

---

## NPM Commands
```bash
    npm start - start local development server with hot-reload
    npm run server - start local development w/o hot-reload
    npm run build-test - build for prod - debug version with source-maps
    npm run build-prod - build for prod - minified w/o source-maps
```

---

## Installation

### Prerequisites
- node.js and git
- install jspm package globally to have jspm command available otherwise you can use local version from ~/node_modules/
    `npm install jspm -g`

### 1. Create new project folder
    `mkdir my-project && cd my-project`

### 2. Clone repo
    `git clone https://github.com/piotrwitek/react-ts-jspm-starter-kit.git`

### 3. Install npm dependencies
    `npm install`
    
### 4. Run development server and start developing
    `npm start`

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