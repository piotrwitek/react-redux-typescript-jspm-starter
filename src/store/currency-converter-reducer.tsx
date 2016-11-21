import { createAction, Action } from 'redux-actions';
import * as Immutable from 'seamless-immutable';

// Action Types - LOAD, CREATE, UPDATE, REMOVE
const UPDATE_BASE_CURRENCY = 'currencyConverter/UPDATE_BASE_CURRENCY';
const UPDATE_TARGET_CURRENCY = 'currencyConverter/UPDATE_TARGET_CURRENCY';
const UPDATE_BASE_VALUE = 'currencyConverter/UPDATE_BASE_VALUE';
const UPDATE_TARGET_VALUE = 'currencyConverter/UPDATE_TARGET_VALUE';

// Action Creators
export const updateBaseCurrency = createAction<string>(UPDATE_BASE_CURRENCY);
export const updateTargetCurrency = createAction<string>(UPDATE_TARGET_CURRENCY);
export const updateBaseValue = createAction<string>(UPDATE_BASE_VALUE);
export const updateTargetValue = createAction<string>(UPDATE_TARGET_VALUE);

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

export default function reducer(state = Immutable.from(initialState), action: Action<any>) {
  switch (action.type) {
    case UPDATE_BASE_CURRENCY:
      return state.merge({
        baseCurrency: action.payload,
      });
    case UPDATE_TARGET_CURRENCY:
      return state.merge({
        targetCurrency: action.payload,
      });
    case UPDATE_BASE_VALUE:
      return state.merge({
        baseValue: action.payload,
      });
    case UPDATE_TARGET_VALUE:
      return state.merge({
        targetValue: action.payload,
      });

    default: return state;
  }
}
