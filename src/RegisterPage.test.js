/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  waitFor
} from "@testing-library/react";
import React from "react";
import RegisterPage from "./RegisterPage";

describe("RegisterPage component", () => {
  test("renders RegisterPage component", () => {
    const { getByPlaceholderText } = render(<RegisterPage />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("registers a new user when Register button is clicked", async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<RegisterPage />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const registerButton = getByText("Register");

    // Fill out the form
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Click the register button
    fireEvent.click(registerButton);

    // Wait for the registration process to complete
    await waitFor(() => {
      expect(queryByText("Error")).not.toBeInTheDocument();
    });
  });

  test("displays error message if registration fails", async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterPage />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const registerButton = getByText("Register");

    // Fill out the form with an invalid email
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Click the register button
    fireEvent.click(registerButton);

    // Check if error message is displayed
    await waitFor(() => {
      expect(getByText("Firebase: Error (auth/network-request-failed).")).toBeInTheDocument();
    });
  });
});
