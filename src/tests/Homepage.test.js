import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Homepage from "../pages/Homepage";

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
    "Cursed pre-rework splash art of Lollipoppy."
  );
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
