import React, { useMemo, useState } from "react";
import fibonacci from "./fibonacci";

const Slow = () => {
  const [n, setN] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const fib = fibonacci(n); // NOTICE: not using `useMemo`.

  return (
    <div>
      <h3>Slow example</h3>
      <div>
        <em style={{ display: "block", fontSize: "25px" }}>
          fib({n}) = {fib}
        </em>
        <br />
        <button onClick={() => setN(n + 1)}>Next Fibonacci</button>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: isGreen ? "limegreen" : "crimson",
          }}
        />
        <button onClick={() => setIsGreen(!isGreen)}>Toggle</button>
      </div>
    </div>
  );
};

/**
 * Example of `useMemo` hook.
 */
const Fast = () => {
  const [n, setN] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(n), [n]);

  return (
    <div>
      <h3>Fast example</h3>
      <div>
        <em style={{ display: "block", fontSize: "25px" }}>
          fib({n}) = {fib}
        </em>
        <br />
        <button onClick={() => setN(n + 1)}>Next Fibonacci</button>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: isGreen ? "limegreen" : "crimson",
          }}
        />
        <button onClick={() => setIsGreen(!isGreen)}>Toggle</button>
      </div>
    </div>
  );
};

const Memo = () => {
  return (
    <section>
      <h2>useMemo example</h2>
      <p>
        useMemo is a hook that memoizes the returning value of a function base
        on its props. It works like a cache for computations that we have
        already made, so that when we re-render a component it does get slow
        doing the same computation over and over again.
      </p>
      <Slow />
      <Fast />
    </section>
  );
};

export default Memo;
