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
      <div>
        <b>Current time:</b> {time.toLocaleTimeString()}
      </div>
    </section>
  );
};

export default Effect;
