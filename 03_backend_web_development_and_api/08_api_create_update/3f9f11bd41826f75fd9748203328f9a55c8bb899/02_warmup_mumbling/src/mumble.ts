export function mumble(letters: string): string {
  const splitLetters = letters.split("");
  const words = [];

  for (let i = 0; i < splitLetters.length; i++) {
    words.push(splitLetters[i].toLowerCase() + Array(i + 1).join(splitLetters[i].toLowerCase()));
  }

  return words.join("-");
}
