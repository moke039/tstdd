import * as assert from "power-assert";
import * as double from "../../export-default/double";
import doubleSquare from "../../export-default/doubleSquare";

describe("stub export function with jest.spyOn", () => {
  let spy: jest.SpyInstance;
  beforeAll(() => {
    /*
    const org = require("../../export-default/double");
    // spyと同時に出力情報の変更
    spy = jest.spyOn(org, "double").mockReturnValue(1);
    */
    spy = jest.spyOn(double, "default").mockReturnValue(5);
  });

  afterAll(() => {
    spy.mockRestore();
  });

  // spyの確認
  it("doubleが呼び出されるのは1回", () => {
    const actual = doubleSquare(3);
    assert.equal(spy.mock.calls.length, 1);
  });

  it("doubleの引数は3である", () => {
    const actual = doubleSquare(3);
    assert.equal(spy.mock.calls[0], 3);
  });

  it("double処理は正常終了し、例外をなげない", () => {
    const actual = doubleSquare(3);
    assert.equal(spy.mock.results[0].type, "return");
  });

  it("doubleのreturn値は5である", () => {
    const actual = doubleSquare(3);
    assert.equal(spy.mock.results[0].value, 5);
  });

  // stubの確認
  it("doubleSquareの戻り値は25になる", () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 25);
  });
});

describe("mockした関数が前の状態に戻っているかどうか確認する", () => {
  let spy: jest.SpyInstance;
  beforeAll(() => {
    const org = require("../../export-default/double");
    spy = jest.spyOn(org, "default");
  });

  afterEach(() => {
    spy.mockClear();
  });

  it("doubleSquareの戻り値は、(2 * 3) ^ 2 で36になる", () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 36);
  });
});
