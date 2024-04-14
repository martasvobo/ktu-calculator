import calculateResult from "./calculateResult";

describe("calculateResult function", () => {
  it("should add two numbers", () => {
    const expression = "2 + 3";
    const expectedResult = 5;
    expect(calculateResult(expression)).toBe(expectedResult);
  });

  it("should subtract two numbers", () => {
    const expression = "5 - 2";
    const expectedResult = 3;
    expect(calculateResult(expression)).toBe(expectedResult);
  });
  it("should perform multiple operations at once", () => {
    const expression = "5 - 2 + 3 * 2";
    const expectedResult = 9;
    expect(calculateResult(expression)).toBe(expectedResult);
  });

  it("should multiply two numbers", () => {
    const expression = "4 * 3";
    const expectedResult = 12;
    expect(calculateResult(expression)).toBe(expectedResult);
  });
  it("should perform complex operations", () => {
    const expression = "9 / sqrt(9)";
    const expectedResult = 3;
    expect(calculateResult(expression)).toBe(expectedResult);
  });

  it("should divide two numbers", () => {
    const expression = "10 / 2";
    const expectedResult = 5;
    expect(calculateResult(expression)).toBe(expectedResult);
  });

  it("should handle division by zero", () => {
    const expression = "10 / 0";
    expect(calculateResult(expression)).toBe(Infinity);
  });

  it("should calculate sine of a number", () => {
    const expression = "sin(0)";
    const expectedResult = 0;
    expect(calculateResult(expression)).toBeCloseTo(expectedResult);
  });

  it("should calculate cosine of a number", () => {
    const expression = "cos(0)";
    const expectedResult = 1;
    expect(calculateResult(expression)).toBeCloseTo(expectedResult);
  });

  it("should calculate tangent of a number", () => {
    const expression = "tan(0)";
    const expectedResult = 0;
    expect(calculateResult(expression)).toBeCloseTo(expectedResult);
  });

  it("should calculate power of a number", () => {
    const expression = "2^3";
    const expectedResult = 8;
    expect(calculateResult(expression)).toBe(expectedResult);
  });

  it("should calculate exponent of a number", () => {
    const expression = "exp(1)";
    const expectedResult = Math.exp(1);
    expect(calculateResult(expression)).toBeCloseTo(expectedResult);
  });

  it("should calculate square root of a number", () => {
    const expression = "sqrt(4)";
    const expectedResult = 2;
    expect(calculateResult(expression)).toBe(expectedResult);
  });

  it("should handle parentheses", () => {
    const expression = "2 * (3 + 4)";
    const expectedResult = 14;
    expect(calculateResult(expression)).toBe(expectedResult);
  });

  it("should calculate logarithm of a number", () => {
    const expression = "log(100)";
    const expectedResult = 2;
    expect(calculateResult(expression)).toBe(expectedResult);
  });

  it("should handle floating point numbers", () => {
    const expression = "0.1 + 0.2";
    const expectedResult = 0.3;
    expect(calculateResult(expression)).toBeCloseTo(expectedResult);
  });
});
