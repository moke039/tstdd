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
    spy = jest.spyOn(double, "default");
  });

  afterEach(() => {
    // 毎回テストごとに盗聴した入出力情報をリセットする
    spy.mockClear();
  });

  it("doubleが呼び出されるのは1回", () => {
    const actual = doubleSquare(3);
    // spy.mock.callsは呼び出した回数分の引数の情報がはいる
    // lengthを使えば、何回呼び出されたのかがわかる
    assert.equal(spy.mock.calls.length, 1);
  });

  it("doubleの引数は3である", () => {
    const actual = doubleSquare(3);
    // spy.mock.calls[index]でindex回目の引数情報にアクセスできる
    assert.equal(spy.mock.calls[0], 3);
  });

  it("double処理は正常終了し、例外をなげない", () => {
    const actual = doubleSquare(3);
    // spy.mock.resultsは、spy対象の出力情報を配列管理している
    // [0]ではじめに呼び出されたときの出力情報にアクセスでき, typeでそれが正常終了, 異常終了などを判定できる
    assert.equal(spy.mock.results[0].type, "return");
  });

  it("doubleのreturn値は3を2倍した6である", () => {
    const actual = doubleSquare(3);
    // spy.mock.results[index].valueでindex回目に出力した値にアクセスできる
    assert.equal(spy.mock.results[0].value, 6);
  });

  it("doubleSquareの戻り値は、(2 * 3) ^ 2 で36になる", () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 36);
  });
});
