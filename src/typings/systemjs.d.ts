// SystemJS 
type System = { global: Global, production: boolean };
type Global = {};
declare const System: System;

// JSON Loader
declare module '*!json' {
  const def: any;
  export default def;
}
