type MathFunction = (a: number, b: number) => number;

const add: MathFunction = (a, b) => a + b;

const subtract: MathFunction = (a, b) => a - b;

const multiply: MathFunction = (a, b) => a * b;

const divide: MathFunction = (a, b) => a / b;

export const mathOperations: { [key: string]: MathFunction } = {
  "*": multiply,
  "/": divide,
  "+": add,
  "-": subtract,
};
