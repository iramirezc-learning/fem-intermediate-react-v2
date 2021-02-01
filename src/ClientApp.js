import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// any other browser-only stuff goes here

hydrate(<App />, document.getElementById("root"));
