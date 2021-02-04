import React, { lazy } from "react";
import { navigate } from "@reach/router";
import { animal as fetchPet } from "@frontendmasters/pet";
import { connect } from "react-redux";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

const Modal = lazy(() => import("./Modal"));

class Details extends React.Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    fetchPet(+this.props.id)
      .then((apiResult) => {
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
      .catch((err) => {
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

    const { theme } = this.props;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button style={theme.button} onClick={this.toggleModal}>
            Adopt {name}
          </button>
          <p>{description}</p>
          {showModal && (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ theme }) => ({ theme });

const WrappedDetails = connect(mapStateToProps)(Details);

const DetailsWithErrorBoundary = (props) => {
  return (
    <ErrorBoundary>
      <WrappedDetails {...props} />
    </ErrorBoundary>
  );
};

export default DetailsWithErrorBoundary;
