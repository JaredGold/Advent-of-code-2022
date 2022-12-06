import { d2c2 } from "./d2c2";

describe("d2c2", () => {
  it("finds the correct value from challenge", () => {
    const data = ["A Y", "B X", "C Z"];
    const result = d2c2(data);

    expect(result).toStrictEqual(12);
  });
});
