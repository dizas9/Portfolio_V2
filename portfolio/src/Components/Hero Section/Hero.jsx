import React, { useContext ,useRef } from "react";
import "../../App.css";
import { ThemeContext } from "../../context/themeContext";
import { motion, useScroll, useTransform ,useAnimationControls } from "framer-motion";
export default function Hero() {
  const Mode = useContext(ThemeContext);
  const { darkMode, toggleDarkMode } = Mode;
  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-center gap-28 lg:gap-20 xl:gap-10 lg:mx-10 xl:mx-56 h-screen `}
    >
      <img
        src="image/profile.jpg"
        alt=""
        className={`w-[300px] lg:w-[400px] xl:w-[450px] rounded-full mt-16 outline outline-8 outline-offset-4 outline-lite `}
      />
      <div
        className={`flex flex-col items-center justify-center text-xl lg:text-3xl xl:text-4xl font-thin  ${
          !darkMode ? "text-textLite" : "text-textDark"
        }`}
      >
        <p className="">
          I'm{" "}
          <span
            className={`${
              !darkMode ? "text-textLite" : "text-textDark"
            } font-bold`}
          >
            {" "}
            Sazidul Islam{" "}
          </span>
          ,{" "}
          <span
            className={`${
              !darkMode ? "text-highlightLite" : "text-highlightDark"
            } font-bold`}
          >
            Front End Developer
          </span>
        </p>
        <p className=" text-center">
          I like building beautiful and accessible websites. I'm based in Dhaka,
          Bangladesh.
        </p>
      </div>
    </div>
  );
}
