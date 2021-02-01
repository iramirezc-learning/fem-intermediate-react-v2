import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState({ button: { backgroundColor: "peru" } });

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
