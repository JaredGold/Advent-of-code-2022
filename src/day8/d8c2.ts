import { readFileToArray } from "../../utils/readFileToArray";

export const d8c2 = (input?: string[]) => {
  console.log("You have selected Day 8 Challenge 2");
  const rows = input ? input : readFileToArray("input", 8);

  let bestView = 0;

  // cycle each row start at the second and ending at second last
  for (let y = 0; y <= rows.length - 1; y++) {
    const selectedRow = rows[y];

    // cycle through each tree (from left to right)
    // starting at the second tree and ending at the second last tree
    for (let x = 0; x <= selectedRow.length - 1; x++) {
      let up = 0;
      let down = 0;
      let left = 0;
      let right = 0;
      const selectedTree = +selectedRow[x];

      // check right
      // starting at the tree to the right check each tree up to the last
      for (let k = x + 1; k <= selectedRow.length - 1; k++) {
        right++;
        if (selectedTree <= parseInt(selectedRow[k])) {
          break;
        }
      }

      // check left
      for (let k = x - 1; k >= 0; k--) {
        left++;
        if (selectedTree <= parseInt(selectedRow[k])) {
          break;
        }
      }

      // check up
      for (let k = y - 1; k >= 0; k--) {
        up++;
        if (selectedTree <= parseInt(rows[k][x])) {
          break;
        }
      }

      // check down
      for (let k = y + 1; k <= rows.length - 1; k++) {
        down++;
        if (selectedTree <= parseInt(rows[k][x])) {
          break;
        }
      }

      const view = up * down * left * right;

      if (view > bestView) {
        bestView = view;
      }
    }
  }

  return bestView;
};
