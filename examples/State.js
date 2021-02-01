import React, { useState } from "react";

/**
 * Example of `useState` hook.
 */
const State = () => {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <section>
      <h2>useState example</h2>
      <p>
        useState returns a variable holding the current or default state
        provided along with a setter function to change it.
      </p>
      <div style={{ display: "flex" }}>
        <button onClick={() => setIsGreen(!isGreen)}>Toggle</button>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: isGreen ? "limegreen" : "crimson",
          }}
        />
      </div>
    </section>
  );
};

export default State;
