import { calculate } from "./runner";

describe("Calculate test cases", () => {
  const arr1 = [1, "+", 2];
  it.only(`${arr1} equals 3`, () => {
    expect(calculate(arr1)).toBe(3);
  });

  const arr2 = [1, "+", 2, "+", 5];
  it.only(`${arr2} equals 8`, () => {
    expect(calculate(arr2)).toBe(8);
  });

  const arr3 = [5, "-", 2, "-", 4];
  it.only(`${arr3} equals -1`, () => {
    expect(calculate(arr3)).toBe(-1);
  });

  // const arr4 = [1, "+", 2, "*", 5];
  // it.only(`${arr4} equals 11`, () => {
  //   expect(calculate(arr4)).toBe(11);
  // });

  // const arr5 = [10, "-", 2, "*", 3];
  // it.only(`${arr5} equals 4`, () => {
  //   expect(calculate(arr5)).toBe(4);
  // });
});
