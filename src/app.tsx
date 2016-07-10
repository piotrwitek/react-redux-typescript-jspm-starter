// enable hot-reloader
export function __reload(prevModule) {
  if (prevModule.appComponent.state)
    appComponent.setState(prevModule.appComponent.state);
}

// auto create app container if missing
let appContainer = document.getElementById('app-container');
if (appContainer == null) {
  appContainer = document.createElement('div');
  appContainer.id = 'app-container';
  document.body.appendChild(appContainer);
}

// lib imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// components imports
import {Main} from './components/main';

const message = 'React / TypeScript / JSPM - Starter-Kit';
export var appComponent: any = ReactDOM.render(<Main welcomeMessage={message} />, appContainer);
