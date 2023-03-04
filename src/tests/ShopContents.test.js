import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShopContents from "../components/ShopContents";

let data;

beforeAll(async () => {
  const rawData = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
  );
  const parsedJSON = await rawData.json();
  data = parsedJSON.data;
});

test("Renders list items from prop object", () => {
  render(<ShopContents shopItems={data} />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(162);
});

test("Renders list items with text", () => {
  render(<ShopContents shopItems={data} />);
  const buttons = screen.getAllByRole("button");
  buttons.forEach((button) => {
    const header = button.querySelector("p");
    expect(header).toHaveTextContent(/^.+$/);
  });
});
