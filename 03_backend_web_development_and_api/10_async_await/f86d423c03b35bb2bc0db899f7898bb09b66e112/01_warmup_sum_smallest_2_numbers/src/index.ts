export function sumTwoSmallestNumbers(numbers: number[]): number {
  const hello = numbers.sort((a, b) => a - b);
  return hello[0] + hello[1];
}
