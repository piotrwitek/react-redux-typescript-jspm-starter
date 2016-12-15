import * as React from 'react';
import { Action } from 'redux-actions';

interface IProps {
  value: string;
  onChange: (newValue: string) => Action<string>;
}

export function CurrencyInput({value = 0, onChange}: IProps) {

  const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    onChange(ev.currentTarget.value);
  };

  return (
    <input
      className="c-field u-xlarge"
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleChange}
      />
  );
}
