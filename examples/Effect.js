import React, { useState, useEffect } from "react";

/**
 * Example of `useEffect` hook.
 */
const Effect = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section>
      <h2>useEffect example</h2>
      <p>
        useEffect &quot;schedules&quot; a function to be executed after the
        component is rendered. When dependencies are provided like{" "}
        <code>[a, b, c]</code>, then it will only be executed if any of those
        values change. If an empty array is provided <code>[]</code>, then the
        effect will only be executed once.
      </p>
      <div>
        <b>Current time:</b> {time.toLocaleTimeString()}
      </div>
    </section>
  );
};

export default Effect;
