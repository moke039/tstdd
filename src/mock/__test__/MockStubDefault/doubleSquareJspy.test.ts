import * as assert from "power-assert";
import * as double from "../../export-default/double";
import doubleSquare from "../../export-default/doubleSquare";

describe("spy export default", () => {
  let spy: jest.SpyInstance;

  beforeAll(() => {
    /* import * as double を使用しない場合
    const org = require("../../export-default/double");
    spy = jest.spyOn(org, "default");
    */
    spy = jest.spyOn(double, "default").mockReturnValue(5);
  });

  afterAll(() => {
    spy.mockRestore();
  });

  it("doubleSquareの戻り値は、(5) ^ 2 で25になる", () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 25);
  });
});
