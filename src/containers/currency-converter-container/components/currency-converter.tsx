// lib imports
import * as React from 'react';

import { CurrencySelect } from './currency-select';
import { CurrencyInput } from './currency-input';

interface Props {
  currencies: string[];
  baseCurrency: string;
  targetCurrency: string;
  baseValue: string;
  targetValue: string;
  onBaseCurrencyChange: (payload: string) => void;
  onTargetCurrencyChange: (payload: string) => void;
  onBaseValueChange: (payload: string) => void;
  onTargetValueChange: (payload: string) => void;
}

interface State {
}

export class CurrencyConverter extends React.Component<Props, State> {
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
      <div className="o-grid o-grid--xsmall-full o-grid--small-full o-grid--medium-full">
        <div className="o-grid__cell u-window-box--medium">
          <CurrencyInputGroup currencies={currencies}
            currencyType={baseCurrency}
            onCurrencyTypeChange={onBaseCurrencyChange}
            currencyValue={baseValue}
            onCurrencyValueChange={onBaseValueChange}
          />
        </div>

        <div className="o-grid__cell o-grid__cell--width-10 u-letter-box--xlarge u-centered">
          =>
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

interface ICurrencyInputGroup {
  currencies: string[];
  currencyType: string;
  currencyValue: string;
  onCurrencyTypeChange: (payload: string) => void;
  onCurrencyValueChange: (payload: string) => void;
}
function CurrencyInputGroup({ currencies, currencyType, currencyValue,
  onCurrencyTypeChange, onCurrencyValueChange }: ICurrencyInputGroup) {
  return (
    <div className="c-input-group">
      <div className="o-field o-field--fixed" style={{ width: '90px' }}>
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
