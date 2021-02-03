import {
  BINARY_OPERATORS,
  UNARY_OPERATORS,
  OPEN_BRACKET,
  CLOSE_BRACKET,
} from "./constants";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isValidOperation = (operator: string): boolean =>
  BINARY_OPERATORS.includes(operator) || UNARY_OPERATORS.includes(operator);

export const isValidUnaryOperation = (operator: string): boolean =>
  UNARY_OPERATORS.includes(operator);

export const isValidBrackets = (str: string): boolean => {
  const bracketsChecker: string[] = [];

  for (const el of str) {
    if (el === OPEN_BRACKET) {
      bracketsChecker.push(el);
    }

    if (
      el === CLOSE_BRACKET &&
      bracketsChecker[bracketsChecker.length - 1] === OPEN_BRACKET
    ) {
      bracketsChecker.pop();
    }
  }

  return bracketsChecker.length === 0;
};
