import { readFileToArray } from "../../utils/readFileToArray";

export const d3c1 = (input?: string[]) => {
  console.log("You have selected Day 3 Challenge 1");
  const values = input ? input : readFileToArray("input", 3);
  const sharedArr = [];

  for (let i = 0; i <= values.length - 1; i++) {
    const half = Math.round(values[i].length / 2);
    const splitStr = values[i].split("");
    const firstHalf = new Set(splitStr.slice(0, half));
    const secondHalf = splitStr.slice(half).join("");

    firstHalf.forEach((char) => {
      if (secondHalf.includes(char)) {
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
