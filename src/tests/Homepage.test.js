import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Homepage from "../pages/Homepage";
import { BrowserRouter } from "react-router-dom";

test("The page renders with the expected elements", () => {
  render(<Homepage />, { wrapper: BrowserRouter });
  const title = screen.getByRole("heading", {
    name: "Welcome to the Blue Essence Emporium!",
  });
  const description = screen.getByText(
    "Rito Games has blessed us with a special deal! Buy as many champions as you want for free! They're really real and will be delivered to your doorsteps!!!"
  );
  const button = screen.getByRole("button", { name: "Shop" });
  const image = screen.getByAltText(
    "cursed pre-rework splash art of Lollipoppy"
  );
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
