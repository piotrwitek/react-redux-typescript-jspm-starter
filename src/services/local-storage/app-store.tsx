// app data models
const STORAGE_PREFIX = 'cc_';
const INITIAL_DATE = (new Date()).toISOString();

export class AppStore {
  // initial state
  [key: string]: any;
  currencies = '{}';
  fromCurrency = 'SEK';
  toCurrency = 'EUR';
  fromValue = '100.00';
  selectedPeriod = '60';
  selectedStartDate = INITIAL_DATE;
  selectedEndDate = INITIAL_DATE;

  constructor() {
    this.load();
  }

  save(stateObject: any) {
    // remember to stringify the objects that you want to store
    Object.keys(stateObject).forEach((key) => {
      const storageKey = STORAGE_PREFIX + key;
      const stateItem = stateObject[key];
      if (stateItem) {
        this[key] = stateItem;
        sessionStorage.setItem(storageKey, stateItem);
      }
    });
  }

  load() {
    Object.keys(this).forEach(key => {
      const storageKey = STORAGE_PREFIX + key;
      const storageItem = sessionStorage.getItem(storageKey);
      if (storageItem) {
        this[key] = storageItem;
      }
    });
  }
}
