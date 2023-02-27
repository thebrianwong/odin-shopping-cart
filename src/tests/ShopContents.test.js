import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShopContents from "../components/ShopContents";

let data;

beforeAll(async () => {
  const rawData = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
  );
  const parsedJSON = await rawData.json();
  data = parsedJSON.data;
});

test("Renders list items from prop object", async () => {
  render(<ShopContents shopItems={data} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(162);
});

test("Renders list items with text", async () => {
  render(<ShopContents shopItems={data} />);
  const listItems = screen.getAllByRole("listitem");
  listItems.forEach((item) => {
    expect(item).toHaveTextContent(/^.+$/);
  });
});
