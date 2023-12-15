import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default function MenuToggle() {
  const Mode = useContext(ThemeContext);
  const { darkMode } = Mode;
  return (
    <div>
      <img src={!darkMode ? "/image/burgerLite.svg" : "/image/burgerDark.svg"} alt="" className="w-7 lg:hidden" />
    </div>
  );
}
