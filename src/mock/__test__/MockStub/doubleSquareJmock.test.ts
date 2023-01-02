import * as assert from "power-assert";
import { double } from "../../export/double";
import { doubleSquare } from "../../export/doubleSquare";

jest.mock("../../export/double");

describe("stub export default function with jest.mock", () => {
  beforeAll(() => {
    //doubleの返り値を5に変更する。
    (double as jest.Mock).mockReturnValue(5);
  });
  afterEach(() => {
    (double as jest.Mock).mockClear();
  });

  it("doubleのreturn値は5 なので 25である", () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 25);
  });
});
