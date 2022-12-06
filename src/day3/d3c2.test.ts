import { d3c2 } from "./d3c2";

describe("d3c1", () => {
  it("finds the value of a shared number between 3 strings", () => {
    const data = ["abcdefgh", "hijklmno", "hello"];
    const result = d3c2(data);

    expect(result).toStrictEqual(8);
  });
  it("finds the value of a shared number between 3 strings, twice combined", () => {
    const data = ["abcdefgh", "hijklmno", "hello", "Potter", "Pupp", "etPalls"];
    const result = d3c2(data);

    expect(result).toStrictEqual(50);
  });
});
