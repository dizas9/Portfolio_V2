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
    visible:{
      scale:[0,1,2,0,1],
      transition:{
        delay:1.9,
        type:"spring",
      }
    }
  };
  return (
    <>
      <motion.button
        onClick={toggleDarkMode}
        className=""
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
