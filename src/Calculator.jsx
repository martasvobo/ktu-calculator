import React, { useState } from "react";
import "./Calculator.css";
import calculateResult from "./calculateResult";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearExpression = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="header">Elementarus skaičiuotuvas</div>
      <div className="result-container">
        <input className="expression" type="text" value={expression} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("sin(")}>sin</button>
        <button onClick={() => handleButtonClick("cos(")}>cos</button>
        <button onClick={() => handleButtonClick("tan(")}>tan</button>
        <button onClick={() => handleButtonClick("sqrt(")}>√</button>
        <button onClick={() => handleButtonClick("log(")}>log</button>
        <button onClick={() => handleButtonClick("exp(")}>exp</button>
        <button onClick={() => handleButtonClick("^")}>^</button>
        <button onClick={() => handleButtonClick("(")}>(</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick(")")}>)</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("/")}>/</button>{" "}
        {/* Division button */}
        <button onClick={() => handleButtonClick("*")}>*</button>{" "}
        {/* Multiplication button */}
        <button className="clear" onClick={clearExpression}>
          C
        </button>
        <button
          className="equal"
          onClick={() => setResult(calculateResult(expression))}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
