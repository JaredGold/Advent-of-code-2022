import { d4c1 } from "./d4c1";

describe("d4c1", () => {
  it("adds to collected numbers if second set is completely contained", () => {
    const data = ["1-4,2-3"];
    const result = d4c1(data);

    expect(result).toStrictEqual(1);
  });
  it("adds to collected numbers if first set is completely contained", () => {
    const data = ["6-8,5-9"];
    const result = d4c1(data);

    expect(result).toStrictEqual(1);
  });
  it("only adds sets if completely contained", () => {
    const data = ["6-8,5-9", "1-4,2-8", "1-1,1-4"];
    const result = d4c1(data);

    expect(result).toStrictEqual(2);
  });
});
