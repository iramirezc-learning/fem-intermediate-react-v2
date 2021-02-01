import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  useState,
} from "react";

// eslint-disable-next-line
const Input = forwardRef(
  ({ hasError, placeholder, value, handleChange }, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
      return {
        focus: () => inputRef.current.focus(),
      };
    });

    return (
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        ref={inputRef}
        style={{
          border: `1px solid ${hasError ? "red" : "black"}`,
        }}
      />
    );
  }
);

const ImperativeHandle = () => {
  const [city, setCity] = useState("Seattle");
  const [state, setState] = useState("WA");
  const [error, setError] = useState("");
  const cityRef = useRef(null);
  const stateRef = useRef(null);

  const validate = () => {
    if (!city) {
      setError("city");
      cityRef.current.focus();
      return;
    }

    if (!state) {
      setError("state");
      stateRef.current.focus();
      return;
    }

    setError("");
    alert("Form is valid!");
  };

  return (
    <section>
      <h2>useImperativeHandle example</h2>
      <p>
        useImperativeHandle (from the React Docs) customizes the instance value
        that is exposed to parent components when using <code>ref</code>. In
        other words, I think I can say that whenever you want a parent component
        use its child DOM element reference you can use <code>forwardRef</code>{" "}
        and <code>useImperativeHandle</code> to achieve such behaviour, (a
        parent having access to methods in its children)
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          placeholder="City"
          value={city}
          handleChange={setCity}
          ref={cityRef}
          hasError={error === "city"}
        />
        <Input
          placeholder="State"
          value={state}
          handleChange={setState}
          ref={stateRef}
          hasError={error === "state"}
        />
        <button onClick={validate}>Validate</button>
      </form>
    </section>
  );
};

export default ImperativeHandle;
