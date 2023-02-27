import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShopFilter from "../components/ShopFilter";

const addFilter = jest.fn();
const removeFilter = jest.fn();

test("All labels are rendered", () => {
  render(<ShopFilter addFilter={addFilter} removeFilter={removeFilter} />);
  const tags = ["Assassin", "Fighter", "Mage", "Marksman", "Support", "Tank"];
  const labels = [];
  for (let i = 0; i < tags.length; i++) {
    const label = screen.getByLabelText(tags[i]);
    labels.push(label);
  }
  expect(labels.length).toBe(6);
});

test("All checkboxes are rendered", () => {
  render(<ShopFilter addFilter={addFilter} removeFilter={removeFilter} />);
  const checkboxes = screen.getAllByRole("checkbox");
  expect(checkboxes.length).toBe(6);
});

test("Checkboxes can be checked", () => {
  render(<ShopFilter addFilter={addFilter} removeFilter={removeFilter} />);
  const checkbox = screen.getByRole("checkbox", { name: "Assassin" });
  expect(checkbox.checked).toBeFalsy();
  userEvent.click(checkbox);
  expect(checkbox.checked).toBeTruthy();
});
