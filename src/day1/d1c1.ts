import { readFileToArray } from "../../utils/readFileToArray";

export const d1c1 = (input?: string[]) => {
  console.log("You have selected Day 1 Challenge 1");
  const numbers = input ? input : readFileToArray("input", 1);

  let largest = 0;

  numbers.reduce((acc, curr) => {
    if (!curr) {
      largest = largest > acc ? largest : acc;
      return 0;
    }
    return acc + +curr;
  }, 0);

  return largest;
};
