import { performOperation } from './matrixOperations.js';

describe('Matrix Operations Tests', () => {
  let matrix1, matrix2;

  beforeEach(() => {
    matrix1 = [
      [1, 2],
      [3, 4]
    ];
    matrix2 = [
      [5, 6],
      [7, 8]
    ];
  });

  it('performs matrix addition correctly', () => {
    const expectedResult = [
      [6, 8],
      [10, 12]
    ];
    const result = performOperation('+', matrix1, matrix2);
    expect(result)
      .toEqual(expectedResult);
  });

  it('performs matrix subtraction correctly', () => {
    const expectedResult = [
      [-4, -4],
      [-4, -4]
    ];
    const result = performOperation('-', matrix1, matrix2);
    expect(result)
      .toEqual(expectedResult);
  });

  it('performs matrix multiplication correctly', () => {
    const expectedResult = [
      [19, 22],
      [43, 50]
    ];
    const result = performOperation('*', matrix1, matrix2);
    expect(result)
      .toEqual(expectedResult);
  });
});
