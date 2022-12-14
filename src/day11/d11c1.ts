import { readFileToArray } from "../../utils/readFileToArray";
import { input as cInput, Monkey } from "./input";

export const d11c1 = (input?: Monkey[]) => {
  console.log("You have selected Day 11 Challenge 1");

  const counter = new Array(cInput.length).fill(0);

  const Monkeys = input ? input : cInput;

  // {
  //   monkey: 0,
  //   items: [99, 63, 76, 93, 54, 73],
  //   operation: ["*", 11],
  //   test: 2, // divisble by 2
  //   true: 7, // throw to monkey 7
  //   false: 1, // throw to monkey 1
  // },

  // loop 20 times.
  for (let i = 0; i < 20; i++) {
    // loop over each monkey.
    Monkeys.forEach(({ monkey, items, operation, test, truthy, falsy }) => {
      // loop over each item
      items.forEach((item) => {
        // set worry to current item value
        let worry = item;

        if (operation[0] === "*") {
          if (operation[1] === "old") {
            worry = worry * worry;
          } else {
            worry = worry * operation[1];
          }
        } else if (operation[0] === "+") {
          if (operation[1] === "old") {
            worry = worry + worry;
          } else {
            worry = worry + operation[1];
          }
        }

        // divide worry by 3 and round down to nearest whole number
        worry = Math.floor(worry / 3);

        if (worry % test === 0) {
          Monkeys[truthy].items.push(worry);
        } else {
          Monkeys[falsy].items.push(worry);
        }

        counter[monkey]++;
      });
      Monkeys[monkey].items = [];
    });
  }
  counter.sort((a, b) => (a > b ? -1 : 1));
  let answer = counter[0] * counter[1];

  return answer;
};
