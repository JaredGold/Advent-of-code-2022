import { readFileToArray } from "../../utils/readFileToArray";

export const d5c2 = (input?: string[]) => {
  console.log("You have selected Day 5 Challenge 1");

  const positions = {
    "1": ["P", "F", "M", "Q", "W", "G", "R", "T"],
    "2": ["H", "F", "R"],
    "3": ["P", "Z", "R", "V", "G", "H", "S", "D"],
    "4": ["Q", "H", "P", "B", "F", "W", "G"],
    "5": ["P", "S", "M", "J", "H"],
    "6": ["M", "Z", "T", "H", "S", "R", "P", "L"],
    "7": ["P", "T", "H", "N", "M", "L"],
    "8": ["F", "D", "Q", "R"],
    "9": ["D", "S", "C", "N", "L", "P", "H"],
  };

  const allTasks = input ? input : readFileToArray("input", 5);

  allTasks.forEach((task) => {
    const t = task.split(" ");
    const toPush = positions[t[3]].slice(-+t[1]);

    for (let i = +t[1]; i > 0; i--) {
      positions[t[3]].pop();
    }
    const joinedArr = positions[t[5]].concat(toPush);
    positions[t[5]] = joinedArr;
  });

  console.log(positions);

  // Below is broke but above works as expected

  const answer = {
    1: positions["1"][positions["1"].length - 1],
    2: positions["2"][positions["2"].length - 2],
    3: positions["3"][positions["3"].length - 3],
    4: positions["4"][positions["4"].length - 4],
    5: positions["5"][positions["5"].length - 5],
    6: positions["6"][positions["6"].length - 6],
    7: positions["7"][positions["7"].length - 7],
    8: positions["8"][positions["8"].length - 8],
    9: positions["9"][positions["9"].length - 9],
  };

  return answer;
};
