import { readFileToArray } from "../../utils/readFileToArray";

export const d10c1 = (input?: string[]) => {
  // change days and challenges
  console.log("You have selected Day 10 Challenge 1");
  const commands = input ? input : readFileToArray("input", 10);

  let x = 1;
  let cycleCount = { 20: 0, 60: 0, 100: 0, 140: 0, 180: 0, 220: 0, 260: 0 };

  const updateCycleValues = (cyc: number) => {
    const cycle = cyc.toString();
    if (Object.keys(cycleCount).includes(cycle)) {
      cycleCount[cycle] = cyc * x;
    }
  };

  let cycle = 1;

  for (let i = 0; cycle <= 220; i++) {
    const command = commands[i].split(" ");
    switch (command[0]) {
      case "addx":
        for (let j = 0; j < 2; j++) {
          updateCycleValues(cycle);
          cycle++;
          if (j === 1) {
            x = x + +command[1];
          }
        }
        break;

      default:
        updateCycleValues(cycle);
        cycle++;
        break;
    }
  }

  console.log(cycleCount);

  const answer = Object.values(cycleCount).reduce((a, b) => a + b, 0);

  return answer;
};
