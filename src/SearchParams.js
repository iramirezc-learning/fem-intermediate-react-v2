import React, { useEffect, useState } from "react";
import {
  ANIMALS,
  breeds as fetchBreeds,
  animals as fetchAnimals,
} from "@frontendmasters/pet";
import { connect } from "react-redux";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeDropdown from "./ThemeDropdown";
import { changeTheme, changeLocation } from "./actionCreators";

const SearchParams = ({ theme, setTheme, location, setLocation }) => {
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    if (!animal) return;

    fetchBreeds(animal)
      .then(({ breeds: breedsFromApi = [] }) => {
        const breedsNames = breedsFromApi.map(({ name }) => name);

        setBreeds(breedsNames);
      })
      .catch(console.error);
  }, [animal, setBreeds, setBreed]);

  async function fetchPets() {
    const { animals: petsFromApi } = await fetchAnimals({
      location,
      breed,
      type: animal,
    });

    setPets(petsFromApi || []);
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

const mapStateToProps = ({ theme, location }) => ({
  theme,
  location,
});

const mapDispatchToProps = (dispatch) => ({
  setTheme(theme) {
    dispatch(changeTheme(theme));
  },
  setLocation(location) {
    dispatch(changeLocation(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams);
