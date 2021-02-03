import { isNumber, isValidOperation, isValidUnaryOperation } from "./helpers";
import { ERROR_MESSAGE } from "./constants";

export type ParsedLineType = (string | number)[];

const isCorrectNumber = (prevEl: string, el: string): boolean =>
  isNumber(el) && (prevEl === "undefined" || isValidOperation(prevEl));

const isCorrectOperation = (prevEl: string, el: string): boolean =>
  isValidOperation(el) && (isNumber(prevEl) || isValidUnaryOperation(prevEl));

export const parser = (input: string): ParsedLineType => {
  const inputArr = input.split(" ");

  const result = inputArr.reduce<ParsedLineType>((acc, el, index) => {
    const prevEl = String(acc[index - 1]);

    if (isCorrectNumber(prevEl, el)) {
      return [...acc, Number(el)];
    }

    if (isCorrectOperation(prevEl, el)) {
      return [...acc, el];
    }

    throw new TypeError(ERROR_MESSAGE);
  }, []);

  return result;
};
