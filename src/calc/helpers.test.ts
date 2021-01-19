import { isNumber, isValidOperation, isValidUnaryOperation } from "./helpers";

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
  it(`${str5} is a valid operation`, () => {
    expect(isValidOperation(str5)).toBe(true);
  });

  const str6 = "**";
  it(`${str6} is a valid operation`, () => {
    expect(isValidOperation(str6)).toBe(true);
  });

  const str7 = "^";
  it(`${str7} is a valid operation`, () => {
    expect(isValidOperation(str7)).toBe(true);
  });

  const str8 = "=";
  it(`${str8} is not a valid operation`, () => {
    expect(isValidOperation(str8)).toBe(false);
  });
});

describe("isValidUnaryOperation  works correct", () => {
  const str1 = "!";
  it(`${str1} is a valid unary operation`, () => {
    expect(isValidUnaryOperation(str1)).toBe(true);
  });

  const str2 = "**";
  it(`${str2} is a valid unary operation`, () => {
    expect(isValidUnaryOperation(str2)).toBe(true);
  });

  const str3 = "*";
  it(`${str3} is not a valid unary operation`, () => {
    expect(isValidUnaryOperation(str3)).toBe(false);
  });
});
