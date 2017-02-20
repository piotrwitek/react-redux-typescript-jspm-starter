declare var window: Window & { devToolsExtension: any };
import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  default as currencyRatesReducer, State as CurrencyRatesState,
} from './currency-rates/reducer';
import {
  default as currencyConverterReducer, State as CurrencyConverterState,
} from './currency-converter/reducer';

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

export const store = createStore(
  rootReducer,
  recoverState(),
  window.devToolsExtension && window.devToolsExtension(),
);

// systemjs-hot-reloader hook, rehydrating the state of redux store
export function __reload(exports: any) {
  console.log(exports.store.getState());
}
