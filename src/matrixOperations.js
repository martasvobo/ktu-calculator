export function performOperation(operator, matrix1, matrix2) {
  // Perform matrix operation based on the selected operator
  let operationResult = [];
  if (operator === "+") {
    operationResult = matrix1.map((row, rowIndex) =>
      row.map((cell, colIndex) => cell + matrix2[rowIndex][colIndex])
    );
  } else if (operator === "-") {
    operationResult = matrix1.map((row, rowIndex) =>
      row.map((cell, colIndex) => cell - matrix2[rowIndex][colIndex])
    );
  } else if (operator === "*") {
    operationResult = matrix1.map((row, rowIndex) =>
      row.map((_, colIndex) =>
        matrix1[rowIndex].reduce(
          (acc, val, i) => acc + val * matrix2[i][colIndex],
          0
        )
      )
    );
  }
  return operationResult;
}
