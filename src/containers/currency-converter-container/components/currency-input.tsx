import * as React from 'react';

interface IProps {
  value: string;
  onChange: (newValue: string) => void;
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
