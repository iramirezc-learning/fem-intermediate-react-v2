import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import PetApi, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";

describe("SearchParams", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<SearchParams />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("matches the snapshot", () => {
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  test("renders the animal dropdown correctly", () => {
    const animalDropdown = wrapper.getByTestId("use-dropdown-animal");

    expect(animalDropdown.children.length).toBe(ANIMALS.length + 1);
  });

  test("renders the breed dropdown correctly", () => {
    const breedDropdown = wrapper.getByTestId("use-dropdown-breed");

    expect(PetApi.breeds).toHaveBeenCalledTimes(1);
    expect(breedDropdown.children.length).toBe(_breeds.length + 1);
  });

  test("renders no pets the first time", () => {
    const searchResults = wrapper.getByTestId("search-results");

    expect(searchResults.textContent).toBe("No pets were found :/");
  });

  test("fetches pets from the PetsApi when Submit is clicked", () => {
    const searchResults = wrapper.getByTestId("search-results");

    fireEvent(wrapper.getByText("Submit"), new MouseEvent("click"));

    expect(PetApi.animals).toHaveBeenCalledTimes(1);
    expect(searchResults.children.length).toBe(_dogs.length);
  });
});
