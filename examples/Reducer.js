import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_R":
      return Object.assign({}, state, { r: action.payload });
    case "UPDATE_G":
      return Object.assign({}, state, { g: action.payload });
    case "UPDATE_B":
      return Object.assign({}, state, { b: action.payload });
    default:
      return state;
  }
};

const Reducer = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <section>
      <h2>useReducer example</h2>
      <p>
        useReducer behaves almost exactly like a redux reducer, it will return
        back a variable holding the current state and a dispatch function to
        update it. useReducer needs to be provided with a reducer function and
        the default state. The reducer function will receive the current state
        and the action, this reducer function can do whatever you would like to
        change to the state based on action types, finally, the reducer function
        should return the new state or the same state if no changes were made.
      </p>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
        }}
      />
      <label htmlFor="colorR">
        <input
          id="colorR"
          type="range"
          min="0"
          max="255"
          step="10"
          value={r}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_R",
              payload: e.target.value,
            })
          }
        />
        R
      </label>
      <br />
      <label htmlFor="colorG">
        <input
          id="colorG"
          type="range"
          min="0"
          max="255"
          step="10"
          value={g}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_G",
              payload: e.target.value,
            })
          }
        />
        G
      </label>
      <br />
      <label htmlFor="colorB">
        <input
          id="colorB"
          type="range"
          min="0"
          max="255"
          step="10"
          value={b}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_B",
              payload: e.target.value,
            })
          }
        />
        B
      </label>
    </section>
  );
};

export default Reducer;
