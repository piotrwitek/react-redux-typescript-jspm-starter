declare const System: any;

declare module 'example-module' {
  export const exampleVariable: number;
  export function exampleFunction(param: string): boolean;
  export default {
    exampleVariable: exampleVariable,
    exampleFunction: exampleFunction
  };
}
