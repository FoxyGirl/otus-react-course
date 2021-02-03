import { isNumber, isValidOperation, isValidUnaryOperation } from "./helpers";

describe("isNumber works correct", () => {
  test.each([
    ["1", true],
    ["2.5", true],
  ])("%s is a number", (a, expected) => {
    expect(isNumber(a)).toBe(expected);
  });

  test.each([
    ["*", false],
    ["2,5", false],
  ])("%s is not a number", (a, expected) => {
    expect(isNumber(a)).toBe(expected);
  });
});

describe("isValidOperation  works correct", () => {
  test.each([
    ["+", true],
    ["-", true],
    ["*", true],
    ["/", true],
    ["!", true],
    ["**", true],
    ["^", true],
  ])("%s is a valid operation", (a, expected) => {
    expect(isValidOperation(a)).toBe(expected);
  });

  it(`= is not a valid operation`, () => {
    expect(isValidOperation("=")).toBe(false);
  });
});

describe("isValidUnaryOperation  works correct", () => {
  test.each([
    ["!", true],
    ["**", true],
  ])("%s is a valid unary operation", (a, expected) => {
    expect(isValidUnaryOperation(a)).toBe(expected);
  });

  it(`* is not a valid unary operation`, () => {
    expect(isValidUnaryOperation("*")).toBe(false);
  });
});
