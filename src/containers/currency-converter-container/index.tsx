// lib imports
import * as React from 'react';
import { connect } from 'react-redux';
// components imports
import { RootState } from '../../store';
import { State } from '../../store/currency-rates-reducer';
import { State as CurrencyConverterState, ActionCreators } from '../../store/currency-converter/reducer';
import { PageHeader } from '../../components/page-header';
import { PageSection } from '../../components/page-section';
import { CurrencyConverter } from './components/currency-converter';

const mapStateToProps = (storeState: RootState) => ({
  currencyRates: storeState.currencyRates,
  currencyConverter: storeState.currencyConverter,
});

const dispatchToProps = {
  updateBaseCurrency: ActionCreators.UpdateBaseCurrency.create,
  updateBaseValue: ActionCreators.UpdateBaseValue.create,
};

interface IProps {
  currencyRates: State;
  currencyConverter: CurrencyConverterState;
  updateBaseCurrency: (payload: string) => void;
  updateBaseValue: (payload: string) => void;
  updateTargetCurrency: (payload: string) => void;
  updateTargetValue: (payload: string) => void;
}

interface IState { }

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
          <p>
            Example application to showcase how to leverage Smarter Type Inference from TypeScript 2.1
            in React/Redux projects and to minimize additional costs of writing and maintaining explicit type declarations.
          </p>
          <p>
            Handling Async Side Effects using ES7 Observables and RxJS
            with <a href="https://github.com/redux-observable/redux-observable/">redux-observable</a>
          </p>
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

export default connect(mapStateToProps, dispatchToProps)(CurrencyConverterContainer);
