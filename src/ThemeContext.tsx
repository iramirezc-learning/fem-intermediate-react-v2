import { createContext } from "react";

export interface ITheme {
  button: {
    backgroundColor: string;
  };
}

const ThemeContext = createContext<[ITheme, (theme: ITheme) => void]>([
  { button: { backgroundColor: "green" } },
  (theme) => theme,
]);

export default ThemeContext;
