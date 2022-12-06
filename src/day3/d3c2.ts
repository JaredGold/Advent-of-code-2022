import { readFileToArray } from "../../utils/readFileToArray";

export const d3c2 = (input?: string[]) => {
  console.log("You have selected Day 3 Challenge 2");
  const values = input ? input : readFileToArray("input", 3);
  const sharedArr = [];

  for (let i = 0; i <= values.length - 1; i = i + 3) {
    const first = new Set(values[i]);

    first.forEach((char) => {
      if (values[i + 1].includes(char) && values[i + 2].includes(char)) {
        sharedArr.push(char);
      }
    });
  }

  const priorityList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const answer = sharedArr.reduce((acc, curr) => {
    return acc + priorityList.indexOf(curr) + 1;
  }, 0);

  return answer;
};
