import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/map';

import { Store } from '../index';
import { ActionCreators, Action } from './reducer';
import { convertValueWithBaseRateToTargetRate } from './utils';
import * as CurrencyConverterSelectors from './selectors';
import * as CurrencyRatesSelectors from '../currency-rates/selectors';

// Epics - handling side effects of actions
const changeCurrencyEpic = (action$: any, store: Store) =>
  action$.ofType(
    ActionCreators.ChangeBaseCurrency.type,
    ActionCreators.ChangeTargetCurrency.type,
  ).map((action: typeof ActionCreators.ChangeBaseCurrency) => ({
    type: ActionCreators.UpdateCurrencyConverterState.type,
    payload: {
      targetValue: convertValueWithBaseRateToTargetRate(
        CurrencyConverterSelectors.getBaseValue(store.getState()),
        CurrencyRatesSelectors.getBaseCurrencyRate(store.getState()),
        CurrencyRatesSelectors.getTargetCurrencyRate(store.getState()),
      ),
    },
  } as Action));

const changeBaseValueEpic = (action$: any, store: Store) =>
  action$.ofType(ActionCreators.ChangeBaseValue.type)
    .map((action: typeof ActionCreators.ChangeBaseValue) => ({
      type: ActionCreators.UpdateCurrencyConverterState.type,
      payload: {
        targetValue: convertValueWithBaseRateToTargetRate(
          action.payload,
          CurrencyRatesSelectors.getBaseCurrencyRate(store.getState()),
          CurrencyRatesSelectors.getTargetCurrencyRate(store.getState()),
        ),
      },
    } as Action));

const changeTargetValueEpic = (action$: any, store: Store) =>
  action$.ofType(ActionCreators.ChangeTargetValue.type)
    .map((action: typeof ActionCreators.ChangeTargetValue) => ({
      type: ActionCreators.UpdateCurrencyConverterState.type,
      payload: {
        baseValue: convertValueWithBaseRateToTargetRate(
          action.payload,
          CurrencyRatesSelectors.getTargetCurrencyRate(store.getState()),
          CurrencyRatesSelectors.getBaseCurrencyRate(store.getState()),
        ),
      },
    } as Action));

export const epics = combineEpics(
  changeCurrencyEpic, changeBaseValueEpic, changeTargetValueEpic,
);
