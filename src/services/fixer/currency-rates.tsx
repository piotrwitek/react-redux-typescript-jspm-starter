import 'whatwg-fetch';
import { validateStatusCode, logRejection } from '../../utils/index';

// Get the latest foreign exchange reference rates in JSON format.
const FIXER_API_URL = 'https://api.fixer.io/';

// http://api.fixer.io/latest
export async function getLatest(baseCurrency?: string):
  Promise<IFixerServiceResponse | null> {
  let fixerLatestRates = FIXER_API_URL + 'latest';
  if (baseCurrency) {
    fixerLatestRates += '?base=' + baseCurrency;
  }

  try {
    let response = await fetch(fixerLatestRates);
    validateStatusCode(response);
    return response.json();
  } catch (err) {
    logRejection(err);
    return null;
  }
}

// http://api.fixer.io/2000-01-03
export async function getByDate(date: Date, baseCurrency?: string):
  Promise<IFixerServiceResponse | null> {
  let fixerRatesByDate = FIXER_API_URL + date.toISOString().slice(0, 10);
  if (baseCurrency) {
    fixerRatesByDate += '?base=' + baseCurrency;
  }

  try {
    let response = await fetch(fixerRatesByDate);
    validateStatusCode(response);
    return response.json();
  } catch (err) {
    logRejection(err);
    return null;
  }
}
