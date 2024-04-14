import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MatrixPage.css'; // Import CSS file

function MatrixPage() {
  const [matrix1, setMatrix1] = useState([
    [0, 0],
    [0, 0],
  ]);

  const [matrix2, setMatrix2] = useState([
    [0, 0],
    [0, 0],
  ]);

  const [resultMatrix, setResultMatrix] = useState([
    [0, 0],
    [0, 0],
  ]);

  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const handleChangeMatrix1 = (e, row, col) => {
    const value = parseFloat(e.target.value);
    const updatedMatrix = matrix1.map((rowArr, rowIndex) =>
      rowIndex === row
        ? rowArr.map((colValue, colIndex) =>
            colIndex === col ? value : colValue
          )
        : rowArr
    );
    setMatrix1(updatedMatrix);
  };

  const handleChangeMatrix2 = (e, row, col) => {
    const value = parseFloat(e.target.value);
    const updatedMatrix = matrix2.map((rowArr, rowIndex) =>
      rowIndex === row
        ? rowArr.map((colValue, colIndex) =>
            colIndex === col ? value : colValue
          )
        : rowArr
    );
    setMatrix2(updatedMatrix);
  };

  const increaseSize = () => {
    const newMatrix1 = [];
    const newMatrix2 = [];
    for (let i = 0; i < rows + 1; i++) {
      newMatrix1.push(Array(cols + 1).fill(0));
      newMatrix2.push(Array(cols + 1).fill(0));
    }
    setRows(rows + 1);
    setCols(cols + 1);
    setMatrix1(newMatrix1);
    setMatrix2(newMatrix2);
  };

  const performOperation = (operator) => {
    // Perform matrix operation based on the selected operator
    let operationResult = [];
    if (operator === '+') {
      operationResult = matrix1.map((row, rowIndex) =>
        row.map((cell, colIndex) => cell + matrix2[rowIndex][colIndex])
      );
    } else if (operator === '-') {
      operationResult = matrix1.map((row, rowIndex) =>
        row.map((cell, colIndex) => cell - matrix2[rowIndex][colIndex])
      );
    } else if (operator === '*') {
      operationResult = matrix1.map((row, rowIndex) =>
        row.map((_, colIndex) =>
          matrix1[rowIndex].reduce(
            (acc, val, i) => acc + val * matrix2[i][colIndex],
            0
          )
        )
      );
    }
    setResultMatrix(operationResult);
  };

  return (
    <div className="matrix-container">
      <div className="header">
        <h1>Matricu Skaiciuotuvas</h1>
        <div className="nav-buttons">
          <Link to="/">pagrindinis psl</Link>
        </div>
      </div>
      <h1 className="matrix-title">Matricu operacijos</h1>
      <div className="matrix-inputs">
        <table className="matrix-table">
          <tbody>
            {matrix1.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`}>
                    <input
                      type="number"
                      value={cell}
                      onChange={(e) => handleChangeMatrix1(e, rowIndex, colIndex)}
                      className="matrix-input"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <table className="matrix-table">
          <tbody>
            {matrix2.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`}>
                    <input
                      type="number"
                      value={cell}
                      onChange={(e) => handleChangeMatrix2(e, rowIndex, colIndex)}
                      className="matrix-input"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="matrix-buttons">
        <button onClick={increaseSize}>Padidinti dydi</button>
        <button onClick={() => performOperation('+')}>sudeti</button>
        <button onClick={() => performOperation('-')}>atimti</button>
        <button onClick={() => performOperation('*')}>sudauginti</button>
      </div>
      <div className="matrix-result">
        <h2>Rezultatas</h2>
        <table className="matrix-table">
          <tbody>
            {resultMatrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MatrixPage;