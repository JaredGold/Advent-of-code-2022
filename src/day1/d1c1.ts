import { readFileToArray } from "../../utils/readFileToArray";

export const d1c1 = (input?: string[]) => {
  console.log("You have selected Day 1 Challenge 1");
  const numbers = input ? input : readFileToArray("input", 1);

  const addedNumArr = [];

  numbers.reduce((acc, curr) => {
    if (!curr) {
      addedNumArr.push(acc);
      return 0;
    }
    return acc + +curr;
  }, 0);

  addedNumArr.sort((a, b) => b - a);

  return addedNumArr[0];
};
