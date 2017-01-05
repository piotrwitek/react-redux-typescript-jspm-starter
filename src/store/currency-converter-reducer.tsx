// Action Types - LOAD, CREATE, UPDATE, REMOVE
enum ActionTypes {
  UPDATE_BASE_CURRENCY, UPDATE_TARGET_CURRENCY,
  UPDATE_BASE_VALUE, UPDATE_TARGET_VALUE,
}

type ActionsUnion =
  {
    type: ActionTypes.UPDATE_BASE_CURRENCY, payload: string,
  } | {
    type: ActionTypes.UPDATE_TARGET_CURRENCY, payload: string,
  } | {
    type: ActionTypes.UPDATE_BASE_VALUE, payload: string,
  } | {
    type: ActionTypes.UPDATE_TARGET_VALUE, payload: string,
  };


// Action Creators
export const updateBaseCurrency = (payload: string): ActionsUnion => ({
  type: ActionTypes.UPDATE_BASE_CURRENCY, payload,
});
export const updateTargetCurrency = (payload: string): ActionsUnion => ({
  type: ActionTypes.UPDATE_TARGET_CURRENCY, payload,
});
export const updateBaseValue = (payload: string): ActionsUnion => ({
  type: ActionTypes.UPDATE_BASE_VALUE, payload,
});
export const updateTargetValue = (payload: string): ActionsUnion => ({
  type: ActionTypes.UPDATE_TARGET_VALUE, payload,
});

// State
export interface ICurrencyConverterReducer {
  baseCurrency: string;
  targetCurrency: string;
  baseValue: string;
  targetValue: string;
}
export const initialState: ICurrencyConverterReducer = {
  baseCurrency: 'PLN',
  targetCurrency: 'SEK',
  baseValue: '0',
  targetValue: '0',
};

// Reducer
export default function reducer(state = initialState, action: ActionsUnion): ICurrencyConverterReducer {
  switch (action.type) {
    case ActionTypes.UPDATE_BASE_CURRENCY:
      return {
        ...state, baseCurrency: action.payload,
      };
    case ActionTypes.UPDATE_TARGET_CURRENCY:
      return {
        ...state, targetCurrency: action.payload,
      };
    case ActionTypes.UPDATE_BASE_VALUE:
      return {
        ...state, baseValue: action.payload,
      };
    case ActionTypes.UPDATE_TARGET_VALUE:
      return {
        ...state, targetValue: action.payload,
      };

    default: return state;
  }
}
