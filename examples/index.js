import React from "react";
import { render } from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";

const Examples = () => {
  return (
    <div>
      <State />
      <Effect />
      <Context />
    </div>
  );
};

render(<Examples />, document.getElementById("root"));
