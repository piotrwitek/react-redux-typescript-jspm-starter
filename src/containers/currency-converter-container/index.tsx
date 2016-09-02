// lib imports
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// components imports
import * as currencyConverterActions from '../../reducers/currency-converter-reducer';
import { CurrencyConverter } from './components/currency-converter';

interface IProps {
  currencyConverter: any;
  currencyRates: any;
  actions: any;
}

interface IState {
}

export class CurrencyConverterContainer extends React.Component<IProps, IState> {
  render() {
    const { baseCurrency, targetCurrency, baseValue, targetValue } = this.props.currencyConverter;
    const { currencies } = this.props.currencyRates;
    const { actions } = this.props;

    return (
      <section className="u-letter-box--super">
        <CurrencyConverter currencies={currencies}
          baseCurrency={baseCurrency} targetCurrency={targetCurrency}
          baseValue={baseValue} targetValue={targetValue}
          onBaseCurrencyChange={actions.updateBaseCurrency}
          onTargetCurrencyChange={actions.updateTargetCurrency}
          onBaseValueChange={actions.updateBaseValue}
          onTargetValueChange={actions.updateTargetValue}
          />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencyConverter: state.currencyConverter,
    currencyRates: state.currencyRates
  };
}

const actions = Object.assign({}, currencyConverterActions);
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverterContainer);
