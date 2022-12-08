import { d8c1 } from "./d8c1";

describe("d8c1", () => {
  it("gets the correst result", () => {
    const data = ["30373", "25512", "65332", "33549", "35390"];

    const result = d8c1(data);

    expect(result).toStrictEqual(21);
  });
});
