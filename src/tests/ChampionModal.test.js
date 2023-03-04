import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ChampionModal from "../components/ChampionModal";
import { act } from "react-dom/test-utils";

const hideModal = jest.fn();
const addToCart = jest.fn();

const gameVersion = "13.4.1";
let aatroxData;

beforeAll(async () => {
  const rawData = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
  );
  const parsedJSON = await rawData.json();
  const championData = parsedJSON.data;
  aatroxData = championData.Aatrox;
});

test("Champion modal is rendered properly", async () => {
  render(
    <ChampionModal
      gameVersion={gameVersion}
      championData={aatroxData}
      hideModal={hideModal}
      addToCart={addToCart}
    />
  );
  const aatroxImage = await screen.findByAltText(
    "Loading screen banner of Aatrox"
  );
  const aatroxName = screen.getByRole("heading", { name: "Aatrox" });
  const aatroxTitle = screen.getByText("the Darkin Blade");
  const aatroxBlurb = screen.getByText(/Shurima/);
  const buttons = screen.getAllByRole("button");
  const input = screen.getByDisplayValue("1");
  expect(aatroxImage).toBeInTheDocument();
  expect(aatroxImage.src).toBe(
    "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"
  );
  expect(aatroxName).toBeInTheDocument();
  expect(aatroxTitle).toBeInTheDocument();
  expect(aatroxBlurb).toBeInTheDocument();
  expect(buttons.length).toBe(4);
  expect(input).toBeInTheDocument();
});

test("Changing input value via buttons works", async () => {
  render(
    <ChampionModal
      gameVersion={gameVersion}
      championData={aatroxData}
      hideModal={hideModal}
      addToCart={addToCart}
    />
  );
  const buttons = await screen.findAllByRole("button");
  const input = screen.getByDisplayValue("1");
  const decrementButton = buttons[0];
  const incrementButton = buttons[1];
  act(() => {
    userEvent.click(incrementButton);
  });
  expect(input.value).toBe("11");
  act(() => {
    userEvent.click(decrementButton);
  });
  expect(input.value).toBe("1");
});

test("The input value can't be decreased past 1 with the buttons", async () => {
  render(
    <ChampionModal
      gameVersion={gameVersion}
      championData={aatroxData}
      hideModal={hideModal}
      addToCart={addToCart}
    />
  );
  const buttons = await screen.findAllByRole("button");
  const input = screen.getByDisplayValue("1");
  const decrementButton = buttons[0];
  expect(input.value).toBe("1");
  act(() => {
    userEvent.click(decrementButton);
  });
  expect(input.value).toBe("1");
});

test("The input value can be changed via typing", async () => {
  render(
    <ChampionModal
      gameVersion={gameVersion}
      championData={aatroxData}
      hideModal={hideModal}
      addToCart={addToCart}
    />
  );
  const input = await screen.findByDisplayValue("1");
  expect(input.value).toBe("1");
  input.focus();
  act(() => {
    userEvent.keyboard("12");
  });
  expect(input.value).toBe("112");
});
