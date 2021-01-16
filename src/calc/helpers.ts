import { OPERATIONS } from "./constants";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isValidOperation = (operation: string): boolean =>
  OPERATIONS.includes(operation);
