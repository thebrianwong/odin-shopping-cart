import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import NavBar from "../components/NavBar";
import { BrowserRouter } from "react-router-dom";

test("There are 3 links", () => {
  render(<NavBar />, { wrapper: BrowserRouter });
  const links = screen.getAllByRole("link");
  expect(links.length).toBe(3);
});

test("There is a checkout button", () => {
  render(<NavBar />, { wrapper: BrowserRouter });
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button.textContent).toBe("Checkout");
});

test("The correct number of cart items is displayed", () => {
  render(<NavBar cartItems={3} />, { wrapper: BrowserRouter });
  const displayedItems = screen.getByText("Number of items in cart: 3");
  expect(displayedItems.classList.contains("cart-items")).toBeTruthy();
});
