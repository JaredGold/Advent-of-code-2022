import { d11c1 } from "./d11c1";
import { Monkey } from "./input";

describe("d11c1", () => {
  it("gets the correst result", () => {
    const data: Monkey[] = [
      {
        monkey: 0,
        items: [79, 98],
        operation: ["*", 19],
        test: 23,
        truthy: 2,
        falsy: 3,
      },

      {
        monkey: 1,
        items: [54, 65, 75, 74],
        operation: ["+", 6],
        test: 19,
        truthy: 2,
        falsy: 0,
      },

      {
        monkey: 2,
        items: [79, 60, 97],
        operation: ["*", "old"],
        test: 13,
        truthy: 1,
        falsy: 3,
      },

      {
        monkey: 3,
        items: [74],
        operation: ["+", 3],
        test: 17,
        truthy: 0,
        falsy: 1,
      },
    ];

    const result = d11c1(data);

    expect(result).toStrictEqual(10605);
  });
});
