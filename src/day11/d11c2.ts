import BigNumber from "bignumber.js";
import { input as cInput, Monkey } from "./input";

export const d11c2 = (input?: Monkey[]) => {
  console.log("You have selected Day 11 Challenge 2");

  const counter = new Array(cInput.length).fill(0);

  const Monkeys = input ? input : cInput;

  const commonDivisor = Monkeys.map((monkey) => monkey.test).reduce(
    (acc, div) => acc * div
  );

  // loop 20 times.
  for (let i = 0; i < 10000; i++) {
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

        worry = worry % commonDivisor;

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
