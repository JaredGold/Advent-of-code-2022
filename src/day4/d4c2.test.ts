import { d4c2 } from "./d4c2";

describe("d4c2", () => {
  it("adds to collected numbers if second set is partially contained", () => {
    const data = ["1-4,2-6"];
    const result = d4c2(data);

    expect(result).toStrictEqual(1);
  });
  it("adds to collected numbers if first set is partially contained", () => {
    const data = ["5-8,4-9"];
    const result = d4c2(data);

    expect(result).toStrictEqual(1);
  });
  it("only adds sets if partially contained", () => {
    const data = ["1-3,2-2", "1-4,2-8", "1-9,1-4", "1-3,5-7", "2-6,7-8"];
    const result = d4c2(data);

    expect(result).toStrictEqual(3);
  });
});
