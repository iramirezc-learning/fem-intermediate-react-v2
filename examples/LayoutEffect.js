import React, { useState, useRef, useLayoutEffect } from "react";

const LayoutEffect = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const elRef = useRef(null);

  // eslint-disable-next-line
  useLayoutEffect(() => {
    console.log(`triggered useLayoutEffect`);
    setWidth(elRef.current.clientWidth);
    setHeight(elRef.current.clientHeight);
  });

  return (
    <section>
      <h2>useLayoutEffect example</h2>
      <p>
        useLayoutEffect works synchronously opposed to useEffect that it runs
        asynchronously. Any function passed down to this hook will be executed
        after a re-render. It works in a similar way of{" "}
        <code>componentDidMount</code> or <code>componentDidUpdate</code>.
      </p>
      <div>Width: {`${width}px`}</div>
      <div>Height: {`${height}px`}</div>
      {/* onClick forces the re-render */}
      <textarea
        name="text"
        id="text"
        ref={elRef}
        onClick={() => setWidth(0)}
      ></textarea>
    </section>
  );
};

export default LayoutEffect;
