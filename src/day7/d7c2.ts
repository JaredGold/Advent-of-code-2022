import { readFileToArray } from "../../utils/readFileToArray";

export const d7c2 = (input?: string[]) => {
  console.log("You have selected Day 7 Challenge 2");
  const commands = input ? input : readFileToArray("input", 7);

  type Dir = { name: string; size: number; files: Record<string, Dir> };

  let topDirectory: Dir = { name: "/", size: 0, files: {} };
  let fileTree = topDirectory;
  let currentDirectory = topDirectory;
  let path = [topDirectory];

  commands.forEach((command) => {
    const currCommand = command.split(" ");

    const [cmd0, cmd1, cmd2] = currCommand;

    // write browser
    if (cmd0 === "$" && cmd1 === "cd") {
      switch (cmd2) {
        // go to top level
        case "/":
          path = path.slice(0, 1);
          currentDirectory = path[0];
          break;
        // go back one
        case "..":
          path[path.length - 2].size =
            path[path.length - 2].size + currentDirectory.size;
          path.pop();
          currentDirectory = path[path.length - 1];
          break;
        // go in to the directory
        default:
          path.push(currentDirectory.files[cmd2]);
          currentDirectory = currentDirectory.files[cmd2];
          break;
      }
      // create new directory
    } else if (cmd0 === "dir") {
      currentDirectory.files[cmd1] = {
        name: cmd1,
        size: 0,
        files: {},
      };
    } else if (cmd0 !== "$") {
      currentDirectory.size = currentDirectory.size + +cmd0;
    }
  });

  const sizesToRemove = [];

  const unusedSpace = 70000000 - fileTree.size;

  const neededSpace = 30000000 - unusedSpace;

  const getSmallestValueToRemove = (dir: Dir) => {
    if (dir.size >= neededSpace) {
      console.log(dir.size);
      sizesToRemove.push(dir.size);
    }
    if (dir.files) {
      Object.values(dir.files).forEach((directory) => {
        getSmallestValueToRemove(directory);
      });
    }
  };

  Object.values(fileTree.files).forEach((directory) => {
    getSmallestValueToRemove(directory);
  });

  let answer = Math.min(...sizesToRemove);

  return answer;
};
