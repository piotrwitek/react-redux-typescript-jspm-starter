// lib imports
import * as React from 'react';

import { CurrencySelect } from './currency-select';
import { CurrencyInput } from './currency-input';

interface LocalProps {
  currencies: string[];
  baseCurrency: string;
  targetCurrency: string;
  baseValue: number;
  targetValue: number;
  onBaseCurrencyChange: (newCurrency: string) => FluxStandardAction<string>;
  onTargetCurrencyChange: (newCurrency: string) => FluxStandardAction<string>;
  onBaseValueChange: (newCurrency: string) => FluxStandardAction<string>;
  onTargetValueChange: (newCurrency: string) => FluxStandardAction<string>;
}

interface LocalState {
}

export class CurrencyConverter extends React.Component<LocalProps, LocalState> {
  render(): JSX.Element {
    const {
      currencies,
      baseCurrency,
      targetCurrency,
      baseValue,
      targetValue,
      onBaseCurrencyChange,
      onTargetCurrencyChange,
      onBaseValueChange,
      onTargetValueChange,
    } = this.props;

    return (
      <div className="o-grid o-grid--small-full o-grid--medium-full">
        <div className="o-grid__cell u-window-box--medium">
          <CurrencyInputGroup currencies={currencies}
            currencyType={baseCurrency}
            onCurrencyTypeChange={onBaseCurrencyChange}
            currencyValue={baseValue}
            onCurrencyValueChange={onBaseValueChange}
            />
        </div>
        <div className="o-grid__cell u-window-box--medium">
          <CurrencyInputGroup currencies={currencies}
            currencyType={targetCurrency}
            onCurrencyTypeChange={onTargetCurrencyChange}
            currencyValue={targetValue}
            onCurrencyValueChange={onTargetValueChange}
            />
        </div>
      </div>
    );
  }
}

function CurrencyInputGroup({currencies, currencyType, currencyValue,
  onCurrencyTypeChange, onCurrencyValueChange}) {
  return (
    <div className="c-input-group">
      <div className="o-field o-field--fixed" style={{ width: '80px' }}>
        <CurrencySelect
          currencies={currencies}
          value={currencyType}
          onChange={onCurrencyTypeChange}
          />
      </div>
      <div className="o-field">
        <CurrencyInput
          value={currencyValue}
          onChange={onCurrencyValueChange}
          />
      </div>
    </div>
  );
}
