import { removeAccents } from "./convert.util";

export const compareAlphabeticalLabel = (firstString, secondString) => {
  const removedAccentsFirstString = removeAccents(
    firstString.label
  ).toLowerCase();
  const removedAccentsSecondString = removeAccents(
    secondString.label
  ).toLowerCase();
  return removedAccentsFirstString !== removedAccentsSecondString
    ? removedAccentsFirstString < removedAccentsSecondString
      ? -1
      : 1
    : 0;
};
