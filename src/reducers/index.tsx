import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currencyRatesReducer from './currency-rates-reducer';
import currencyConverterReducer from './currency-converter-reducer';

export const reducers = combineReducers({
  routing: routerReducer,
  currencyRates: currencyRatesReducer,
  currencyConverter: currencyConverterReducer
});
