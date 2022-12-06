import { readFileToCharArr } from "../../utils/readFileToCharArr";

export const d6c1 = (input?: string[]) => {
  console.log("You have selected Day 6 Challenge 1");
  const values = input ? input : readFileToCharArr("input", 6);

  let answer = 0;

  for (let i = 0; i <= values.length; i++) {
    const ansSet = new Set(values.slice(i, i + 4));
    if (ansSet.size === 4) {
      answer = i + 4;
      break;
    }
  }

  return answer;
};
