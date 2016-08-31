// lib imports
import * as React from 'react';

import { CurrencySelect } from './currency-select';
import { CurrencyInput } from './currency-input';

interface LocalProps {
  currencies: Object;
  baseCurrency: string;
  targetCurrency: string;
  baseValue: string;
  targetValue: string;
  onBaseCurrencyChange: (newCurrency: string) => void;
  onTargetCurrencyChange: (newCurrency: string) => void;
  onBaseValueChange: (newCurrency: string) => void;
  onTargetValueChange: (newCurrency: string) => void;
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
        <div className="o-grid__cell">
          <CurrencySelect
            currencies={currencies}
            selectedCurrency={baseCurrency}
            onChange={onBaseCurrencyChange}
            />
          <CurrencyInput
            value={baseValue}
            onChange={onBaseValueChange}
            />
        </div>
        <div className="o-grid__cell">
          <CurrencySelect
            currencies={currencies}
            selectedCurrency={targetCurrency}
            onChange={onTargetCurrencyChange}
            />
          <CurrencyInput
            value={targetValue}
            onChange={onTargetValueChange}
            />
        </div>
      </div>
    );
  }
}
