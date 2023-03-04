import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../pages/Shop";

let data;

beforeAll(async () => {
  const rawData = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
  );
  const parsedJSON = await rawData.json();
  data = parsedJSON.data;
});

test("Single filters work", () => {
  render(<Shop data={data} />);
  const checkbox = screen.getByRole("checkbox", { name: "Assassin" });
  act(() => userEvent.click(checkbox));
  const applicableChampion = screen.getByText("Ahri");
  const nonApplicableChampion = screen.queryByText("Aatrox");
  expect(applicableChampion).toBeInTheDocument();
  expect(nonApplicableChampion).toBeNull();
});

test("Multiple filters works", () => {
  render(<Shop data={data} />);
  const assassinCheckbox = screen.getByRole("checkbox", { name: "Assassin" });
  const fighterCheckbox = screen.getByRole("checkbox", { name: "Fighter" });
  act(() => {
    userEvent.click(assassinCheckbox);
  });
  const assassinChampion = screen.getByText("Ahri");
  const assassinFighterChampion = screen.getByText("Ekko");
  expect(assassinChampion).toBeInTheDocument();
  expect(assassinFighterChampion).toBeInTheDocument();
  act(() => {
    userEvent.click(fighterCheckbox);
  });
  expect(assassinChampion).not.toBeInTheDocument();
  expect(assassinFighterChampion).toBeInTheDocument();
});

test("Empty message displays", () => {
  render(<Shop data={data} />);
  const checkboxes = screen.getAllByRole("checkbox");
  act(() => {
    checkboxes.forEach((checkbox) => {
      userEvent.click(checkbox);
    });
  });
  const emptyMessage = screen.getByText(
    "Poro doesn't think that sort of champion exists yet!"
  );
  expect(emptyMessage).toBeInTheDocument();
});
