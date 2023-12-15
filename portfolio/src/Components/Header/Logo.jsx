import React, { useContext } from "react";
import "../../App.css";
import { ThemeContext } from "../../context/themeContext";
export default function Logo() {
  const Mode = useContext(ThemeContext);
  const { darkMode } = Mode;
  return (
    <>
      <div
        className={`lg:text-4xl text-3xl font-bold ${
          !darkMode ? "text-highlightLite" : "text-highlightDark"
        }`}
      >
        <span className="">&lt;</span>
        <span>Sazid</span>
        <span>/</span>
        <span>&gt;</span>
      </div>
    </>
  );
}
