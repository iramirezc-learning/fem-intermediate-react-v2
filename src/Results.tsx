import React, { FunctionComponent } from "react";
import { Animal } from "@frontendmasters/pet";
import Pet from "./Pet";

interface IProps {
  pets: Animal[];
}

const Result: FunctionComponent<IProps> = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets were found :/</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            animal={pet.type}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Result;
