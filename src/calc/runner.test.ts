import { runner } from "./runner";

describe("Calculate test cases", () => {
  const str1 = "1 + 2";
  it(`${str1} equals 3`, () => {
    expect(runner(str1)).toBe(3);
  });

  const str2 = "1 + 2 + 5";
  it(`${str2} equals 8`, () => {
    expect(runner(str2)).toBe(8);
  });

  const str3 = "5 - 2 - 4";
  it(`${str3} equals -1`, () => {
    expect(runner(str3)).toBe(-1);
  });

  const str4 = "1 + 2 * 5";
  it(`${str4} equals 11`, () => {
    expect(runner(str4)).toBe(11);
  });

  const str5 = "10 - 2 * 3";
  it(`${str5} equals 4`, () => {
    expect(runner(str5)).toBe(4);
  });

  const str6 = "10 - 2 * 3 + 5 !";
  it(`${str6} equals 124`, () => {
    expect(runner(str6)).toBe(124);
  });

  const str7 = "10 - 2 * 3 + 5 ! / 2 **";
  it(`${str7} equals 34`, () => {
    expect(runner(str7)).toBe(34);
  });

  const str8 = "10 - 2 * 3 + 5 ! / 2 ** - 3 ^ 3";
  it(`${str8} equals 7`, () => {
    expect(runner(str8)).toBe(7);
  });
});

describe("Runner with brackets invalid cases", () => {
  const str1 = "1 + )3  - 2(";
  it(str1, () => {
    expect(() => runner(str1)).toThrow(
      TypeError("Unexpected bracket sequence")
    );
  });

  const str2 = "1 + ((3 + 2 **)";
  it(str2, () => {
    expect(() => runner(str2)).toThrow(
      TypeError("Unexpected bracket sequence")
    );
  });

  const str3 = "1 + (3 + 2 ** ";
  it(str3, () => {
    expect(() => runner(str3)).toThrow(
      TypeError("Unexpected bracket sequence")
    );
  });
});

describe("Calculate test cases with brackets", () => {
  const str1 = "(1 + 2) * 5";
  it(`${str1} equals 15`, () => {
    expect(runner(str1)).toBe(15);
  });

  const str2 = "(1 + 2) ^ (5 - 3 * 1)";
  it(`${str2} equals 9`, () => {
    expect(runner(str2)).toBe(9);
  });

  const str3 = "(1 + (2 + 5) * 2) - 2 **";
  it(`${str3} equals 11`, () => {
    expect(runner(str3)).toBe(11);
  });

  const str4 = "(1 + ((2 !) + 5) * 2) - 2 **";
  it(`${str4} equals 11`, () => {
    expect(runner(str4)).toBe(11);
  });
});
