import { readFileToArray } from "../../utils/readFileToArray";

export const d10c2 = (input?: string[]) => {
  console.log("You have selected Day 10 Challenge 2");
  const commands = input ? input : readFileToArray("input", 10);

  const drawCRT = (position: number) => {
    const newArr = [];

    for (let i = 0; i < 40; i++) {
      if (i >= position - 1 && i <= position + 1) {
        newArr.push("█");
      } else newArr.push(" ");
    }

    return newArr;
  };

  const drawScreen = () => {
    if (cycle < 39) {
      const position = screen[0].length - 1;
      screen[0].push(drawing[position]);
    } else if (cycle < 79) {
      const position = screen[1].length - 1;
      screen[1].push(drawing[position]);
    } else if (cycle < 119) {
      const position = screen[2].length - 1;
      screen[2].push(drawing[position]);
    } else if (cycle < 159) {
      const position = screen[3].length - 1;
      screen[3].push(drawing[position]);
    } else if (cycle < 199) {
      const position = screen[4].length - 1;
      screen[4].push(drawing[position]);
    } else if (cycle < 239) {
      const position = screen[5].length - 1;
      screen[5].push(drawing[position]);
    }
  };

  let drawing = drawCRT(1);
  let screen = [[], [], [], [], [], []];
  let position = 1;
  let cycle = 0;

  for (let i = 0; cycle < 240; i++) {
    if (i === 0) drawScreen();
    const command = commands[i].split(" ");
    switch (command[0]) {
      case "addx":
        for (let j = 0; j < 2; j++) {
          drawScreen();
          cycle++;
          if (j === 1) {
            position = position + +command[1];
            drawing = drawCRT(position);
          }
        }
        break;

      default:
        drawScreen();
        cycle++;
        break;
    }
  }

  // copy value at iterative position
  // if x value moves move ### middle position to that location
  // make everything else .
  // array can be max of 40
  // if line array is 40 push array to screen array.

  const cleanScreen = [
    screen[0].join(""),
    screen[1].join(""),
    screen[2].join(""),
    screen[3].join(""),
    screen[4].join(""),
    screen[5].join(""),
  ];

  return cleanScreen;
};
