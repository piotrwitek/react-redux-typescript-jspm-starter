import * as React from 'react';
interface IProps {
  currencies: string[];
  value: string;
  onChange: (newValue: string) => FluxStandardAction<string>;
}

export function CurrencySelect({currencies = [], value = null, onChange = null}: IProps) {

  const handleChange = (ev) => {
    onChange(ev.target.value);
  };

  return (
    <select
      className="c-field u-xlarge"
      value={value}
      onChange={handleChange}>
      {currencies.map(currency =>
        <option key={currency}>{currency}</option>
      )}
    </select>
  );
}
