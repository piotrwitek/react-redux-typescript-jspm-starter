import { createAction } from 'redux-actions';
import Immutable from 'seamless-immutable';

// Action Types - LOAD, CREATE, UPDATE, REMOVE
export const UPDATE_BASE_CURRENCY = 'currencyConverter/UPDATE_BASE_CURRENCY';
export const UPDATE_TARGET_CURRENCY = 'currencyConverter/UPDATE_TARGET_CURRENCY';
export const UPDATE_BASE_VALUE = 'currencyConverter/UPDATE_BASE_VALUE';
export const UPDATE_TARGET_VALUE = 'currencyConverter/UPDATE_TARGET_VALUE';

// Action Creators
export const updateBaseCurrency = createAction(UPDATE_BASE_CURRENCY, (event) => {
  return event.target.value;
});
export const updateTargetCurrency = createAction(UPDATE_TARGET_CURRENCY, (event) => {
  return event.target.value;
});
export const updateBaseValue = createAction(UPDATE_BASE_VALUE, (event) => {
  return event.target.value;
});
export const updateTargetValue = createAction(UPDATE_TARGET_VALUE, (event) => {
  return event.target.value;
});

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
