import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';

// Mock Firebase auth methods
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(() =>
    Promise.resolve({ user: { email: 'test@example.com' } })
  ),
  sendPasswordResetEmail: jest.fn(() => Promise.resolve()),
}));

// Mock Firebase auth instance
jest.mock('./firebase', () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
  },
}));

describe('LoginPage component', () => {
  test('renders LoginPage component', () => {
    const { getByPlaceholderText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('logs in a user when Log in button is clicked', async () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Log in');

    // Fill out the form
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Click the login button
    fireEvent.click(loginButton);

    // Wait for the login process to complete
    await waitFor(() => {
      expect(getByText('test@example.com')).toBeInTheDocument();
    });
  });

  test('sends password reset email when Change Password button is clicked', async () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const changePasswordButton = getByText('Change Password');

    // Fill out the email input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Click the change password button
    fireEvent.click(changePasswordButton);

    // Wait for the password reset email to be sent
    await waitFor(() => {
      expect(getByText('Password reset email sent!')).toBeInTheDocument();
    });
  });

  test('displays error message if login fails', async () => {
    // Mock signInWithEmailAndPassword to reject with an error
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Invalid email or password'))
    );

    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Log in');

    // Fill out the form
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });

    // Click the login button
    fireEvent.click(loginButton);

    // Check if error message is displayed
    await waitFor(() => {
      expect(getByText('Invalid email or password')).toBeInTheDocument();
    });
  });

  test('displays error message if password reset email fails', async () => {
    // Mock sendPasswordResetEmail to reject with an error
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Failed to send password reset email'))
    );

    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const changePasswordButton = getByText('Change Password');

    // Fill out the email input
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

    // Click the change password button
    fireEvent.click(changePasswordButton);

    // Check if error message is displayed
    await waitFor(() => {
      expect(getByText('Failed to send password reset email')).toBeInTheDocument();
    });
  });
});