import * as React from 'react';

export function CurrencyValuationHeaderSelect({fromCurrency, toCurrency, selectedPeriod, onChange}) {
  return (
    <div className="o-grid">
      <div className="o-grid__cell">
        <div className="o-grid">
          <div className="o-grid__cell">
            {fromCurrency}/{toCurrency}
          </div>
          <div className="o-grid__cell o-grid__cell--width-75">
            <div className="c-link--right">Predefined Change Period</div>
          </div>
        </div>
        <div className="o-grid">
          <div className="o-grid__cell">
            <select className="c-choice c-choice"
              defaultValue={selectedPeriod} onChange={onChange}>
              <option value={30}>1 Month</option>
              <option value={60}>2 Months</option>
              <option value={91}>3 Months</option>
              <option value={182}>6 Months</option>
              <option value={365}>1 Year</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
