import { parser } from "./parser";

describe("Parser correct cases", () => {
  test.each([
    ["1 + 32", [1, "+", 32]],
    ["11 + 3 * 22", [11, "+", 3, "*", 22]],
    ["1 + 32 - 2 + 2", [1, "+", 32, "-", 2, "+", 2]],
    ["10 - 2 * 3 + 5 ! - 2", [10, "-", 2, "*", 3, "+", 5, "!", "-", 2]],
  ])("%s equals %o", (a, expected) => {
    expect(parser(a)).toEqual(expected);
  });
});

describe("Parser invalid cases", () => {
  test.each([
    ["1 + + 33 - 2"],
    ["1  + 33 - 2"],
    ["1 +  33 - 2"],
    ["1 | 33 - 2"],
    ["+ 1 - 2"],
  ])('%s throws Error "Unexpected string"', (a) => {
    expect(() => parser(a)).toThrow(TypeError("Unexpected string"));
  });
});
