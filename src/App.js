import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import SearchParams from "./SearchParams";
import store from "./store";

const Details = lazy(() => import("./Details"));

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <NavBar />
          <Suspense fallback={<h2>Loading...</h2>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
