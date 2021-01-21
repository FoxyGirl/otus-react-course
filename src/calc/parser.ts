import { isNumber, isValidOperation, isValidUnaryOperation } from "./helpers";
import { ERROR_MESSAGE, BRACKETS } from "./constants";

export type ParsedLineType = (string | number)[];

const isCorrectNumber = (prevEl: string, el: string): boolean =>
  isNumber(el) &&
  (prevEl === "undefined" ||
    isValidOperation(prevEl) ||
    openBracket === prevEl);

const isCorrectOperation = (prevEl: string, el: string): boolean =>
  isValidOperation(el) &&
  (isNumber(prevEl) ||
    isValidUnaryOperation(prevEl) ||
    closeBracket === prevEl);

const [openBracket, closeBracket] = Object.keys(BRACKETS);

const isCorrectBrackets = (prevEl: string, el: string): boolean =>
  ((isValidOperation(prevEl) || prevEl === "undefined") &&
    openBracket === el) ||
  ((isNumber(prevEl) || isValidUnaryOperation(prevEl)) && closeBracket === el);

export const parser = (input: string): ParsedLineType => {
  const inputArr = input.split(" ");
  let bracketsChecker = 0;

  const result = inputArr.reduce<ParsedLineType>((acc, el, index) => {
    const prevEl = String(acc[index - 1]);

    if (isCorrectNumber(prevEl, el)) {
      return [...acc, Number(el)];
    }

    if (isCorrectOperation(prevEl, el)) {
      return [...acc, el];
    }

    if (isCorrectBrackets(prevEl, el)) {
      bracketsChecker += BRACKETS[el];
      return [...acc, el];
    }

    throw new TypeError(ERROR_MESSAGE);
  }, []);

  if (bracketsChecker !== 0) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return result;
};
