import { d10c1 } from "./d10c1";
import { testInput } from "./testInput";

describe("d10c1", () => {
  it("gets the correst result", () => {
    const result = d10c1(testInput);

    expect(result).toStrictEqual(13140);
  });
});
