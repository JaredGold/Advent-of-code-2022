import { d7c2 } from "./d7c2";

// skipping test as for some reason it returns the wrong number
// this works when passed the actual input so no idea wth is happening.
describe("d7c2", () => {
  it("gets the correct result", () => {
    const data = [
      "$ cd /",
      "$ ls",
      "dir a",
      "14848514 b.txt",
      "8504156 c.dat",
      "dir d",
      "$ cd a",
      "$ ls",
      "dir e",
      "29116 f",
      "2557 g",
      "62596 h.lst",
      "$ cd e",
      "$ ls",
      "584 i",
      "$ cd ..",
      "$ cd ..",
      "$ cd d",
      "$ ls",
      "4060174 j",
      "8033020 d.log",
      "5626152 d.ext",
      "7214296 k",
    ];

    const result = d7c2(data);

    expect(result).toStrictEqual(24933642);
  });
});
