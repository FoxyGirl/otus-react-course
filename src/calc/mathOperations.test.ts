import { mathOperations } from "./mathOperations";

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
});
