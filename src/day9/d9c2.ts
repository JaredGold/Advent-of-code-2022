import { readFileToArray } from "../../utils/readFileToArray";

export const d9c2 = (input?: string[]) => {
  console.log("You have selected Day 9 Challenge 2");
  const rows = input ? input : readFileToArray("input", 9);

  const traveledLocations = { "0,0": true };
  const positions = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];

  const moveTailPosition = (parentPosition, tailPosition) => {
    const shouldMoveRight = parentPosition.x - tailPosition.x > 1;
    const shouldMoveLeft = parentPosition.x - tailPosition.x < -1;
    const shouldMoveUp = parentPosition.y - tailPosition.y > 1;
    const shouldMoveDown = parentPosition.y - tailPosition.y < -1;

    const headOneRight = parentPosition.x - tailPosition.x === 1;
    const headOneLeft = parentPosition.x - tailPosition.x === -1;
    const headOneUp = parentPosition.y - tailPosition.y === 1;
    const headOneDown = parentPosition.y - tailPosition.y === -1;

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
          positions[0].x++;
          for (let i = 1; i < positions.length; i++) {
            moveTailPosition(positions[i - 1], positions[i]);
          }
          traveledLocations[`${positions[9].x},${positions[9].y}`] = true;
        }
        break;
      // move left 1
      case "L":
        for (let i = +amount; i !== 0; i--) {
          positions[0].x--;
          for (let i = 1; i < positions.length; i++) {
            moveTailPosition(positions[i - 1], positions[i]);
          }
          traveledLocations[`${positions[9].x},${positions[9].y}`] = true;
        }
        break;
      // move up 1
      case "U":
        for (let i = +amount; i !== 0; i--) {
          positions[0].y++;
          for (let i = 1; i < positions.length; i++) {
            moveTailPosition(positions[i - 1], positions[i]);
          }
          traveledLocations[`${positions[9].x},${positions[9].y}`] = true;
        }
        break;
      // move down 1
      case "D":
        for (let i = +amount; i !== 0; i--) {
          positions[0].y--;
          for (let i = 1; i < positions.length; i++) {
            moveTailPosition(positions[i - 1], positions[i]);
          }
          traveledLocations[`${positions[9].x},${positions[9].y}`] = true;
        }
        break;
      default:
        break;
    }
  });

  console.log(traveledLocations);

  let answer = Object.keys(traveledLocations).length;

  return answer;
};
