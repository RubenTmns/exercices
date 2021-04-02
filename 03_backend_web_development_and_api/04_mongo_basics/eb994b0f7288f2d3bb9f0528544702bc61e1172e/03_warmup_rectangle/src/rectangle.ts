export function rectangle(width: number, height: number): string {
  let stars: string = "";
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      stars += "*";
    }
    stars += "\n";
  }
  return stars;
}
