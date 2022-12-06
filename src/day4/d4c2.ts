import { readFileToArray } from "../../utils/readFileToArray";

export const d4c2 = (input?: string[]) => {
  console.log("You have selected Day 4 Challenge 2");
  const values = input ? input : readFileToArray("input", 4);

  let answer = 0;

  values.forEach((line) => {
    const [elf1, elf2] = line.split(",");
    const [elf1Low, elf1High] = elf1.split("-");
    const [elf2Low, elf2High] = elf2.split("-");

    // const elf1IsPartiallyContained =
    //   (+elf1Low <= +elf2Low && +elf1Low >= +elf2High) ||
    //   (+elf1High >= +elf2High && +elf1High <= +elf2Low);
    // const elf2IsPartiallyContained =
    //   (+elf1Low >= +elf2Low && +elf1Low <= +elf2High) ||
    //   (+elf1High <= +elf2High && +elf1High >= +elf2Low);

    // < less
    // > greater

    // 1-3,2-2
    const elf1IsPartiallyContained =
      (+elf1Low <= +elf2Low && +elf2Low <= +elf1High) ||
      (+elf1High >= +elf2High && +elf2High >= +elf1Low);
    const elf2IsPartiallyContained =
      (+elf2Low <= +elf1Low && +elf1Low <= +elf2High) ||
      (+elf2High >= +elf1High && +elf1High >= +elf2Low);

    if (elf1IsPartiallyContained || elf2IsPartiallyContained) {
      answer++;
    }
  });

  return answer;
};
