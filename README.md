# React / TypeScript / JSPM starter-kit
##### Easy to use starter kit to build modular web apps with React & TypeScript powered by JSPM/SystemJS

## Features
- folder structure
- default tsconfig for ES2015
- typescript nightly version - @next
- JSPM 0.17.X
- hot-module reload with systemjs-hot-reloader
- React-TypeScript usage example code
- React & ReactDOM typings
- development server with browser-sync (live-reload with css inject)
- bundling for production in ~/dist/ folder - test productions on http://localhost/dist/
- npm run scripts to automate bundling & dev server startup

## NPM Commands
npm start - start local development server with hot-reload
npm run server - start local development w/o hot-reload
npm run build-test - build for prod - debug version with source-maps
npm run build-prod - build for prod - minified w/o source-maps


## Installation

### Prerequisites
- node.js and git
- install jspm package globally to have jspm command available otherwise you can use local version from ~/node_modules/
    npm install jspm -g

### 1. Create new project folder
    mkdir my-project
    cd my-project

### 2. Clone repo
    git clone https://github.com/piotrwitek/react-ts-jspm-starter-kit.git

### 3. Install npm dependencies
    npm install
    
### 4. Run development server and start developing
    npm start
