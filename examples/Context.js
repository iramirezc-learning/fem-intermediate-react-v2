import React, { createContext, useContext, useState } from "react";

const UserContext = createContext([{}, (f) => f]);

const FirstLevel = () => {
  return (
    <div>
      <h3>First Level</h3>
      <SecondLevel />
    </div>
  );
};

const SecondLevel = () => {
  return (
    <div>
      <h4>Second Level</h4>
      <ThirdLevel />
    </div>
  );
};

/**
 * Example of `useContext` hook.
 */
const ThirdLevel = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <h5>Third Level</h5>
      <pre>
        Context: <code>{JSON.stringify(user, null, 4)}</code>
      </pre>
      <button
        onClick={() =>
          setUser(
            Object.assign({}, user, {
              counter: user.counter + 1,
            })
          )
        }
      >
        Increment Counter
      </button>
    </div>
  );
};

/**
 * Example of Context Provider.
 */
const Context = () => {
  const contextHook = useState({
    firstName: "Isaac",
    lastName: "Ramirez",
    counter: 0,
  });

  return (
    <section>
      <h2>useContext example</h2>
      <UserContext.Provider value={contextHook}>
        <FirstLevel />
      </UserContext.Provider>
    </section>
  );
};

export default Context;
