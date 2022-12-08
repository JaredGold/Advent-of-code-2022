import { d8c2 } from "./d8c2";

describe("d8c2", () => {
  it("gets the correst result", () => {
    const data = ["30373", "25512", "65332", "33549", "35390"];

    const result = d8c2(data);

    expect(result).toStrictEqual(8);
  });
});
