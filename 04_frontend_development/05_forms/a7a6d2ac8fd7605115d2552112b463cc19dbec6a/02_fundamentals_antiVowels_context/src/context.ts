import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (string: string): string => {
  const split = sentenceSplitter(string);

  const vowelFilter = split.filter((word) => {
    if (/^[aeiouyAEIOUY]/.test(word)) {
      split.sort;
    } else {
      return split;
    }
  });

  const vowelOut = sentenceJoiner(vowelFilter);

  return vowelOut;
};
