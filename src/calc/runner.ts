import { OPEN_BRACKET, CLOSE_BRACKET, ERROR_BRACKETS } from "./constants";

import {
  mathOperations,
  unaryMathOperations,
  operatorPriority,
  PRIORITY,
} from "./mathOperations";
import { parser, ParsedLineType } from "./parser";
import {
  isNumber,
  isValidOperation,
  isValidUnaryOperation,
  isValidBrackets,
} from "./helpers";

export const getCalculateByPriority = (priority: number) => (
  arr: ParsedLineType
): ParsedLineType =>
  arr.reduce((acc: ParsedLineType, el: string | number) => {
    const prevEl = acc[acc.length - 1];

    switch (priority) {
      case PRIORITY.ZERO:
        if (
          operatorPriority[el] === priority &&
          isValidUnaryOperation(String(el)) &&
          isNumber(String(prevEl))
        ) {
          return [...acc.slice(0, -1), unaryMathOperations[el](Number(prevEl))];
        }

      case PRIORITY.FIRST:
      case PRIORITY.SECOND:
        if (
          operatorPriority[prevEl] === priority &&
          isNumber(String(el)) &&
          isValidOperation(String(prevEl))
        ) {
          return [
            ...acc.slice(0, -2),
            mathOperations[prevEl](Number(acc[acc.length - 2]), Number(el)),
          ];
        }

      default:
        return [...acc, el];
    }
  }, []);

const calcFunctions = [
  getCalculateByPriority(PRIORITY.ZERO),
  getCalculateByPriority(PRIORITY.FIRST),
  getCalculateByPriority(PRIORITY.SECOND),
];

const engine = (stack: ParsedLineType, i: number): number => {
  if (stack.length === 1) {
    return Number(stack[0]);
  }

  return engine(calcFunctions[i](stack), i + 1);
};

const plainStr = (stack: string): string => {
  let openPos = -1;

  const stackArr = stack.split("");

  for (let i = 0; i < stackArr.length; i++) {
    const el = stackArr[i];

    if (el === OPEN_BRACKET) {
      openPos = i;
    }

    if (el === CLOSE_BRACKET && openPos === 0) {
      const subStack = stack.slice(openPos + 1, i);
      const calcVal = engine(parser(subStack), 0);
      const newStack = String(calcVal) + stack.slice(i + 1);
      return plainStr(newStack);
    }

    if (el === CLOSE_BRACKET && openPos > 0) {
      const subStack = stack.slice(openPos + 1, i);
      const calcVal = engine(parser(subStack), 0);
      const newStack =
        stack.slice(0, openPos) + String(calcVal) + stack.slice(i + 1);

      return plainStr(newStack);
    }
  }

  return stack;
};

export const runner = (str: string): number | null => {
  if (!isValidBrackets(str)) {
    throw new TypeError(ERROR_BRACKETS);
  }

  if (!str.includes(OPEN_BRACKET)) {
    return engine(parser(str), 0);
  }

  return engine(parser(plainStr(str)), 0);
};
