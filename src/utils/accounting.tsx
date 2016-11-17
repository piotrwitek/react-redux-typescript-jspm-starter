import Accounting from 'accounting';

export function formatMoney(value: string) {
  return Accounting.formatMoney(value, '');
}
