import { d9c2 } from "./d9c2";

describe("d9c2", () => {
  it("gets the correst result", () => {
    const data = ["R 5", "U 8", "L 8", "D 3", "R 17", "D 10", "L 25", "U 20"];

    const result = d9c2(data);

    expect(result).toStrictEqual(36);
  });
});
