import { createAction, handleActions, Action } from 'redux-actions';
import * as Immutable from 'seamless-immutable';

const RESPONSE_MOCK: IFixerServiceResponse = {
  base: 'PLN',
  date: Date.now().toString(),
  rates: { 'PLN': 1, 'SEK': 2.1919 },
};

// Action Types - LOAD, CREATE, UPDATE, REMOVE
const LOAD_CURRENCY_RATES = 'currencyRates/LOAD_CURRENCY_RATES';
const LOAD_CURRENCY_RATES_SUCCESS = 'currencyRates/LOAD_CURRENCY_RATES_SUCCESS';
const LOAD_CURRENCY_RATES_ERROR = 'currencyRates/LOAD_CURRENCY_RATES_ERROR';

// Action Creators
export const loadCurrencyRates = createAction<void>(LOAD_CURRENCY_RATES);
export const loadCurrencyRatesSuccess = createAction<IFixerServiceResponse>(LOAD_CURRENCY_RATES_SUCCESS);
export const loadCurrencyRatesError = createAction<string>(LOAD_CURRENCY_RATES_ERROR);


// Reducer
export interface ICurrencyRatesReducer {
  isLoading: boolean;
  errorMessage: string | null;
  lastUpdated: Date | null;
  base: string;
  rates: any;
}

const initialState = Immutable.from<ICurrencyRatesReducer>({
  isLoading: false,
  errorMessage: null,
  lastUpdated: null,
  base: 'PLN',
  rates: RESPONSE_MOCK.rates,
});

export default handleActions<any, any>({
  [LOAD_CURRENCY_RATES]: (state: typeof initialState, action: Action<void>) => state.merge({
    isLoading: true,
  }),
  [LOAD_CURRENCY_RATES_SUCCESS]: (state: typeof initialState, action: Action<IFixerServiceResponse>) => state.merge({
    isLoading: false,
    errorMessage: null,
    rates: action.payload && action.payload.rates,
    lastUpdated: Date.now(),
  }),
  [LOAD_CURRENCY_RATES_ERROR]: (state: typeof initialState, action: Action<string>) => state.merge({
    isLoading: false,
    errorMessage: action.payload,
  }),
}, initialState);
