import * as assert from "power-assert";
import double from "../../export-default/double";
import doubleSquare from "../../export-default/doubleSquare";

jest.mock("../../export-default/double");

describe("stub export function with jest.mock", () => {
  beforeAll(() => {
    // 出力情報の変更
    (double as jest.Mock).mockReturnValue(5);
  });

  afterEach(() => {
    (double as jest.Mock).mockClear();
  });

  it("doubleが呼び出されるのは1回", () => {
    const actual = doubleSquare(3);
    assert.equal((double as jest.Mock).mock.calls.length, 1);
  });

  it("doubleの引数は3である", () => {
    const actual = doubleSquare(3);
    assert.equal((double as jest.Mock).mock.calls[0], 3);
  });

  it("double処理は正常終了し、例外をなげない", () => {
    const actual = doubleSquare(3);
    assert.equal((double as jest.Mock).mock.results[0].type, "return");
  });

  it("doubleのreturn値は5である", () => {
    const actual = doubleSquare(3);
    assert.equal((double as jest.Mock).mock.results[0].value, 5);
  });

  it("返り値は、25になる", () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 25);
  });
});
