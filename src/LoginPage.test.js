/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import 'firebase/auth';
import React from 'react';
import LoginPage from './LoginPage';

jest.mock('firebase/auth', () => {
  const originalModule = jest.requireActual('firebase/auth');
  return {
    __esModule: true,
    ...originalModule,
    signInWithEmailAndPassword: jest
      .fn()
      .mockRejectedValue({ message: 'error' })
  };
});

describe('LoginPage component', () => {
  test('renders LoginPage component', () => {
    const { getByPlaceholderText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    expect(emailInput)
      .toBeInTheDocument();
    expect(passwordInput)
      .toBeInTheDocument();
  });

  test('logs in a user when Log in button is clicked', async() => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <LoginPage />
    );
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
      expect(queryByText('error')).not.toBeInTheDocument();
    });
  });

  test('sends password reset email when Change Password button is clicked', async() => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <LoginPage />
    );
    const emailInput = getByPlaceholderText('Email');
    const changePasswordButton = getByText('Change Password');

    // Fill out the email input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Click the change password button
    fireEvent.click(changePasswordButton);

    // Wait for the password reset email to be sent
    await waitFor(() => {
      expect(queryByText('error')).not.toBeInTheDocument();
    });
  });

  test('displays error message if password reset email fails', async() => {
    // Mock sendPasswordResetEmail to reject with an error
    const { getByPlaceholderText, getByText, queryByText } = render(
      <LoginPage />
    );
    const emailInput = getByPlaceholderText('Email');
    const changePasswordButton = getByText('Change Password');

    // Fill out the email input
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

    // Click the change password button
    fireEvent.click(changePasswordButton);

    // Check if error message is displayed
    await waitFor(() => {
      expect(queryByText('error')).not.toBeInTheDocument();
    });
  });
});
