import { readFileToArray } from "../../utils/readFileToArray";

export const d1c2 = (input?: string[]) => {
  console.log("You have selected Day 1 Challenge 2");
  const numbers = input ? input : readFileToArray("input", 1);

  const addNumArr = [];

  numbers.reduce((acc, curr) => {
    if (!curr) {
      addNumArr.push(acc);
      return 0;
    }
    return acc + +curr;
  }, 0);

  // sort ascending
  addNumArr.sort((a, b) => b - a);

  return addNumArr[0] + addNumArr[1] + addNumArr[2];
};
