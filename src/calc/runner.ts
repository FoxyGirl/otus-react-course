import { mathOperations } from "./mathOperations";
import { parser, ParsedLineType } from "./parser";
import { isNumber, isValidOperation } from "./helpers";

export const calculate = (arr: ParsedLineType): number => {
  const stack: ParsedLineType = arr.reduce(
    (acc: ParsedLineType, el: string | number) => {
      const prevEl = acc[acc.length - 1];

      if (isNumber(String(el)) && isValidOperation(String(prevEl))) {
        return [
          ...acc.slice(0, -2),
          mathOperations[prevEl](Number(acc[acc.length - 2]), Number(el)),
        ];
      }

      return [...acc, el];
    },
    []
  );

  return Number(stack[0]);
};

export const runner = (str: string): number => calculate(parser(str));
