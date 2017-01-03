// Action Types - LOAD, CREATE, UPDATE, REMOVE
const UPDATE_BASE_CURRENCY = 'currencyConverter/UPDATE_BASE_CURRENCY';
const UPDATE_TARGET_CURRENCY = 'currencyConverter/UPDATE_TARGET_CURRENCY';
const UPDATE_BASE_VALUE = 'currencyConverter/UPDATE_BASE_VALUE';
const UPDATE_TARGET_VALUE = 'currencyConverter/UPDATE_TARGET_VALUE';

export function getAction<P, A>(actionCreator: (payload: P) => A): A {
  return {} as false || {} as A;
}

// Action Creators
// TODO: add type definition inference to type prop, should not be string
export const updateBaseCurrency = (payload: string) => ({ type: UPDATE_BASE_CURRENCY, payload });
export const updateTargetCurrency = (payload: string) => ({ type: UPDATE_TARGET_CURRENCY, payload });
export const updateBaseValue = (payload: string) => ({ type: UPDATE_BASE_VALUE, payload });
export const updateTargetValue = (payload: string) => ({ type: UPDATE_TARGET_VALUE, payload });

const a = getAction(updateBaseCurrency);
const b = getAction(updateTargetCurrency);
type Actions = typeof a | typeof b;

// Reducer
export interface ICurrencyConverterReducer {
  baseCurrency: string;
  targetCurrency: string;
  baseValue: string;
  targetValue: string;
}
const initialState: ICurrencyConverterReducer = {
  baseCurrency: 'PLN',
  targetCurrency: 'SEK',
  baseValue: '0',
  targetValue: '0',
};

export default function reducer(state = initialState, action: Actions): ICurrencyConverterReducer {
  switch (action.type) {
    case UPDATE_BASE_CURRENCY:
      return {
        ...state, baseCurrency: action.payload,
      };
    case UPDATE_TARGET_CURRENCY:
      return {
        ...state, targetCurrency: action.payload,
      };
    case UPDATE_BASE_VALUE:
      return {
        ...state, baseValue: action.payload,
      };
    case UPDATE_TARGET_VALUE:
      return {
        ...state, targetValue: action.payload,
      };

    default: return state;
  }
}
