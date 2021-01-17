import { isNumber, isValidOperation } from "./helpers";
import { ERROR_MESSAGE } from "./constants";

export type ParsedLineType = (string | number)[];

export const parser = (input: string): ParsedLineType => {
  const inputArr = input.split(" ");
  const result = inputArr.map((item, index) => {
    if (index % 2 === 0) {
      if (isNumber(item)) {
        return Number(item);
      } else {
        throw new TypeError(ERROR_MESSAGE);
      }
    }

    if (isValidOperation(item)) {
      return item;
    } else {
      throw new TypeError(ERROR_MESSAGE);
    }
  });

  return result;
};
