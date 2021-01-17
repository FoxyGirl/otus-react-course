type MathFunction = (a: number, b: number) => number;

const add: MathFunction = (a, b) => a + b;

const subtract: MathFunction = (a, b) => a - b;

const multiply: MathFunction = (a, b) => a * b;

const divide: MathFunction = (a, b) => a / b;

export enum PRIORITY {
  FIRST,
  SECOND,
}

export const mathOperations: { [key: string]: MathFunction } = {
  "*": multiply,
  "/": divide,
  "+": add,
  "-": subtract,
};

export const operatorPriority: { [key: string]: number } = {
  "*": PRIORITY.FIRST,
  "/": PRIORITY.FIRST,
  "+": PRIORITY.SECOND,
  "-": PRIORITY.SECOND,
};
