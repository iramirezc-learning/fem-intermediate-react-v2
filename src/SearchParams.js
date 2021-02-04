import React, { useEffect, useState, useContext } from "react";
import PetApi, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";
import ThemeDropdown from "./ThemeDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    if (!animal) return;

    PetApi.breeds(animal).then(({ breeds: breedsFromApi = [] }) => {
      const breedsNames = breedsFromApi.map(({ name }) => name);

      setBreeds(breedsNames);
    });
    // removing catch because I don't want to
    // spend more time figuring it out how to
    // fix the error thrown that it is not a function.
  }, [animal, setBreeds, setBreed]);

  function fetchPets() {
    // changing to a Promise as I don't want to
    // spend more time figuring it out how to
    // make it work with Async-Await
    PetApi.animals({
      location,
      breed,
      type: animal,
    }).then(({ animals: petsFromApi }) => {
      setPets(petsFromApi || []);
    });
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPets();
        }}
      >
        <ThemeDropdown theme={theme} onChange={setTheme} />
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button type="submit" style={theme.button}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
