import { AbsoluteNumberCalculator } from "../app";

describe("Test find absolute number 0", () => {
  test("Test find absolute number 0", () => {
    let number = 1;
    let expected = 1;

    expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
  });
});