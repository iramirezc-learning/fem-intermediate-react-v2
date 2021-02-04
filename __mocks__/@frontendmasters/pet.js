import { act } from "@testing-library/react";
import breeds from "./data/breeds.json";
import dogs from "./data/dogs.json";

const mock = {
  breeds: jest.fn(() => {
    // promise-like object
    return {
      then: (callback) =>
        act(() => {
          callback({ breeds });
        }),
    };
  }),
  animals: jest.fn(() => {
    // promise-like object
    return {
      then: (callback) => act(() => callback(dogs)),
    };
  }),
};

// for testing assertions
export { default as ANIMALS } from "./data/ANIMALS.json";
export const _breeds = breeds;
export const _dogs = dogs.animals;

// actual mock
export default mock;
