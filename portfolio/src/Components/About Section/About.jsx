import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Navdata } from "../Header/Navdata";

export default function About({title , id}) {

  const Mode = useContext(ThemeContext);
  const { darkMode, toggleDarkMode } = Mode;

  return (
    <div
      className={`h-screen absolute w-screen top-[100vh] flex flex-col justify-center items-center`}
      id={id}
    >
      <div className="w-[20rem] lg:w-[60rem] xl:w-[95rem] h-[50rem] lg:pt-20 outline-double outline-lite rounded-3xl">
        <p className="text-center">{title}</p>
      </div>
    </div>
  );
}
