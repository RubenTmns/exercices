export function humanPercentage(percentages: number[]): string[] {
  return percentages.map((number) => `${Math.round(number * 100)}%`);
}
