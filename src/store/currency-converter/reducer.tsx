import { ActionCreator } from '../action-creator';

import { latestResponse } from '../../services/fixer/fixtures';
const INITIAL_BASE_CURRENCY = latestResponse.base;
const INITIAL_TARGET_CURRENCY = Object.entries(latestResponse.rates)[0][0];

// Action Creators
export const ActionCreators = {
  ChangeBaseCurrency: new ActionCreator<'ChangeBaseCurrency', string>('ChangeBaseCurrency'),
  ChangeTargetCurrency: new ActionCreator<'ChangeTargetCurrency', string>('ChangeTargetCurrency'),
  ChangeBaseValue: new ActionCreator<'ChangeBaseValue', string>('ChangeBaseValue'),
  ChangeTargetValue: new ActionCreator<'ChangeTargetValue', string>('ChangeTargetValue'),
  UpdateCurrencyConverterState: new ActionCreator<'UpdateCurrencyConverterState', Partial<State>>('UpdateCurrencyConverterState'),
};

// Action Types
export type Action = typeof ActionCreators[keyof typeof ActionCreators];

// State
export type State = {
  readonly baseCurrency: string;
  readonly targetCurrency: string;
  readonly baseValue: string;
  readonly targetValue: string;
};
export const initialState: State = {
  baseCurrency: INITIAL_BASE_CURRENCY,
  targetCurrency: INITIAL_TARGET_CURRENCY,
  baseValue: '100',
  targetValue: (latestResponse.rates[INITIAL_TARGET_CURRENCY] * 100).toString(),
};

// Reducer
export default function reducer(state: State = initialState, action: Action): State {
  let partialState: Partial<State> | undefined;

  if (action.type === ActionCreators.ChangeBaseCurrency.type) {
    partialState = { baseCurrency: action.payload };
  }
  if (action.type === ActionCreators.ChangeTargetCurrency.type) {
    partialState = { targetCurrency: action.payload };
  }
  if (action.type === ActionCreators.ChangeBaseValue.type) {
    partialState = { baseValue: action.payload };
  }
  if (action.type === ActionCreators.ChangeTargetValue.type) {
    partialState = { targetValue: action.payload };
  }
  if (action.type === ActionCreators.UpdateCurrencyConverterState.type) {
    partialState = action.payload;
  }

  return partialState != null ? { ...state, ...partialState } : state;
}
