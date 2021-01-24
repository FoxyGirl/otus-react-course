import { mathOperations, unaryMathOperations } from "./mathOperations";

export const ERROR_MESSAGE = "Unexpected string";

export const ERROR_STACK = "Unexpected stack";

export const ERROR_BRACKETS = "Unexpected bracket sequence";

export const BINARY_OPERATORS = Object.keys(mathOperations);

export const UNARY_OPERATORS = Object.keys(unaryMathOperations);

export const OPEN_BRACKET = "(";

export const CLOSE_BRACKET = ")";
