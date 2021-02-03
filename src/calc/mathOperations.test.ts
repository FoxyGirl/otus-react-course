import { mathOperations, unaryMathOperations } from "./mathOperations";

describe("Math operations test cases", () => {
  describe("Binary math operations test cases", () => {
    test.each([
      [1, "+", 2, 3],
      [5, "-", 2, 3],
      [2, "*", 3, 6],
      [8, "/", 2, 4],
      [2, "^", 3, 8],
      [3, "^", 3, 27],
    ])("%i %s %i equals %i", (a, b, c, expected) => {
      expect(mathOperations[b](a, c)).toBe(expected);
    });
  });

  describe("Unary math operations test cases", () => {
    test.each([
      [0, "!", 1],
      [5, "!", 120],
      [-2, "!", NaN],
      [2, "**", 4],
      [3, "**", 9],
    ])("%i %s equals %i", (a, b, expected) => {
      expect(unaryMathOperations[b](a)).toBe(expected);
    });
  });
});
