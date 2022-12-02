import { readFileToArray } from "../../utils/readFileToArray";

export const d1c2 = (input?: string[]) => {
  console.log("You have selected Day 1 Challenge 2");
  const numbers = input ? input : readFileToArray("input", 1);

  const addedNumArr = [];

  numbers.reduce((acc, curr) => {
    if (!curr) {
      addedNumArr.push(acc);
      return 0;
    }
    return acc + +curr;
  }, 0);

  // sort ascending
  addedNumArr.sort((a, b) => b - a);

  return addedNumArr[0] + addedNumArr[1] + addedNumArr[2];
};
