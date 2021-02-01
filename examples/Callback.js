import React, { useState, useEffect, useCallback, memo } from "react";
import fibonacci from "./fibonacci";

const Slow = ({ compute, n }) => {
  return (
    <div>
      <h3>example of child that is re-render</h3>
      <div>
        <em style={{ display: "block", fontSize: "25px" }}>
          fib({n}) = {compute(n)}
        </em>
        <br />
        <div>
          <b>last re-render:</b> {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

/**
 * Example of `useCallback` hook and `memo`.
 */
// eslint-disable-next-line
const Fast = memo(({ compute, n }) => {
  return (
    <div>
      <h3>example of child using memo & useCallback</h3>
      <div>
        <em style={{ display: "block", fontSize: "25px" }}>
          fib({n}) = {compute(n)}
        </em>
        <br />
        <div>
          <b>last re-render:</b> {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
});

const Callback = () => {
  const [time, setTime] = useState(new Date());
  const [n, setN] = useState(1);
  // Notice how this will be a new function every time the component re-renders.
  // That's actually what we want, so that the props changes on every second
  // and the children component that don't use callback re-render.
  const compute = (num) => fibonacci(num);

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section>
      <h2>useCallback example</h2>
      <p>
        useCallback works almost exactly the same way as useMemo does, it caches
        the same reference of a function to remember that it has not changed.
        useCallback should be used along with a component wrapped with the{" "}
        <code>memo</code> function, so that it checks that the props has not
        change. It this example, one of the child is always being re-render
        because the <code>compute</code> function is always redefined, the
        second child, remembers that its props has not change at all, so it does
        not re-renders.
      </p>
      <button onClick={() => setN(n + 1)}>Increment: {n}</button>
      <br />
      <br />
      <div>
        <b>parent last re-render:</b> {time.toLocaleTimeString()}
      </div>
      <Slow compute={compute} n={n} />
      <Fast compute={useCallback(compute, [])} n={n} />
    </section>
  );
};

export default Callback;
