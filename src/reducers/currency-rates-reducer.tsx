import { createAction } from 'redux-actions';
import Immutable from 'seamless-immutable';

const RATES_MOCK = { 'PLN': 1, 'SEK': 2.1919 };

// Action Types - LOAD, CREATE, UPDATE, REMOVE
export const LOAD_CURRENCY_RATES = 'currencyRates/LOAD';
export const LOAD_CURRENCY_RATES_SUCCESS = 'currencyRates/LOAD_SUCCESS';
export const LOAD_CURRENCY_RATES_ERROR = 'currencyRates/LOAD_ERROR';

// Action Creators
export const loadCurrencyRates = createAction(LOAD_CURRENCY_RATES);
export const loadCurrencyRatesSuccess = createAction(LOAD_CURRENCY_RATES_SUCCESS);
export const loadCurrencyRatesError = createAction(LOAD_CURRENCY_RATES_ERROR);

// Reducer
const initialState = Immutable({
  isLoading: false,
  errorMessage: null,
  lastUpdated: null,
  base: 'PLN',
  rates: RATES_MOCK,
  currencies: Object.keys(RATES_MOCK)
});

export default function reducer(state = initialState, action: FluxStandardAction<any> = {}) {
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
