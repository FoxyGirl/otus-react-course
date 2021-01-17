import { mathOperations, operatorPriority, PRIORITY } from "./mathOperations";
import { parser, ParsedLineType } from "./parser";
import { isNumber, isValidOperation } from "./helpers";

export const getCalculateByPriority = (priority: number) => (
  arr: ParsedLineType
): ParsedLineType => {
  const stack: ParsedLineType = arr.reduce(
    (acc: ParsedLineType, el: string | number) => {
      const prevEl = acc[acc.length - 1];

      if (
        isNumber(String(el)) &&
        isValidOperation(String(prevEl)) &&
        operatorPriority[prevEl] === priority
      ) {
        return [
          ...acc.slice(0, -2),
          mathOperations[prevEl](Number(acc[acc.length - 2]), Number(el)),
        ];
      }

      return [...acc, el];
    },
    []
  );

  return stack;
};

const firstCalculate = getCalculateByPriority(PRIORITY.FIRST);
const secondCalculate = getCalculateByPriority(PRIORITY.SECOND);

export const runner = (str: string): number => {
  const parsedArr = parser(str);
  let resultStack = firstCalculate(parsedArr);

  if (resultStack.length === 1) {
    return Number(resultStack[0]);
  } else {
    resultStack = secondCalculate(resultStack);
    return Number(resultStack[0]);
  }
};
