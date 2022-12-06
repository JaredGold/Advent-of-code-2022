import { d6c2 } from "./d6c2";

describe("d6c2", () => {
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
    const result = d6c2(data);

    expect(result).toStrictEqual(23);
  });
});
