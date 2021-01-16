import { isNumber, isValidOperation } from "./helpers";

describe("isNumber works correct", () => {
  const str1 = "1";
  it(`${str1} is a number`, () => {
    expect(isNumber(str1)).toBe(true);
  });

  const str2 = "2.5";
  it(`${str2} is a number`, () => {
    expect(isNumber(str2)).toBe(true);
  });

  const str3 = "*";
  it(`${str3} is not a number`, () => {
    expect(isNumber(str3)).toBe(false);
  });

  const str4 = "2,5";
  it(`${str4} is not a number`, () => {
    expect(isNumber(str4)).toBe(false);
  });
});

describe("isValidOperation  works correct", () => {
  const str1 = "+";
  it(`${str1} is a valid operation`, () => {
    expect(isValidOperation(str1)).toBe(true);
  });

  const str2 = "-";
  it(`${str2} is a valid operation`, () => {
    expect(isValidOperation(str2)).toBe(true);
  });

  const str3 = "*";
  it(`${str3} is a valid operation`, () => {
    expect(isValidOperation(str3)).toBe(true);
  });

  const str4 = "/";
  it(`${str4} is a valid operation`, () => {
    expect(isValidOperation(str4)).toBe(true);
  });

  const str5 = "!";
  it(`${str5} is not a valid operation`, () => {
    expect(isValidOperation(str5)).toBe(false);
  });
});
