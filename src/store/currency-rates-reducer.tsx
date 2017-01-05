const CACHED_RESPONSE: IFixerServiceResponse = {
  base: 'PLN',
  date: new Date().toISOString(),
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
  readonly isLoading: boolean;
  readonly errorMessage: string | null;
  readonly lastUpdated: number | null;
  readonly base: string;
  readonly rates: any;
  readonly date: string;
}
const initialState: ICurrencyRatesReducer = {
  isLoading: false,
  errorMessage: null,
  lastUpdated: null,
  base: CACHED_RESPONSE.base,
  rates: CACHED_RESPONSE.rates,
  date: CACHED_RESPONSE.date,
};

export default function reducer(state = initialState, action: any): ICurrencyRatesReducer {
  switch (action.type) {
    case LOAD_CURRENCY_RATES:
      return {
        ...state, isLoading: true, errorMessage: null,
      };
    case LOAD_CURRENCY_RATES_SUCCESS:
      const { base, rates, date} = action.payload;
      return {
        ...state, isLoading: false, lastUpdated: Date.now(), base, rates, date,
      };
    case LOAD_CURRENCY_RATES_ERROR:
      return {
        ...state, isLoading: false, errorMessage: action.payload,
      };

    default: return state;
  }
}
