import { runner } from "./runner";

describe("Calculate test cases", () => {
  test.each([
    ["1 + 2", 3],
    ["1 + 2 + 5", 8],
    ["5 - 2 - 4", -1],
    ["1 + 2 * 5", 11],
    ["10 - 2 * 3", 4],
    ["10 - 2 * 3 + 5 !", 124],
    ["10 - 2 * 3 + 5 ! / 2 **", 34],
    ["10 - 2 * 3 + 5 ! / 2 ** - 3 ^ 3", 7],
  ])("%s equals %i", (a, expected) => {
    expect(runner(a)).toBe(expected);
  });
});

describe("Runner invalid cases", () => {
  it(`3 + -5 !: factorial for negative real numbers causes "Unexpected stack"`, () => {
    expect(() => runner("3 + -5 !")).toThrow(TypeError("Unexpected stack"));
  });
});

describe("Runner with brackets invalid cases", () => {
  test.each([["1 + )3  - 2("], ["1 + ((3 + 2 **)"], ["1 + (3 + 2 ** "]])(
    '%s throws Error "Unexpected bracket sequence"',
    (a) => {
      expect(() => runner(a)).toThrow(TypeError("Unexpected bracket sequence"));
    }
  );
});

describe("Calculate test cases with brackets", () => {
  test.each([
    ["(1 + 2) * 5", 15],
    ["(1 + 2) ^ (5 - 3 * 1)", 9],
    ["(1 + (2 + 5) * 2) - 2 **", 11],
    ["(1 + ((2 !) + 5) * 2) - (2 ** + 0 !)", 10],
  ])("%s equals %i", (a, expected) => {
    expect(runner(a)).toBe(expected);
  });
});
