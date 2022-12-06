import { d6c1 } from "./d6c1";

describe("d6c1", () => {
  it("adds to collected numbers if second set is completely contained", () => {
    const data = [
      "b",
      "v",
      "w",
      "b",
      "j",
      "p",
      "l",
      "b",
      "g",
      "v",
      "b",
      "h",
      "s",
      "r",
      "l",
      "p",
      "g",
      "d",
      "m",
      "j",
      "q",
      "w",
      "f",
      "t",
      "v",
      "n",
      "c",
      "z",
    ];
    const result = d6c1(data);

    expect(result).toStrictEqual(5);
  });
});
