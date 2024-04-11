import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css'; // Import the CSS file

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setExpression((prevExpression) => prevExpression + value);
    };

    const clearExpression = () => {
        setExpression('');
        setResult('');
    };

    const calculateResult = () => {
        try {
            let formattedExpression = expression.replace(/sin/g, 'Math.sin');
            formattedExpression = formattedExpression.replace(/cos/g, 'Math.cos');
            formattedExpression = formattedExpression.replace(/tan/g, 'Math.tan');
            formattedExpression = formattedExpression.replace(/sqrt/g, 'Math.sqrt');
            formattedExpression = formattedExpression.replace(/log/g, 'Math.log10');
            formattedExpression = formattedExpression.replace(/exp/g, 'Math.exp');
            formattedExpression = formattedExpression.replace(/\^/g, '**');
            setResult(eval(formattedExpression));
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div>
            <header className="header"> {/* Header section */}
                <div className="logo">Skaiciuotuvas</div>
                <nav>
                    <ul>
                    <li><Link to="/">Pagrindinis psl</Link></li>
                    <li><Link to="/topics">Temos</Link></li>
                    <li><Link to="/calculator">Skaiciuotuvas</Link></li>
                    <li><Link to="/matrix">Matricos</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="calculator">
                <div className="result-container">
                    <input
                        className="expression"
                        type="text"
                        value={expression}
                        readOnly
                    />
                    <div className="result">{result}</div>
                </div>
                <div className="buttons">
                    <button onClick={() => handleButtonClick('sin(')}>sin</button>
                    <button onClick={() => handleButtonClick('cos(')}>cos</button>
                    <button onClick={() => handleButtonClick('tan(')}>tan</button>
                    <button onClick={() => handleButtonClick('sqrt(')}>√</button>
                    <button onClick={() => handleButtonClick('log(')}>log</button>
                    <button onClick={() => handleButtonClick('exp(')}>exp</button>
                    <button onClick={() => handleButtonClick('^')}>^</button>
                    <button onClick={() => handleButtonClick('(')}>(</button>
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick(')')}>)</button>
                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('-')}>-</button>
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button onClick={() => handleButtonClick('+')}>+</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => handleButtonClick('.')}>.</button>
                    <button onClick={() => handleButtonClick('/')}>/</button>
                    <button onClick={() => handleButtonClick('*')}>*</button>
                    <button className="clear" onClick={clearExpression}>C</button>
                    <button className="equal" onClick={calculateResult}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;