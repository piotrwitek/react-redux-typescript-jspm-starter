/// <reference path="../typings/tsd.d.ts" />
// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// custom
import {MyView} from './my-first';
// main entry point called by the index
export function main(el: HTMLElement): void {
  // html declaration
  var dom = (
    <div>
    <MyView name="Piotr" age={33} unknown-prop={3} />
    </div>
  );
  ReactDOM.render(dom, el);
}
