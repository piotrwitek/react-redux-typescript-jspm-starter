//import 'systemjs-hot-reloader/default-listener.js';
export function __reload(m) {
	if (m.component.state)
	component.setState(m.component.state);
}

// style imports
//import  './app.css!';
// lib imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// components imports
import {MyComponent} from './components/my-component';

// html declaration
let jsx = (
  <div>
  	<MyComponent name="Piotr" age={33} />
  </div>
);

export let component = ReactDOM.render(jsx, document.getElementById('app-container'));
