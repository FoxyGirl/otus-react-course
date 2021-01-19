import { BINARY_OPERATORS, UNARY_OPERATORS } from "./constants";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isValidOperation = (operator: string): boolean =>
  BINARY_OPERATORS.includes(operator) || UNARY_OPERATORS.includes(operator);

export const isValidUnaryOperation = (operator: string): boolean =>
  UNARY_OPERATORS.includes(operator);
