// lib imports
import * as React from 'react';
import { Action } from 'redux-actions';
import { connect } from 'react-redux';
// components imports
import { IRootReducer } from '../../store';
import { ICurrencyRatesReducer } from '../../store/currency-rates-reducer';
import { ICurrencyConverterReducer } from '../../store/currency-converter-reducer';
import { PageHeader } from '../../components/page-header';
import { PageSection } from '../../components/page-section';
import * as currencyConverterActions from '../../store/currency-converter-reducer';
import { CurrencyConverter } from './components/currency-converter';

interface IProps {
  currencyRates: ICurrencyRatesReducer;
  currencyConverter: ICurrencyConverterReducer;
  updateBaseCurrency: (payload: string) => Action<string>;
  updateBaseValue: (payload: string) => Action<string>;
  updateTargetCurrency: (payload: string) => Action<string>;
  updateTargetValue: (payload: string) => Action<string>;
}
interface IState {
}

export class CurrencyConverterContainer extends React.Component<IProps, IState> {
  render() {
    const { baseCurrency, targetCurrency, baseValue, targetValue } = this.props.currencyConverter;
    const { rates } = this.props.currencyRates;
    const currencies = Object.keys(rates);
    const { updateBaseCurrency, updateBaseValue, updateTargetCurrency, updateTargetValue } = this.props;

    return (
      <article>
        <PageHeader>Currency Converter</PageHeader>
        <PageSection className="u-centered">
          <p>(work in progress)</p>
          <p>Example application to showcase how to leverage TypeScript 2.1 Smarter Type Inference in React/Redux projects and get free of additional costs of typing and maintaining explicit type declarations.</p>
          <p>Handling Async Side Effects using ES7 Observables and RxJS with <a href="https://github.com/rtsao/csjs#faq">redux-observable</a>.</p>
        </PageSection>
        <section className="u-letter-box--xlarge">
          <CurrencyConverter currencies={currencies}
            baseCurrency={baseCurrency} targetCurrency={targetCurrency}
            baseValue={baseValue} targetValue={targetValue}
            onBaseCurrencyChange={updateBaseCurrency}
            onTargetCurrencyChange={updateTargetCurrency}
            onBaseValueChange={updateBaseValue}
            onTargetValueChange={updateTargetValue}
            />
        </section>
      </article>
    );
  }
}

const stateToProps = (storeState: IRootReducer) => ({
  currencyRates: storeState.currencyRates,
  currencyConverter: storeState.currencyConverter,
});

const actionsToProps = Object.assign({}, currencyConverterActions);

export default connect(stateToProps, actionsToProps)(CurrencyConverterContainer);
