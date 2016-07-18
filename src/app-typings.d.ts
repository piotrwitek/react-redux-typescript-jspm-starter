declare const System: any;

// example ES Module declaration
declare module 'example-module' {
  export const exampleVariable: number;
  export function exampleFunction(param: string): boolean;
  export default {
    exampleVariable: exampleVariable,
    exampleFunction: exampleFunction
  };
}

// example of external React Component declaration
declare module 'example-react-external-component' {
  import * as React from 'react';

  export function fetchData(name: string): Promise<string[]>;

  export class ReactExternalComponent extends React.Component<IProps, any> { }
  interface IProps {
    name: string;
    age: number;
  }

  export default {
    fetchData: fetchData,
    ReactExternalComponent: ReactExternalComponent
  };
}
