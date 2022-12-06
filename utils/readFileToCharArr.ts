import { readFileSync } from "fs";

/**
 * Reads any given txt file
 *
 * @param fileName this is the name of the txt file you would like to read
 * @returns an array split on every line e.g. ["1000", "2000", "", "8000"]
 */
export const readFileToCharArr = (fileName: string, day: number) => {
  const data = readFileSync(`src/day${day}/${fileName}.txt`, "utf8");
  const charArr = data.split("");

  return charArr;
};
