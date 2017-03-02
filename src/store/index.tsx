declare var window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {
  default as currencyRatesReducer, State as CurrencyRatesState,
} from './currency-rates/reducer';
import {
  default as currencyConverterReducer, State as CurrencyConverterState,
} from './currency-converter/reducer';
import { epics as currencyConverterEpics } from './currency-converter/epics';

export type RootState = {
  routing: any;
  currencyRates: CurrencyRatesState;
  currencyConverter: CurrencyConverterState;
};

const rootReducer = combineReducers<RootState>({
  routing: routerReducer,
  currencyRates: currencyRatesReducer,
  currencyConverter: currencyConverterReducer,
});

// rehydrating state on app start: implement here...
const recoverState = (): RootState => ({} as RootState);

const rootEpic = combineEpics(
  currencyConverterEpics,
);
const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  recoverState(),
  composeEnhancers(applyMiddleware(epicMiddleware)),
);
export type Store = { getState: () => RootState, dispatch: Function };

// systemjs-hot-reloader hook, rehydrating the state of redux store
export function __reload(exports: any) {
  console.log(exports.store.getState());
}
