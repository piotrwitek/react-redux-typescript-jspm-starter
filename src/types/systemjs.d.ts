declare namespace SystemJSLoader {
  interface System {
    production: boolean;
  }
}

// JSON Loader
declare module '*!json' {
  const def: any;
  export default def;
}
