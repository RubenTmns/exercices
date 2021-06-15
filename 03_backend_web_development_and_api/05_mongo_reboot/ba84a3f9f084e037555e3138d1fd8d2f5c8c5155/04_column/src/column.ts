export function column(numberOfLines: number, lineContent: string): string {
  let truc = "";
  for (let i = 0; i < numberOfLines; i++) {
    truc += `${lineContent}\n`;
  }
  return truc;
}
