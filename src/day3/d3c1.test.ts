import { d3c1 } from "./d3c1";

describe("d3c1", () => {
  it("finds the combined value of shared letter in first and second half", () => {
    const data = ["AksiyA"];
    const result = d3c1(data);

    expect(result).toStrictEqual(27);
  });
  it("finds the combined value of shared letter in first and second half of multiple answers", () => {
    const data = ["AksiyA", "bsuiobyj"];
    const result = d3c1(data);

    expect(result).toStrictEqual(29);
  });
});
