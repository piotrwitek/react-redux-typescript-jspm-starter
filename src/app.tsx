// enable hot-reloader
export function __reload(prevModule) {
  if (prevModule.appComponent.state)
    appComponent.setState(prevModule.appComponent.state);
}

// create app container
var appContainer = document.getElementById('app-container');
if (appContainer == undefined) {
  appContainer = document.createElement('div');
  appContainer.id = 'app-container';
  document.body.appendChild(appContainer);
}

// lib imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// components imports
import {App} from './components/app';

// todo: refactor name to appComponent
export var appComponent = ReactDOM.render(<App />, appContainer);
