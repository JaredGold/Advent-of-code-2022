import { readFileToArray } from "../../utils/readFileToArray";

export const d9c1 = (input?: string[]) => {
  // change days and challenges
  console.log("You have selected Day 9 Challenge 1");
  const rows = input ? input : readFileToArray("input", 9);

  const traveledLocations = { "0,0": true };
  const headPosition = { x: 0, y: 0 };
  const tailPosition = { x: 0, y: 0 };

  const moveTailPosition = () => {
    const shouldMoveRight = headPosition.x - tailPosition.x > 1;
    const shouldMoveLeft = headPosition.x - tailPosition.x < -1;
    const shouldMoveUp = headPosition.y - tailPosition.y > 1;
    const shouldMoveDown = headPosition.y - tailPosition.y < -1;

    const headOneRight = headPosition.x - tailPosition.x === 1;
    const headOneLeft = headPosition.x - tailPosition.x === -1;
    const headOneUp = headPosition.y - tailPosition.y === 1;
    const headOneDown = headPosition.y - tailPosition.y === -1;

    // head = x 4, y 3
    // tail = x 3, y 0

    // if the head is 2 to the right
    if (shouldMoveRight) {
      tailPosition.x++;
      if (headOneDown) tailPosition.y--;
      if (headOneUp) tailPosition.y++;
    }
    // if the head is 2 to the left
    if (shouldMoveLeft) {
      tailPosition.x--;
      if (headOneDown) tailPosition.y--;
      if (headOneUp) tailPosition.y++;
    }
    // if the tail is 2 to the up
    if (shouldMoveUp) {
      tailPosition.y++;
      if (headOneLeft) tailPosition.x--;
      if (headOneRight) tailPosition.x++;
    }
    // if the tail is 2 to the bottom
    if (shouldMoveDown) {
      tailPosition.y--;
      if (headOneLeft) tailPosition.x--;
      if (headOneRight) tailPosition.x++;
    }
  };

  rows.forEach((row) => {
    const [direction, amount] = row.split(" ");

    switch (direction) {
      // move right 1
      case "R":
        for (let i = +amount; i !== 0; i--) {
          headPosition.x++;
          moveTailPosition();
          traveledLocations[`${tailPosition.x},${tailPosition.y}`] = true;
        }
        break;
      // move left 1
      case "L":
        for (let i = +amount; i !== 0; i--) {
          headPosition.x--;
          moveTailPosition();
          traveledLocations[`${tailPosition.x},${tailPosition.y}`] = true;
        }
        break;
      // move up 1
      case "U":
        for (let i = +amount; i !== 0; i--) {
          headPosition.y++;
          moveTailPosition();
          traveledLocations[`${tailPosition.x},${tailPosition.y}`] = true;
        }
        break;
      // move down 1
      case "D":
        for (let i = +amount; i !== 0; i--) {
          headPosition.y--;
          moveTailPosition();
          traveledLocations[`${tailPosition.x},${tailPosition.y}`] = true;
        }
        break;
      default:
        break;
    }
  });

  // if the direction is move the head r 4 update the x position by +4
  // then iterate over each step for y, if the position is 1 away from head or same position don't do anything
  // if the position is two away from head add the new position to an object.
  // finally check the length of the Object.keys(traveledLocations)

  let answer = Object.keys(traveledLocations).length;

  return answer;
};
