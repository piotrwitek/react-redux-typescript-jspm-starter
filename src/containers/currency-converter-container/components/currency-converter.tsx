// lib imports
import * as React from 'react';
import { Action } from 'redux-actions';

import { CurrencySelect } from './currency-select';
import { CurrencyInput } from './currency-input';

interface IProps {
  currencies: string[];
  baseCurrency: string;
  targetCurrency: string;
  baseValue: string;
  targetValue: string;
  onBaseCurrencyChange: (payload: string) => Action<string>;
  onTargetCurrencyChange: (payload: string) => Action<string>;
  onBaseValueChange: (payload: string) => Action<string>;
  onTargetValueChange: (payload: string) => Action<string>;
}

interface IState {
}

export class CurrencyConverter extends React.Component<IProps, IState> {
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

interface ICurrencyInputGroup {
  currencies: string[];
  currencyType: string;
  currencyValue: string;
  onCurrencyTypeChange: (payload: string) => Action<string>;
  onCurrencyValueChange: (payload: string) => Action<string>;
}
function CurrencyInputGroup({currencies, currencyType, currencyValue,
  onCurrencyTypeChange, onCurrencyValueChange}: ICurrencyInputGroup) {
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
