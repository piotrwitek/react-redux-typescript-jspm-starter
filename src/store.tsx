import { createStore } from 'redux';
import { initialState, rootReducer } from './reducers/index';

export const store = createStore(rootReducer, initialState);

// hot-reload hook, rehydrating the state of redux store
export function __reload(exports) {
  console.log(exports.store.getState());
  // if (exports.store) {
  //   const localStore = exports.store;
  //   const prevState = localStore.getState();
  //
  //   localStore.replaceReducer(hotReloadReducer);
  //   localStore.dispatch({ type: null, payload: prevState });
  //   // console.log('store rehydrated', localStore.getState());
  //
  //   localStore.replaceReducer(rootReducer);
  // }
}
