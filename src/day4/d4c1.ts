import { readFileToArray } from "../../utils/readFileToArray";

export const d4c1 = (input?: string[]) => {
  console.log("You have selected Day 4 Challenge 1");
  const values = input ? input : readFileToArray("input", 4);

  let answer = 0;

  values.forEach((line) => {
    const [elf1, elf2] = line.split(",");
    const [elf1Low, elf1High] = elf1.split("-");
    const [elf2Low, elf2High] = elf2.split("-");

    const elf1IsContained = +elf1Low <= +elf2Low && +elf1High >= +elf2High;
    const elf2IsContained = +elf2Low <= +elf1Low && +elf2High >= +elf1High;

    if (elf1IsContained || elf2IsContained) {
      answer++;
    }
  });

  return answer;
};
