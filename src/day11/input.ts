export type Monkey = {
  monkey: number;
  items: number[];
  operation: [string, number | "old"];
  test: number;
  truthy: number;
  falsy: number;
};

export const input: Monkey[] = [
  {
    monkey: 0,
    items: [99, 63, 76, 93, 54, 73],
    operation: ["*", 11],
    test: 2, // divisble by 2
    truthy: 7, // throw to monkey 7
    falsy: 1, // throw to monkey 1
  },
  {
    monkey: 1,
    items: [91, 60, 97, 54],
    operation: ["+", 1],
    // divisible by 17
    test: 17,
    truthy: 3,
    falsy: 2,
  },
  {
    monkey: 2,
    items: [65],
    operation: ["+", 7],
    // divisible by 7
    test: 7,
    truthy: 6,
    falsy: 5,
  },
  {
    monkey: 3,
    items: [84, 55],
    operation: ["+", 3],
    // divisible by 11
    test: 11,
    truthy: 2,
    falsy: 6,
  },

  {
    monkey: 4,
    items: [86, 63, 79, 54, 83],
    operation: ["*", "old"],
    // divisible by 19
    test: 19,
    truthy: 7,
    falsy: 0,
  },

  {
    monkey: 5,
    items: [96, 67, 56, 95, 64, 69, 96],
    operation: ["+", 4],
    // divisible by 5
    test: 5,
    truthy: 4,
    falsy: 0,
  },

  {
    monkey: 6,
    items: [66, 94, 70, 93, 72, 67, 88, 51],
    operation: ["*", 5],
    //  divisible by 13
    test: 13,
    truthy: 4,
    falsy: 5,
  },

  {
    monkey: 7,
    items: [59, 59, 74],
    operation: ["+", 8],
    // divisible by 3
    test: 3,
    truthy: 1,
    falsy: 3,
  },
];
