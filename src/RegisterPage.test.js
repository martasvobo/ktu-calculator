import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RegisterPage from './RegisterPage';

// Mock Firebase auth methods
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn((email, password) => {
      if (email === 'invalidemail') {
        return Promise.reject(new Error('Invalid email format'));
      } else {
        return Promise.resolve({ user: { email: 'test@example.com' } });
      }
    }),
  })),
}));

describe('RegisterPage component', () => {
  test('renders RegisterPage component', () => {
    const { getByPlaceholderText } = render(<RegisterPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('registers a new user when Register button is clicked', async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const registerButton = getByText('Register');

    // Fill out the form
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Click the register button
    fireEvent.click(registerButton);

    // Wait for the registration process to complete
    await waitFor(() => {
      expect(getByText('test@example.com')).toBeInTheDocument();
    });
  });

  test('displays error message if registration fails', async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const registerButton = getByText('Register');

    // Fill out the form with an invalid email
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Click the register button
    fireEvent.click(registerButton);

    // Check if error message is displayed
    await waitFor(() => {
      expect(getByText('Invalid email format')).toBeInTheDocument();
    });
  });
});