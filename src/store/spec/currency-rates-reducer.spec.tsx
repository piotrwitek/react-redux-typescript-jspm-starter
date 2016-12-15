// MOCKING
jest.mock('redux-actions', () => {
  return {
    handleActions: () => ({}),
  };
}, { virtual: true });
jest.mock('seamless-immutable', () => {
  return {
    from: () => ({}),
  };
}, { virtual: true });

import * as currencyRatesActions from '../currency-rates-reducer';

// testing action creators

test('testing action creator currencyRatesFetchSuccess', () => {
  // arrange
  // tslint:disable
  const results = {
    "base": "EUR",
    "date": "2016-07-29",
    "rates": {
      "AUD": 1.4782
    }
  };
  // tslint:enable

  // act
  const actual = currencyRatesActions.loadCurrencyRatesSuccess(results);
  const expected = {
    type: 'currencyRates/LOAD_CURRENCY_RATES_SUCCESS',
    payload: results,
  };

  // assert
  expect(actual).toEqual(expected);
});

test('testing action creator currencyRatesFetchError', () => {
  // arrange
  const errorMessage = 'Error Message';

  // act
  const actual = currencyRatesActions.loadCurrencyRatesError(errorMessage);
  const expected = {
    type: 'currencyRates/LOAD_CURRENCY_RATES_ERROR',
    payload: errorMessage,
  };

  // assert
  expect(actual).toEqual(expected);
});

// testing reducer
