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
        <div className="o-grid__cell">
          <CurrencySelect
            currencies={currencies}
            value={baseCurrency}
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
            value={targetCurrency}
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
