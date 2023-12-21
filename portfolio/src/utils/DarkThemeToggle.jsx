import React, { useContext } from "react";
import "../App.css";
import { ThemeContext } from "../context/themeContext";
import { motion } from "framer-motion";

export default function DarkThemeToggle() {
  const Mode = useContext(ThemeContext);
  const { darkMode, toggleDarkMode } = Mode;
  const ThemeVariants = {
    start: {
      scale: 0,
    },
    visible: {
      scale: [1, 0, 1],
      transition: {
        delay: 1,
        type: "spring",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <>
      <motion.button
        onClick={toggleDarkMode}
        className={`border-2 w-40 py-2 flex justify-start fixed right-[-7.5rem] mt-32 rounded-full pl-2 z-50 ${
          !darkMode ? "border-main" : "border-lite"
        }`}
        variants={ThemeVariants}
        initial="start"
        animate="visible"
      >
        <img
          src={!darkMode ? "/image/moon.svg" : "/image/sun.svg"}
          alt=""
          className="w-7 lg:w-auto"
        />
      </motion.button>
    </>
  );
}
