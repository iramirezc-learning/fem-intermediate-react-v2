import React from "react";
import { render } from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Callback from "./Callback";
import LayoutEffect from "./LayoutEffect";
import ImperativeHandle from "./ImperativeHandle";

const Examples = () => {
  return (
    <div>
      <State />
      <Effect />
      <Context />
      <Ref />
      <Reducer />
      <Memo />
      <Callback />
      <LayoutEffect />
      <ImperativeHandle />
    </div>
  );
};

render(<Examples />, document.getElementById("root"));
