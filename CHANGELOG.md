### 0.1.0
Initial release
### 0.2.0
changed JSPM to beta
changed typescript to next
added hot-module reloading
updated folder structure
added npm run scripts
added semantic-ui
### 0.3.0
tsconfig update
example code improvement
jspm css plugin
### 0.3.1
remove semantic-ui dep - opinion on ui-kit should be your choice
### 0.3.2
usage experience update
### 0.3.3
added jspm clean-css dep for prod bundling
### 0.4.0
re-factored to more meaningful example
added simple app store
### 0.5.0
removed browser-sync dep - this dep has too many features for this bare minimum starter-kit and also should your rather your choice
added regenerator for ES5 async/await transpilation (soon with TypeScript 2.0 release it will be not needed)
added custom ambient definitions for external libraries best-practice example
updated index.html and added nice css loader while waiting for React to "kick in"
added new hot-module-reload dependency (jspm-hmr) for easier and cleaner hot-reload solution
added static dev-bundle with external deps for quick full-page reload, this is most important as this will make JSPM very fast
updated tsconfig for ES2015
added editor config and linter
updated typings
