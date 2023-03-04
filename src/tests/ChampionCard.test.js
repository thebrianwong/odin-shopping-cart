import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChampionCard from "../components/ChampionCard";

let aatroxData;

beforeAll(async () => {
  const rawData = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
  );
  const parsedJSON = await rawData.json();
  const championData = parsedJSON.data;
  aatroxData = championData.Aatrox;
});

test("Champion card gets rendered properly", () => {
  render(<ChampionCard championData={aatroxData} />);
  const aatroxCard = screen.getByRole("button");
  const aatroxImage = screen.getByAltText("Square portrait of Aatrox.");
  const aatroxName = screen.getByText("Aatrox");
  expect(aatroxCard).toBeInTheDocument();
  expect(aatroxImage).toBeInTheDocument();
  expect(aatroxName).toBeInTheDocument();
});
