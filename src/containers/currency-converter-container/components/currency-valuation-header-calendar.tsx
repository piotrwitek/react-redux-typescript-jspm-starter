import * as React from 'react';
import Calendar from 'react-input-calendar';

export function CurrencyValuationHeaderCalendar({fromCurrency, toCurrency,
  selectedStartDate, selectedEndDate, onCalendarStartDateChange, onCalendaEndDateChange}) {

  return (
    <div className="o-grid">

      <div className="o-grid__cell">
        <div className="o-grid">
          <div className="o-grid__cell">
            {fromCurrency}/{toCurrency}
          </div>
          <div className="o-grid__cell o-grid__cell--width-66">
            <div className="c-link--right">Custom Change Period</div>
          </div>
        </div>

        <div className="o-grid">
          <div className="o-grid__cell">
            <Calendar format="YYYY-MM-DD" date={selectedStartDate} onChange={onCalendarStartDateChange}
              openOnInputFocus={true} inputFieldClass="c-field" />
          </div>
          <div className="o-grid__cell">
            <Calendar format="YYYY-MM-DD" date={selectedEndDate} onChange={onCalendaEndDateChange}
              openOnInputFocus={true} inputFieldClass="c-field" />
          </div>
        </div>
      </div>

    </div>
  );
}
