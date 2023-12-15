import React, {  useContext } from "react";
import "../App.css";
import {ThemeContext} from "../context/themeContext";

export default function DarkThemeToggle() {
  const Mode = useContext(ThemeContext);
  const{darkMode , toggleDarkMode} = Mode;
  return (
    <>
      <button onClick={toggleDarkMode} className="">
        <img src={!darkMode ? "/image/moon.svg" : "/image/sun.svg"} alt="" className="w-7 lg:w-auto" />
      </button>
    </>
  );
}
