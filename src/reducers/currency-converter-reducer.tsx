import { createAction } from 'redux-actions';
import Immutable from 'seamless-immutable';

// Action Types - LOAD, CREATE, UPDATE, REMOVE
const UPDATE_BASE_CURRENCY = 'currencyConverter/UPDATE_BASE_CURRENCY';
const UPDATE_TARGET_CURRENCY = 'currencyConverter/UPDATE_TARGET_CURRENCY';
const UPDATE_BASE_VALUE = 'currencyConverter/UPDATE_BASE_VALUE';
const UPDATE_TARGET_VALUE = 'currencyConverter/UPDATE_TARGET_VALUE';

// Action Creators
export const updateBaseCurrency = createAction<string>(UPDATE_BASE_CURRENCY);
export const updateTargetCurrency = createAction<string>(UPDATE_TARGET_CURRENCY);
export const updateBaseValue = createAction<number>(UPDATE_BASE_VALUE);
export const updateTargetValue = createAction<number>(UPDATE_TARGET_VALUE);

// Reducer
const initialState = Immutable({
  baseCurrency: 'PLN',
  targetCurrency: 'SEK',
  baseValue: 0,
  targetValue: 0
});

export default function reducer(state = initialState, action: FluxStandardAction<any> = {}) {
  switch (action.type) {
    case UPDATE_BASE_CURRENCY:
      return state.merge({
        baseCurrency: action.payload
      });
    case UPDATE_TARGET_CURRENCY:
      return state.merge({
        targetCurrency: action.payload
      });
    case UPDATE_BASE_VALUE:
      return state.merge({
        baseValue: action.payload
      });
    case UPDATE_TARGET_VALUE:
      return state.merge({
        targetValue: action.payload
      });

    default: return state;
  }
}
