type MathFunction = (a: number, b: number) => number;
type UnaryMathFunction = (a: number) => number;

const add: MathFunction = (a, b) => a + b;

const subtract: MathFunction = (a, b) => a - b;

const multiply: MathFunction = (a, b) => a * b;

const divide: MathFunction = (a, b) => a / b;

const power: MathFunction = (a, b) => Math.pow(a, b);

const factorial: UnaryMathFunction = (num) => {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
};

const square: UnaryMathFunction = (num) => num * num;

export enum PRIORITY {
  ZERO = 0,
  FIRST,
  SECOND,
}

export const mathOperations: {
  [key: string]: MathFunction | UnaryMathFunction;
} = {
  "*": multiply,
  "/": divide,
  "+": add,
  "-": subtract,
  "^": power,
};

export const unaryMathOperations: {
  [key: string]: UnaryMathFunction;
} = {
  "!": factorial,
  "**": square,
};

export const operatorPriority: { [key: string]: number } = {
  "!": PRIORITY.ZERO,
  "**": PRIORITY.ZERO,
  "^": PRIORITY.ZERO,
  "*": PRIORITY.FIRST,
  "/": PRIORITY.FIRST,
  "+": PRIORITY.SECOND,
  "-": PRIORITY.SECOND,
};
