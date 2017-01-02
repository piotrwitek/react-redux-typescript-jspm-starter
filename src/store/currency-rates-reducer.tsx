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
export const loadCurrencyRates = () => ({ type: LOAD_CURRENCY_RATES });
export const loadCurrencyRatesSuccess = (payload: IFixerServiceResponse) => ({
  type: LOAD_CURRENCY_RATES_SUCCESS, payload: payload,
});
export const loadCurrencyRatesError = (payload: string) => ({
  type: LOAD_CURRENCY_RATES_ERROR, payload: payload,
});

// Reducer
export interface ICurrencyRatesReducer {
  isLoading: boolean;
  errorMessage: string | null;
  lastUpdated: Date | null;
  base: string;
  rates: any;
}
const initialState: ICurrencyRatesReducer = {
  isLoading: false,
  errorMessage: null,
  lastUpdated: null,
  base: 'PLN',
  rates: RESPONSE_MOCK.rates,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case LOAD_CURRENCY_RATES:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case LOAD_CURRENCY_RATES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: null,
        rates: action.payload && action.payload.rates,
        lastUpdated: Date.now(),
      });
    case LOAD_CURRENCY_RATES_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });

    default: return state;
  };
}
