import fizzbuzz from "../fizzbuzz";

describe("FizzBuzz", () => {
  describe("数字を与えると文字列を返す", () => {
    it("1を与えると'1'を返す", () => {
      expect(fizzbuzz(1)).toBe("1");
    });
    it("7を与えると'7'を返す", () => {
      expect(fizzbuzz(7)).toBe("7");
    });
  });
  describe("3の倍数の数字を与えると文字列'Fizz'を返す", () => {
    it("3を与えると'Fizz'を返す", () => {
      expect(fizzbuzz(3)).toBe("Fizz");
    });
    it("6を与えると'Fizz'を返す", () => {
      expect(fizzbuzz(6)).toBe("Fizz");
    });
  });
});
