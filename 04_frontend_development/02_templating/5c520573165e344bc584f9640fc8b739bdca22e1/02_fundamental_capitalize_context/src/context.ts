import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  const capitalizedSentence = sentence.toLowerCase().split(" ");
  for (let i = 0; i < capitalizedSentence.length; i++) {
    capitalizedSentence[i] = capitalize(capitalizedSentence[i]);
  }
  return capitalizedSentence.join(" ");
}
