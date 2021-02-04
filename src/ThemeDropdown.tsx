import React, { FunctionComponent } from "react";
import { ITheme } from "./ThemeContext";

interface IProps {
  theme: ITheme;
  onChange: (theme: ITheme) => void;
}

const themeColorOptions = [
  { name: "Peru", value: "peru" },
  { name: "Dark Blue", value: "darkblue" },
  { name: "Chart Reuse", value: "chartreuse" },
  { name: "Medium Orchid", value: "mediumorchid" },
];

const ThemeDropdown: FunctionComponent<IProps> = (props) => {
  // I don't want to use `useContext`,
  // so, I'm passing the state and the setter
  // as props
  const { theme, onChange } = props;

  const handleThemeOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const color = e.target.value;

    onChange({
      button: {
        backgroundColor: color,
      },
    });
  };

  return (
    <label htmlFor="theme">
      Theme
      <select
        id="theme"
        value={theme.button.backgroundColor}
        onChange={handleThemeOnChange}
        onBlur={handleThemeOnChange}
      >
        {themeColorOptions.map((color) => {
          return (
            <option key={color.value} value={color.value}>
              {color.name}
            </option>
          );
        })}
      </select>
    </label>
  );
};
export default ThemeDropdown;
