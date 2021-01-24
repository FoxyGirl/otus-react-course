import { mathOperations, unaryMathOperations } from "./mathOperations";

describe("Math operations test cases", () => {
  const add = "+";
  it(`1 ${add} 2 equals 3`, () => {
    expect(mathOperations[add](1, 2)).toBe(3);
  });

  const subtract = "-";
  it(`5 ${subtract} 2 equals 3`, () => {
    expect(mathOperations[subtract](5, 2)).toBe(3);
  });

  const multiply = "*";
  it(`2 ${multiply} 3 equals 6`, () => {
    expect(mathOperations[multiply](2, 3)).toBe(6);
  });

  const divide = "/";
  it(`8 ${divide} 2 equals 4`, () => {
    expect(mathOperations[divide](8, 2)).toBe(4);
  });

  const factorial = "!";
  it(`0 ${factorial} equals 1`, () => {
    expect(unaryMathOperations[factorial](0)).toBe(1);
  });

  it(`5 ${factorial} equals 120`, () => {
    expect(unaryMathOperations[factorial](5)).toBe(120);
  });

  it(`-2 ${factorial} equals -1`, () => {
    expect(unaryMathOperations[factorial](-2)).toBe(NaN);
  });

  const square = "**";
  it(`2 ${square} equals 4`, () => {
    expect(unaryMathOperations[square](2)).toBe(4);
  });

  it(`3 ${square} equals 9`, () => {
    expect(unaryMathOperations[square](3)).toBe(9);
  });

  const power = "^";
  it(`2 ${power} 3 equals 8`, () => {
    expect(mathOperations[power](2, 3)).toBe(8);
  });

  it(`3 ${power} 3 equals 27`, () => {
    expect(mathOperations[power](3, 3)).toBe(27);
  });
});
