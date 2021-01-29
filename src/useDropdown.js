import React from "react";
import { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const dropdownId = `use-dropdown-${label.toLowerCase().replace(" ", "-")}`;
  const [state, setState] = useState(defaultState);

  const Dropdown = () => (
    <label htmlFor={dropdownId}>
      {label}
      <select
        name={dropdownId}
        id={dropdownId}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option value="">all</option>
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
