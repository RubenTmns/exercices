export function sumTwoSmallestNumbers(numbers: number[]): number {
  if (numbers.length < 4) {
    throw "Not enough numbers";
  } else if (numbers.some((number) => number < 0)) {
    throw "Negative number";
  } else {
    const twoLowest = numbers.sort((a, b) => a - b);

    return twoLowest[0] + twoLowest[1];
  }
}
