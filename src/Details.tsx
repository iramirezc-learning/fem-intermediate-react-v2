import React, { lazy } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import PetApi, { Photo, AnimalResponse } from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

const Modal = lazy(() => import("./Modal"));

class Details extends React.Component<RouteComponentProps<{ id: string }>> {
  state = {
    name: "",
    animal: "",
    location: "",
    description: "",
    media: [] as Photo[],
    breed: "",
    url: "",
    loading: true,
    showModal: false,
    error: null,
  };

  componentDidMount() {
    if (!this.props.id) {
      navigate("/");
      return;
    }

    PetApi.animal(+this.props.id)
      .then((apiResult: AnimalResponse) => {
        if (apiResult instanceof Error) {
          throw apiResult;
        }

        const { animal: pet } = apiResult;

        this.setState({
          name: pet.name,
          animal: pet.type,
          location: `${pet.contact.address.city}, ${pet.contact.address.state}`,
          description: pet.description,
          media: pet.photos,
          breed: pet.breeds.primary,
          url: pet.url,
          loading: false,
        });
      })
      .catch((err: Error) => {
        this.setState({ error: err });
      });
  }

  componentDidUpdate() {
    if (this.state.error) {
      throw this.state.error; // propagate the error for ErrorBoundary
    }
  }

  adopt = () => {
    navigate(this.state.url);
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const {
      name,
      animal,
      location,
      description,
      media,
      breed,
      loading,
      showModal,
    } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={theme.button} onClick={this.toggleModal}>
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal && (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

const DetailsWithErrorBoundary = (
  props: RouteComponentProps<{ id: string }>
) => {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
};

export default DetailsWithErrorBoundary;
