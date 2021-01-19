import {
  mathOperations,
  unaryMathOperations,
  operatorPriority,
  PRIORITY,
} from "./mathOperations";
import { parser, ParsedLineType } from "./parser";
import { isNumber, isValidOperation, isValidUnaryOperation } from "./helpers";

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

export const runner = (str: string): number => engine(parser(str), 0);
