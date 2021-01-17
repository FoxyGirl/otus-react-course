import { mathOperations } from "./mathOperations";
import { parser } from "./parser";
import { isNumber, isValidOperation } from "./helpers";

export const calculate = (arr: (number | string)[]): number => {
  const stack: (number | string)[] = [];

  let i = 0;
  while (i < arr.length) {
    const el = arr[i];

    if (!isNumber(String(el)) && isValidOperation(String(el))) {
      const el2 = arr[i + 1];
      const el1 = stack.pop();

      stack.push(mathOperations[el](Number(el1), Number(el2)));
      i += 2;
    } else {
      stack.push(el);
      i += 1;
    }
  }

  return Number(stack.pop());
};

export const runner = (str: string): number => calculate(parser(str));
