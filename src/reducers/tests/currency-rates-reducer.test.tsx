import test from 'blue-tape';
import * as reducerModule from '../currency-rates-reducer';

// testing action creators

test('testing action creator currencyRatesFetchSuccess', function(t) {
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
  const actual = reducerModule.loadCurrencyRatesSuccess(results);
  const expected = {
    type: reducerModule.LOAD_CURRENCY_RATES_SUCCESS,
    payload: results
  };

  // assert
  t.deepEqual(actual, expected, 'should deep equal expected action');
  t.end();

});

test('testing action creator currencyRatesFetchError', function(t) {
  // arrange
  const errorMessage = 'Error Message';

  // act
  const actual = reducerModule.loadCurrencyRatesError(errorMessage);
  const expected = {
    type: reducerModule.LOAD_CURRENCY_RATES_ERROR,
    payload: errorMessage
  };

  // assert
  t.deepEqual(actual, expected, 'should deep equal expected action');
  t.end();
});

// testing reducer
