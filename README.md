# react-ts-jspm-starter-kit
React / TypeScript / JSPM - Simple and clean starter kit to build web apps with React, TypeScript and JSPM.

## Features
- React & ReactDOM typings from DefinitelyTyped
- tsconfig
- React-TypeScript integration example code
- server.js - browser-sync with live reload
- bundle and minify with "npm run bundler" (~/bundle/ to run bundle build)

## Installation
### 1. Create new project folder
    mkdir my-project
    cd my-project

### 2. Install JSPM CLI (prefer local install to lock down JSPM)
    npm install jspm --save-dev

### 3. Initialize JSPM
    jspm init

    Package.json file does not exist, create it? [yes]:
    Would you like jspm to prefix the jspm package.json properties under jspm? [yes]:
    Enter server baseURL (public folder path) [./]:
    Enter jspm packages folder [.\jspm_packages]:
    Enter config file path [.\config.js]:
    Configuration file config.js doesn't exist, create it? [yes]:
    Enter client baseURL (public folder URL) [/]:
    Do you wish to use a transpiler? [yes]:
    Which ES6 transpiler would you like to use, Babel, TypeScript or Traceur? [babel]:typescript

### 4. Install React
    jspm install react react-dom