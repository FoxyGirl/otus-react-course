import { parser } from "./parser";

describe("Parser correct cases", () => {
  const str1 = "1 + 32";
  it(str1, () => {
    expect(parser(str1)).toEqual([1, "+", 32]);
  });

  const str2 = "11 + 3 * 22";
  it(str2, () => {
    expect(parser(str2)).toEqual([11, "+", 3, "*", 22]);
  });

  const str3 = "1 + 32 - 2 + 2";
  it(str3, () => {
    expect(parser(str3)).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });

  const str4 = "10 - 2 * 3 + 5 ! - 2";
  it(str4, () => {
    expect(parser(str4)).toEqual([10, "-", 2, "*", 3, "+", 5, "!", "-", 2]);
  });
});

describe("Parser invalid cases", () => {
  const str1 = "1 + + 33 - 2";
  it(str1, () => {
    expect(() => parser(str1)).toThrow(TypeError("Unexpected string"));
  });

  const str2 = "1  + 33 - 2";
  it(str2, () => {
    expect(() => parser(str2)).toThrow(TypeError("Unexpected string"));
  });

  const str3 = "1 +  33 - 2";
  it(str3, () => {
    expect(() => parser(str3)).toThrow(TypeError("Unexpected string"));
  });

  const str4 = "1 | 33 - 2";
  it(str4, () => {
    expect(() => parser(str4)).toThrow(TypeError("Unexpected string"));
  });

  const str5 = "+ 1 - 2";
  it(str5, () => {
    expect(() => parser(str5)).toThrow(TypeError("Unexpected string"));
  });
});

describe("Parser with brackets correct cases", () => {
  const str1 = "1 + ( 3 - 2 )";
  it(str1, () => {
    expect(parser(str1)).toEqual([1, "+", "(", 3, "-", 2, ")"]);
  });

  const str2 = "1 + ( 3 + 2 ** )";
  it(str2, () => {
    expect(parser(str2)).toEqual([1, "+", "(", 3, "+", 2, "**", ")"]);
  });

  const str3 = "( 1 + 2 ) * 5";
  it(str3, () => {
    expect(parser(str3)).toEqual(["(", 1, "+", 2, ")", "*", 5]);
  });
});

describe("Parser with brackets invalid cases", () => {
  const str1 = "1 + ) 3  - 2 (";
  it(str1, () => {
    expect(() => parser(str1)).toThrow(TypeError("Unexpected string"));
  });

  const str2 = "1 + ( ( 3 + 2 ** )";
  it(str2, () => {
    expect(() => parser(str2)).toThrow(TypeError("Unexpected string"));
  });

  const str3 = "1 + ( 3 + 2 ** ";
  it(str3, () => {
    expect(() => parser(str3)).toThrow(TypeError("Unexpected string"));
  });
});
