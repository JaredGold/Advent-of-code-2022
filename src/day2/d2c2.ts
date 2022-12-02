import { readFileToArray } from "../../utils/readFileToArray";

export const d2c2 = (input?: string[]) => {
  console.log("You have selected Day 2 Challenge 1");
  const numbers = input ? input : readFileToArray("input", 2);

  const answer = numbers.reduce((acc, curr) => {
    const response = curr.split(" ");

    switch (response[0]) {
      case "A":
        if (response[1] === "X") {
          return acc + 3;
        }
        if (response[1] === "Y") {
          return acc + 4;
        }
        if (response[1] === "Z") {
          return acc + 8;
        }
        break;
      case "B":
        if (response[1] === "X") {
          return acc + 1;
        }
        if (response[1] === "Y") {
          return acc + 5;
        }
        if (response[1] === "Z") {
          return acc + 9;
        }
        break;
      case "C":
        if (response[1] === "X") {
          return acc + 2;
        }
        if (response[1] === "Y") {
          return acc + 6;
        }
        if (response[1] === "Z") {
          return acc + 7;
        }
        break;
      default:
        break;
    }
  }, 0);

  return answer;
};
