import {
  convertValueWithBaseRateToTargetRate,
} from './utils';

describe('convertValueWithBaseRateToTargetRate', () => {
  const testCases: { value: string, baseRate: number, targetRate: number, result: string }[] = [
    { value: '100', baseRate: 1, targetRate: 1.2, result: '120.00' },
    { value: '120', baseRate: 1.2, targetRate: 1, result: '100.00' },
    { value: '100', baseRate: 0.8, targetRate: 1, result: '125.00' },
    { value: '125', baseRate: 1, targetRate: 0.8, result: '100.00' },
    { value: '100', baseRate: 0.8, targetRate: 1.2, result: '150.00' },
    { value: '150', baseRate: 1.2, targetRate: 0.8, result: '100.00' },
  ];

  testCases.forEach((testCase) => {
    test(JSON.stringify(testCase), () => {
      const { value, baseRate, targetRate, result } = testCase;
      const actual = convertValueWithBaseRateToTargetRate(value, baseRate, targetRate);
      expect(actual).toBe(result);
    });
  });
});
