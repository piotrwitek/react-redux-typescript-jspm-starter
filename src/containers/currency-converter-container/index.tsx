import * as React from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript';

import { RootState } from '../../store';
import { ActionCreators } from '../../store/currency-converter/reducer';
import { PageHeader } from '../../components/page-header';
import { PageSection } from '../../components/page-section';
import { CurrencyConverter } from './components/currency-converter';

const mapStateToProps = (storeState: RootState) => ({
  currencyRates: storeState.currencyRates,
  currencyConverter: storeState.currencyConverter,
});

const dispatchToProps = {
  changeBaseCurrency: ActionCreators.ChangeBaseCurrency.create,
  changeTargetCurrency: ActionCreators.ChangeTargetCurrency.create,
  changeBaseValue: ActionCreators.ChangeBaseValue.create,
  changeTargetValue: ActionCreators.ChangeTargetValue.create,
};

const stateProps = returntypeof(mapStateToProps);
type IProps = typeof stateProps & typeof dispatchToProps;
type IState = {};

class CurrencyConverterContainer extends React.Component<IProps, IState> {
  render() {
    const { baseCurrency, targetCurrency, baseValue, targetValue } = this.props.currencyConverter;

    const { rates, base } = this.props.currencyRates;
    const currencies = Object.keys(rates).concat(base);

    const { changeBaseCurrency, changeBaseValue, changeTargetCurrency, changeTargetValue } = this.props;

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
            onBaseCurrencyChange={changeBaseCurrency}
            onTargetCurrencyChange={changeTargetCurrency}
            onBaseValueChange={changeBaseValue}
            onTargetValueChange={changeTargetValue}
          />
        </section>
      </article>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(CurrencyConverterContainer);
