import React, { useContext, useState } from "react";
import DarkThemeToggle from "../../utils/DarkThemeToggle";
import { Navdata } from "./Navdata";
import { ThemeContext } from "../../context/themeContext";

export default function Navbar() {
  const Mode = useContext(ThemeContext);
  const { darkMode } = Mode;
  return (
    <div className="flex gap-20">
      <DarkThemeToggle/>
      <ul
        className={`hidden lg:flex flex-wrap justify-start items-center gap-20 text-xl font-semibold ${
          !darkMode ? "text-textLite" : "text-textDark"
        } `}
      >
        {Navdata.map((item, index) => {
          return (
            <li className="" key={index}>
              <a href={item.id}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
