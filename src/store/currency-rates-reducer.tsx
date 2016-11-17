import { createAction, Action } from 'redux-actions';
import * as Immutable from 'seamless-immutable';

const RATES_MOCK = { 'PLN': 1, 'SEK': 2.1919 };

// Action Types - LOAD, CREATE, UPDATE, REMOVE
const LOAD_CURRENCY_RATES = 'currencyRates/LOAD_CURRENCY_RATES';
const LOAD_CURRENCY_RATES_SUCCESS = 'currencyRates/LOAD_CURRENCY_RATES_SUCCESS';
const LOAD_CURRENCY_RATES_ERROR = 'currencyRates/LOAD_CURRENCY_RATES_ERROR';

// Action Creators
export const loadCurrencyRates = createAction(LOAD_CURRENCY_RATES);
export const loadCurrencyRatesSuccess = createAction(LOAD_CURRENCY_RATES_SUCCESS);
export const loadCurrencyRatesError = createAction(LOAD_CURRENCY_RATES_ERROR);

// Reducer
export interface ICurrencyRates {
  isLoading: boolean;
  errorMessage: string | null;
  lastUpdated: Date | null;
  base: string;
  rates: any;
  currencies: string[];
}
const initialState: ICurrencyRates = {
  isLoading: false,
  errorMessage: null,
  lastUpdated: null,
  base: 'PLN',
  rates: RATES_MOCK,
  currencies: Object.keys(RATES_MOCK)
};

export default function reducer(state = Immutable.from(initialState), action: Action<any>) {
  switch (action.type) {
    case LOAD_CURRENCY_RATES:
      return state.merge({
        isLoading: true
      });
    case LOAD_CURRENCY_RATES_SUCCESS:
      return state.merge({
        isLoading: false,
        errorMessage: null,
        results: action.payload,
        lastUpdated: Date.now()
      });
    case LOAD_CURRENCY_RATES_ERROR:
      return state.merge({
        isLoading: false,
        errorMessage: action.payload
      });

    default: return state;
  }
}
