import { readFileToCharArr } from "../../utils/readFileToCharArr";

export const d6c2 = (input?: string[]) => {
  console.log("You have selected Day 6 Challenge 2");
  const values = input ? input : readFileToCharArr("input", 6);

  let answer = 0;

  for (let i = 0; i <= values.length; i++) {
    const ansSet = new Set(values.slice(i, i + 14));
    if (ansSet.size === 14) {
      answer = i + 14;
      break;
    }
  }

  return answer;
};
