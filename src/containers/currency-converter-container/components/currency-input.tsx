import * as React from 'react';

export function CurrencyInput({value, onChange}) {
  return (
    <div className="u-letter-box--medium">
      <input
        className="c-field c-field--xlarge"
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onChange}
        />
    </div>
  );
}
