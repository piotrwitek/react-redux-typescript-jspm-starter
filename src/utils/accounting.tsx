import Accounting from 'accounting';

export function formatMoney(value) {
  return Accounting.formatMoney(value, '');
}
