/// <reference path="../typings/tsd.d.ts" />
// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// custom
import {MyView} from './my-first';

// html declaration
var dom = (
  <div>
  <MyView name="Piotr" age={33} unknown-prop={3} />
  </div>
);

var appContainer = document.getElementById("app-container");
ReactDOM.render(dom, appContainer);
