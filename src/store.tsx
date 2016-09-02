import { createStore } from 'redux';
import { reducers } from './reducers/index';
declare const window: any;

const recoverState = () => ({});

export const store = createStore(
  reducers,
  recoverState(),
  window.devToolsExtension && window.devToolsExtension()
);

// hot-reload hook, rehydrating the state of redux store
export function __reload(exports) {
  console.log(exports.store.getState());
}

// custom hot-reload using reducer replacement
// const hotReloadReducer = (state, action) => action.payload;
// if (exports.store) {
//   const localStore = exports.store;
//   const prevState = localStore.getState();
//
//   localStore.replaceReducer(hotReloadReducer);
//   localStore.dispatch({ type: null, payload: prevState });
//   console.log('store rehydrated', localStore.getState());
//
//   localStore.replaceReducer(rootReducer);
