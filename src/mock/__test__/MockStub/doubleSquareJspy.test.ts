import * as assert from "power-assert";
import * as double from "../../export/double";
import { doubleSquare } from "../../export/doubleSquare";

describe("spy export", () => {
  let spy: jest.SpyInstance;

  beforeAll(() => {
    /* import * as double を使用しない場合
    const org = require("../../export/double");
    spy = jest.spyOn(org, "default");
    */
    spy = jest.spyOn(double, "double").mockReturnValue(5);
  });

  afterAll(() => {
    spy.mockRestore();
  });

  it("doubleSquareの戻り値は、(5) ^ 2 で25になる", () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 25);
  });
});
