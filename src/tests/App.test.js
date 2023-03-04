import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { act } from "react-dom/test-utils";

test("Go through user flow of placing an order for a champion", async () => {
  render(<App />);
  const homepageShopButton = screen.getByRole("button", { name: "Shop" });
  act(() => {
    userEvent.click(homepageShopButton);
  });
  const mageFilter = await screen.findByRole("checkbox", { name: "Mage" });
  act(() => {
    userEvent.click(mageFilter);
  });
  const ahriCard = screen.getAllByRole("button")[1];
  act(() => {
    userEvent.click(ahriCard);
  });
  const waitFor = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));
  await waitFor(1000);
  const addToCartButton = await screen.findByRole("button", {
    name: "Add To Cart",
  });
  act(() => {
    userEvent.click(addToCartButton);
  });
  const shoppingCartItems = screen.getByText("Number of items in cart: 1");
  expect(shoppingCartItems).toBeInTheDocument();
  const checkoutButton = screen.getByRole("button", { name: "Checkout" });
  act(() => {
    userEvent.click(checkoutButton);
  });
  const placeOrderButton = screen.getByRole("button", { name: "Place Order" });
  act(() => {
    userEvent.click(placeOrderButton);
  });
  const emptyShoppingCart = screen.getByText("Number of items in cart: 0");
  expect(emptyShoppingCart).toBeInTheDocument();
  const orderConfirmation = screen.getByRole("heading", {
    name: "Order Confirmation",
  });
  expect(orderConfirmation).toBeInTheDocument();
});
