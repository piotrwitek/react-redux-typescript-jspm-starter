import { createSelector } from 'reselect';
import { RootState } from '../index';

const getCurrencyConverter = (state: RootState) => state.currencyConverter;

export const getBaseValue = createSelector(
  getCurrencyConverter, (currencyConverter) => {
    return currencyConverter.baseValue;
  },
);

export const getTargetValue = createSelector(
  getCurrencyConverter, (currencyConverter) => {
    return currencyConverter.targetValue;
  },
);
