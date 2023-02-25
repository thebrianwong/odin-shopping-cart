import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Homepage from "../pages/Homepage";
import { BrowserRouter } from "react-router-dom";

test("The page renders with the correct title", () => {
  render(<Homepage />, { wrapper: BrowserRouter });
  const title = screen.getByRole("heading", { name: "Welcome!" }).textContent;
  expect(title).toMatch("Welcome!");
});

test("The page renders with a button", () => {
  render(<Homepage />, { wrapper: BrowserRouter });
  const button = screen.getByRole("button", { name: "Shop" });
  expect(button).toBeInTheDocument();
});
