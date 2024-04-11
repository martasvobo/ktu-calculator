import React from 'react';
import { Link } from 'react-router-dom';

const CalculatorButton = () => {
  return (
    <Link to="/calculator">
      <button>Calculator</button>
    </Link>
  );
};