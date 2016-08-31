import * as React from 'react';
import { CurrencyValuationHeaderSelect } from './currency-valuation-header-select';
import { CurrencyValuationHeaderCalendar } from './currency-valuation-header-calendar';

const DEFAULT_DATE = (new Date()).toISOString();

export function CurrencyValuationChange({changeValue, changePercent,
  type = 'Select', fromCurrency, toCurrency,
  onChange = null, onCalendarStartDateChange = null, onCalendaEndDateChange = null,
  selectedPeriod = '60', selectedStartDate = DEFAULT_DATE, selectedEndDate = DEFAULT_DATE }) {

  const positive = parseFloat(changeValue) >= 0;
  const signClass = positive ? 'c-link--success' : 'c-link--error';
  const signedValue = positive ? '+' + changeValue : changeValue;

  const positivePercent = parseFloat(changePercent) >= 0;
  const signClassPercent = positivePercent ? 'c-link--success' : 'c-link--error';
  const signedValuePercent = positivePercent ? '+' + changePercent : changePercent;

  return (
    <div className="c-card--high">
      <div className="c-card__item u-letter-box--medium">
        {type === 'Select'
          ? <CurrencyValuationHeaderSelect fromCurrency={fromCurrency} toCurrency={toCurrency}
            selectedPeriod={selectedPeriod} onChange={onChange} />
          : <CurrencyValuationHeaderCalendar fromCurrency={fromCurrency} toCurrency={toCurrency}
            selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} onCalendarStartDateChange={onCalendarStartDateChange}
            onCalendaEndDateChange={onCalendaEndDateChange} />
        }
      </div>
      <div className="c-card__item u-pillar-box--super">
        Change:
        <span className={`c-link c-link--right ${signClass}`}>
          {signedValue}
        </span>
      </div>
      <div className="c-card__item u-pillar-box--super">
        Change%:
        <span className={`c-link c-link--right ${signClassPercent}`}>
          {signedValuePercent}%
        </span>
      </div>
    </div>
  );
}
