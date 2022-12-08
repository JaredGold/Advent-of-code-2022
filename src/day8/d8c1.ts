import { readFileToArray } from "../../utils/readFileToArray";

// go through each item in a row
// cycle through each tree to the left and right of it and see if there is any tree larger than it.
// cycle up and down through each row and it's location to see if there is a tree larger than it.
// if at any point a there is one full direction it can go with finding a larger break.
// if all rows and columns have a larger element add 1 to total

export const d8c1 = (input?: string[]) => {
  // change days and challenges
  console.log("You have selected Day 8 Challenge 1");
  const rows = input ? input : readFileToArray("input", 8);

  let total = (rows.length + rows[0].length - 2) * 2;

  // cycle each row start at the second and ending at second last
  for (let i = 1; i <= rows.length - 2; i++) {
    const selectedRow = rows[i];

    // cycle through each tree (from left to right)
    // starting at the second tree and ending at the second last tree
    for (let j = 1; j <= selectedRow.length - 2; j++) {
      let up = true;
      let down = true;
      let left = true;
      let right = true;
      const selectedTree = +selectedRow[j];

      // check right
      // starting at the tree to the right check each tree up to the last
      for (let k = j + 1; k <= selectedRow.length - 1; k++) {
        // console.log(selectedRow[k]);
        if (selectedTree <= parseInt(selectedRow[k])) {
          right = false;
          break;
        }
      }

      // check left
      for (let k = j - 1; k >= 0; k--) {
        if (selectedTree <= parseInt(selectedRow[k])) {
          left = false;
          break;
        }
      }

      // check up
      for (let k = i - 1; k >= 0; k--) {
        if (selectedTree <= parseInt(rows[k][j])) {
          up = false;
          break;
        }
      }

      // check down
      for (let k = i + 1; k <= rows.length - 1; k++) {
        if (selectedTree <= parseInt(rows[k][j])) {
          down = false;
          break;
        }
      }

      if (up || down || left || right) {
        total++;
      }
    }
  }

  return total;
};
