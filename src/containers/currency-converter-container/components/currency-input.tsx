import * as React from 'react';
interface IProps {
  value: number;
  onChange: (newValue: string) => FluxStandardAction<string>;
}

export function CurrencyInput({value = 0, onChange = null}: IProps) {

  const handleChange = (ev) => {
    onChange(ev.target.value);
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
