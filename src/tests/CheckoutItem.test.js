import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CheckoutItem from "../components/CheckoutItem";
import { act } from "react-dom/test-utils";

let data;
const changeCartQuantity = jest.fn();

beforeAll(async () => {
  const rawData = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
  );
  const parsedJSON = await rawData.json();
  data = parsedJSON.data;
});

test("Component renders properly", () => {
  render(
    <CheckoutItem
      data={data}
      champion="Aatrox"
      quantity={1}
      changeCartQuantity={changeCartQuantity}
    />
  );
  const buttons = screen.getAllByRole("button");
  const image = screen.getByAltText("Square portrait of Aatrox.");
  const name = screen.getByText("Aatrox");
  const quantity = screen.getByText("1");
  expect(buttons.length).toBe(2);
  expect(buttons[1].textContent).toBe("Remove Item");
  expect(image).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(quantity).toBeInTheDocument();
});

test("The update button is rendered and the submit button is not rendered", () => {
  render(
    <CheckoutItem
      data={data}
      champion="Aatrox"
      quantity={1}
      changeCartQuantity={changeCartQuantity}
    />
  );
  const updateButton = screen.getByRole("button", { name: "Update" });
  const submitButton = screen.queryByRole("button", { name: "Submit" });
  expect(updateButton).toBeInTheDocument();
  expect(submitButton).toBeNull();
});

test("The submit button is rendered and the update button is no longer rendered after clicking the update button", () => {
  render(
    <CheckoutItem
      data={data}
      champion="Aatrox"
      quantity={1}
      changeCartQuantity={changeCartQuantity}
    />
  );
  const updateButtonBeforeClick = screen.getByRole("button", {
    name: "Update",
  });
  act(() => {
    userEvent.click(updateButtonBeforeClick);
  });
  const updateButtonAfterClick = screen.queryByRole("button", {
    name: "Update",
  });
  const submitButtonAfterClick = screen.getByRole("button", {
    name: "Submit",
  });
  expect(updateButtonAfterClick).toBeNull();
  expect(submitButtonAfterClick).toBeInTheDocument();
});

test("The input is rendered and the quantity is no longer rendered after clicking the update button", () => {
  render(
    <CheckoutItem
      data={data}
      champion="Aatrox"
      quantity={1}
      changeCartQuantity={changeCartQuantity}
    />
  );
  const updateButton = screen.getByRole("button", {
    name: "Update",
  });
  const quantityBeforeClick = screen.getByText("1");
  const inputBeforeClick = screen.queryByDisplayValue("1");
  expect(quantityBeforeClick).toBeInTheDocument();
  expect(inputBeforeClick).toBeNull();
  act(() => {
    userEvent.click(updateButton);
  });
  const quantityAfterClick = screen.queryByText("1");
  const inputAfterClick = screen.getByDisplayValue("1");
  expect(quantityAfterClick).toBeNull();
  expect(inputAfterClick).toBeInTheDocument();
});

test("Clicking the submit button causes the input to no longer be rendered", () => {
  render(
    <CheckoutItem
      data={data}
      champion="Aatrox"
      quantity={1}
      changeCartQuantity={changeCartQuantity}
    />
  );
  const updateButton = screen.getByRole("button", {
    name: "Update",
  });
  act(() => {
    userEvent.click(updateButton);
  });
  const inputBefore = screen.getByDisplayValue("1");
  expect(inputBefore).toBeInTheDocument();
  const submitButton = screen.getByRole("button", {
    name: "Submit",
  });
  act(() => {
    userEvent.click(submitButton);
  });
  const inputAfter = screen.queryByDisplayValue("1");
  expect(inputAfter).toBeNull();
});

// Will probably have to save this for App.test.js

// test("Submitting a new value changes the quantity", () => {
//   render(
//     <CheckoutItem
//       data={data}
//       champion="Aatrox"
//       quantity={1}
//       changeCartQuantity={changeCartQuantity}
//     />
//   );
//   const oldQuantity = screen.getByText("1");
//   const updateButton = screen.getByRole("button", { name: "Update" });
//   expect(oldQuantity).toBeInTheDocument();
//   act(() => {
//     userEvent.click(updateButton);
//   });
//   const input = screen.getByDisplayValue("1");
//   input.focus();
//   act(() => {
//     userEvent.keyboard("23");
//   });
//   const submitButton = screen.getByRole("button", { name: "Submit" });
//   act(() => {
//     userEvent.click(submitButton);
//   });
//   const newQuantity = screen.getByText("123");
//   expect(newQuantity).toBeInTheDocument();
// });
