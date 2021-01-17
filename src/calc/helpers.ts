import { OPERATORS } from "./constants";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isValidOperation = (operator: string): boolean =>
  OPERATORS.includes(operator);
