import * as React from 'react';
import { Action } from 'redux-actions';

interface IProps {
  currencies: string[];
  value: string;
  onChange: (newValue: string) => Action<string>;
}

export function CurrencySelect({currencies = [], value, onChange}: IProps) {

  const handleChange = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
    onChange(ev.currentTarget.value);
  };

  return (
    <select
      className="c-field u-xlarge"
      value={value}
      onChange={handleChange}>
      {currencies.map(currency =>
        <option key={currency}>{currency}</option>,
      )}
    </select>
  );
}
