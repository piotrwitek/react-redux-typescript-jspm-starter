import * as React from 'react';

export function CurrencySelect({currencies, selectedCurrency, onChange}) {
  return (
    <select className="c-choice c-choice--padded"
      value={selectedCurrency} onChange={onChange}>
      {currencies.map(currency =>
        <option key={currency}>{currency}</option>
      )}
    </select>
  );
}
