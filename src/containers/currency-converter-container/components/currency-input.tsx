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
    <div className="u-letter-box--medium">
      <input
        className="c-field c-field--xlarge"
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleChange}
        />
    </div>
  );
}
