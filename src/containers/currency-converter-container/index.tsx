// lib imports
import * as React from 'react';
import { Action } from 'redux-actions';
import { connect } from 'react-redux';
// components imports
import { IRootReducer } from '../../store';
import { ICurrencyRates } from '../../store/currency-rates-reducer';
import { ICurrencyConverter } from '../../store/currency-converter-reducer';
import { PageHeader } from '../../components/page-header';
import { PageSection } from '../../components/page-section';
import * as currencyConverterActions from '../../store/currency-converter-reducer';
import { CurrencyConverter } from './components/currency-converter';

interface IProps {
  currencyRates: ICurrencyRates;
  currencyConverter: ICurrencyConverter;
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
    const { currencies } = this.props.currencyRates;
    const { updateBaseCurrency, updateBaseValue, updateTargetCurrency, updateTargetValue } = this.props;

    return (
      <article>
        <PageHeader>Currency Converter</PageHeader>
        <PageSection className="u-centered">(work in progress)</PageSection>
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
  currencyConverter: storeState.currencyConverter
});

const actionsToProps = Object.assign({}, currencyConverterActions);

export default connect(stateToProps, actionsToProps)(CurrencyConverterContainer);
