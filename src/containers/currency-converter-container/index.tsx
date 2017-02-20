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
  updateTargetCurrency: ActionCreators.UpdateTargetCurrency.create,
  updateBaseValue: ActionCreators.UpdateBaseValue.create,
  updateTargetValue: ActionCreators.UpdateTargetValue.create,
};

interface IProps {
  currencyRates: State;
  currencyConverter: CurrencyConverterState;
  updateBaseCurrency: (payload: string) => void;
  updateTargetCurrency: (payload: string) => void;
  updateBaseValue: (payload: string) => void;
  updateTargetValue: (payload: string) => void;
}

interface IState { }

export class CurrencyConverterContainer extends React.Component<IProps, IState> {
  render() {
    const { baseCurrency, targetCurrency, baseValue, targetValue } = this.props.currencyConverter;
    const { rates, base } = this.props.currencyRates;
    const currencies = Object.keys(rates).concat(base);

    const { updateBaseCurrency, updateBaseValue, updateTargetCurrency, updateTargetValue } = this.props;

    return (
      <article>
        <PageHeader>Currency Converter</PageHeader>
        <PageSection className="u-centered">
          <p>
            Example application to showcase TypeScript patterns used in React & Redux projects.
          </p>
          <p>
            To learn more about usefull TypeScript Patterns in React & Redux Apps go here:<br />
            <a href="https://github.com/piotrwitek/react-redux-typescript-patterns/">React / Redux / TypeScript Patterns</a>
          </p>
          <p>
            Async Flows are handled using <a href="https://github.com/redux-observable/redux-observable/">redux-observable</a>
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
