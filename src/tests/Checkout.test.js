import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Checkout from "../pages/Checkout";

let data;

beforeAll(async () => {
  const rawData = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
  );
  const parsedJSON = await rawData.json();
  data = parsedJSON.data;
});

test("The shopping cart items are displayed", () => {
  const shoppingCartItems = { Aatrox: 1, Ahri: 9 };
  render(<Checkout data={data} shoppingCartItems={shoppingCartItems} />);
  const items = screen.getAllByRole("listitem");
  const aatroxImage = screen.getByAltText("Square portrait of Aatrox");
  const aatroxName = screen.getByText("Aatrox");
  const aatroxQuantity = screen.getByText("1");
  const ahriImage = screen.getByAltText("Square portrait of Ahri");
  const ahriName = screen.getByText("Ahri");
  const ahriQuantity = screen.getByText("9");
  expect(items.length).toBe(2);
  expect(aatroxImage).toBeInTheDocument();
  expect(aatroxName).toBeInTheDocument();
  expect(aatroxQuantity).toBeInTheDocument();
  expect(ahriImage).toBeInTheDocument();
  expect(ahriName).toBeInTheDocument();
  expect(ahriQuantity).toBeInTheDocument();
});

test("No items are displayed if the shopping cart is empty", () => {
  const shoppingCartItems = {};
  render(<Checkout data={data} shoppingCartItems={shoppingCartItems} />);
  const items = screen.queryAllByRole("listitem");
  expect(items.length).toBe(0);
});
