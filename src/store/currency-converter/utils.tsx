// Unit Test Cases:
// { value: '100', baseRate: 1, targetRate: 1.2, result: '120.00' },
// { value: '120', baseRate: 1.2, targetRate: 1, result: '100.00' },
// { value: '100', baseRate: 0.8, targetRate: 1, result: '125.00' },
// { value: '125', baseRate: 1, targetRate: 0.8, result: '100.00' },
// { value: '100', baseRate: 0.8, targetRate: 1.2, result: '150.00' },
// { value: '150', baseRate: 1.2, targetRate: 0.8, result: '100.00' },
export function convertValueWithBaseRateToTargetRate(
  value: string, baseRate: number, targetRate: number,
) {
  const numberValue = parseFloat(value);
  const result = (numberValue / baseRate) * targetRate;
  return result.toFixed(2);
}
