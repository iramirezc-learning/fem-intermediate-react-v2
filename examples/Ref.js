import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  // DOM element example
  const inputRef = useRef(null);

  const setInputFocus = () => {
    inputRef.current.focus();
  };

  // Interval example
  const intervalRef = useRef(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    intervalRef.current = id;

    return () => clearInterval(intervalRef.current);
  });

  const stopCounting = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <section>
      <h2>useRef Example</h2>
      <p>
        useRef can be used to create objects that will hold their data and
        changes in real time, (ignoring if a component is re-rendered or not).
        They are useful to keep track of properties that change outside the
        life-cycle. According to the docs, they can be used as instance
        variables.
      </p>
      <div>
        <h3>DOM element example</h3>
        <input type="text" ref={inputRef} placeholder="Click that button ->" />
        <button onClick={setInputFocus}>Focus</button>
      </div>
      <div>
        <h3>Interval example</h3>
        <div>
          <label htmlFor="count">
            Counting:
            <input
              type="text"
              id="count"
              value={counter}
              readOnly
              style={{ width: "20px", margin: "0 5px" }}
            />
          </label>
          <button onClick={stopCounting}>Stop Counting!</button>
        </div>
      </div>
    </section>
  );
};

export default Ref;
