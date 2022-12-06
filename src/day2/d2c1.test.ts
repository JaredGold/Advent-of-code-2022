import { d2c1 } from "./d2c1";

describe("d2c1", () => {
  it("finds the correct value from challenge", () => {
    const data = ["A Y", "B X", "C Z"];
    const result = d2c1(data);

    expect(result).toStrictEqual(15);
  });
});
