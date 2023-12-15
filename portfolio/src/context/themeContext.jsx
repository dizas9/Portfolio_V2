import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
export default function Toogle(props) {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((pervState) => !pervState);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
