import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import { ThemeContext } from "../../context/themeContext";
import { motion, useAnimationControls } from "framer-motion";

export default function Logo() {
  const Mode = useContext(ThemeContext);
  const { darkMode } = Mode;

  const controls = useAnimationControls();
  useEffect(() => {
    async function LogoAnimation() {
      await controls.start({ x: -100, opacity: 0 });
      await controls.start(
        { x: 0, opacity: 1 },
        { duration: 1, type: "spring" }
      );
      await controls.start(
        { rotateY: [0, 30, 60, 90, 180, 360] },
        { type: "spring", repeat: Infinity, repeatDelay: 1.5 }
      );
    }
    LogoAnimation();
  }, [controls]);

  return (
    <motion.div
      className={`lg:text-4xl text-3xl font-bold ${
        !darkMode ? "text-highlightLite" : "text-highlightDark"
      }`}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <span className="">&lt;</span>
      <span>Sazid</span>
      <span>/</span>
      <span className="">&gt;</span>
    </motion.div>
  );
}
