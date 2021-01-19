import { isNumber, isValidOperation, isValidUnaryOperation } from "./helpers";
import { ERROR_MESSAGE } from "./constants";

export type ParsedLineType = (string | number)[];

export const parser = (input: string): ParsedLineType => {
  const inputArr = input.split(" ");

  const result = inputArr.reduce<ParsedLineType>((acc, el, index) => {
    const prevEl = String(acc[index - 1]);

    if (index === 0 && isNumber(el)) {
      return [...acc, Number(el)];
    } else if (isNumber(prevEl) && isValidOperation(el)) {
      return [...acc, el];
    } else if (isValidUnaryOperation(prevEl) && isValidOperation(el)) {
      return [...acc, el];
    } else if (isValidOperation(prevEl) && isNumber(el)) {
      return [...acc, Number(el)];
    } else {
      throw new TypeError(ERROR_MESSAGE);
    }
  }, []);

  return result;
};
