import { d9c1 } from "./d9c1";

describe("d9c1", () => {
  it("gets the correst result", () => {
    const data = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];

    const result = d9c1(data);

    expect(result).toStrictEqual(13);
  });
});
