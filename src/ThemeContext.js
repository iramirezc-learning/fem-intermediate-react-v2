import { createContext } from "react";

const ThemeContext = createContext([
  {
    button: {
      backgroundColor: "green",
    },
  },
  (theme) => theme,
]);

export default ThemeContext;
