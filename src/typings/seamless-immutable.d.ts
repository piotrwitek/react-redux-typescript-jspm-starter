declare module 'seamless-immutable' {
  interface IImmutableArray {
    asMutable(): any[];
  }
  function Immutable(array: any[]): IImmutableArray;

  interface IImmutableObject {
    from(object: Object): IImmutableObject;
    merge(obj: Object): IImmutableObject;
    without(key: string | string[], ...restKeys: string[]): IImmutableObject;
    asMutable(): Object;
  }
  function Immutable(object: Object): IImmutableObject;

  export default Immutable;
}
