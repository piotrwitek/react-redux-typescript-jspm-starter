// System Global
type System = { global: Global, production: boolean };
type Global = {};
declare const System: System;
declare module 'es6-promise' {
  const def: any;
  export default def;
}

// JSON Loader
declare module '*!json' {
  const def: any;
  export default def;
}


// example external ES Module declaration
declare module 'example-module' {
  // public variables
  export const exampleVariable: number;

  // public functions
  export function exampleFunction(param: string): boolean;

  // default export
  export default {
    exampleVariable: exampleVariable,
    exampleFunction: exampleFunction
  };
}

// example external React Module declaration
declare module 'example-react-module' {
  import * as React from 'react';

  // public components
  interface ReactComponentProps extends React.Props<ReactComponent> {
    name: string;
    age: number;
  }
  export class ReactComponent extends React.Component<ReactComponentProps, any> {
    static somePrototypeMethod(param: string): boolean;
  }

  // public functions
  export function fetchData(name: string): Promise<string[]>;

  // default export
  export default {
    ReactComponent: ReactComponent,
    fetchData: fetchData
  };
}
