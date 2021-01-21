import { mathOperations, unaryMathOperations } from "./mathOperations";

export const ERROR_MESSAGE = "Unexpected string";

export const BINARY_OPERATORS = Object.keys(mathOperations);

export const UNARY_OPERATORS = Object.keys(unaryMathOperations);

export const BRACKETS: { [key: string]: number } = { "(": 1, ")": -1 };
