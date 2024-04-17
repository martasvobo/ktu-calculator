/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MatrixPage from './MatrixPage';

describe('MatrixPage component', () => {
  it('renders MatrixPage component', () => {
    const { getByText } = render(<MatrixPage />);
    const headerText = getByText('Matricu Skaiciuotuvas');
    expect(headerText).toBeInTheDocument();
  });

  it('increases matrix size when increaseSize is called', () => {
    const { getByText, getAllByTestId } = render(<MatrixPage />);
    const increaseButton = getByText('Padidinti dydi');
    fireEvent.click(increaseButton);
    const inputs = getAllByTestId('matrix-input');
    expect(inputs.length).toBe(6); // 3x3 matrix
  });

  it('performs addition operation correctly', () => {
    const { getByText, getAllByTestId } = render(<MatrixPage />);
    const addButton = getByText('sudeti');
    const input1 = getAllByTestId('matrix-input')[0];
    const input2 = getAllByTestId('matrix-input')[1];
    fireEvent.change(input1, { target: { value: 2 } });
    fireEvent.change(input2, { target: { value: 3 } });
    fireEvent.click(addButton);
    const resultCells = getAllByTestId('result-cell');
    expect(resultCells[0]).toHaveTextContent('5');
  });

  // Add more tests for other operations and functionalities...
});