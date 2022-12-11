import { d10c2 } from "./d10c2";
import { testInput } from "./testInput";

describe("d10c2", () => {
  it("gets the correst result", () => {
    const result = d10c2(testInput);

    expect(result).toStrictEqual([
      "██  ██  ██  ██  ██  ██  ██  ██  ██  ██  ",
      "███   ███   ███   ███   ███   ███   ███ ",
      "████    ████    ████    ████    ████    ",
      "█████     █████     █████     █████     ",
      "██████      ██████      ██████      ████",
      "███████       ███████       ███████     ",
    ]);
  });
});
