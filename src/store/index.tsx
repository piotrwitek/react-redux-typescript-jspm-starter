declare var window: Window & { devToolsExtension: any };
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createStore } from 'redux';

import {
  default as currencyRatesReducer, ICurrencyRates
} from './currency-rates-reducer';
import {
  default as currencyConverterReducer, ICurrencyConverter
} from './currency-converter-reducer';

export interface IRootReducer {
  routing: any;
  currencyRates: ICurrencyRates;
  currencyConverter: ICurrencyConverter;
}

export const rootReducer = combineReducers({
  routing: routerReducer,
  currencyRates: currencyRatesReducer,
  currencyConverter: currencyConverterReducer
});

// rehydrating state on app start: implement here...
const recoverState = () => ({});

export const store = createStore(
  rootReducer,
  recoverState(),
  window.devToolsExtension && window.devToolsExtension()
);

// systemjs-hot-reloader hook, rehydrating the state of redux store
export function __reload(exports: any) {
  console.log(exports.store.getState());
}
