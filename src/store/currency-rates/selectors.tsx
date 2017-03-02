import { createSelector } from 'reselect';
import { RootState } from '../index';

const getCurrencyConverter = (state: RootState) => state.currencyConverter;
const getCurrencyRates = (state: RootState) => state.currencyRates;

export const getCurrencies = createSelector(
  getCurrencyRates, (currencyRates) => {
    return Object.keys(currencyRates.rates).concat(currencyRates.base);
  },
);

export const getBaseCurrencyRate = createSelector(
  getCurrencyConverter, getCurrencyRates, (currencyConverter, currencyRates) => {
    const baseCurrency = currencyConverter.baseCurrency;
    return baseCurrency === currencyRates.base ? 1 : currencyRates.rates[baseCurrency];
  },
);

export const getTargetCurrencyRate = createSelector(
  getCurrencyConverter, getCurrencyRates, (currencyConverter, currencyRates) => {
    return currencyRates.rates[currencyConverter.targetCurrency];
  },
);
