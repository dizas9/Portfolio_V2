import React, { useContext, useState } from "react";
import "../../App.css";
import { ThemeContext } from "../../context/themeContext";
import { motion} from "framer-motion";

export default function Logo() {
  const [enter, setEnter] = useState(true);
  const Mode = useContext(ThemeContext);
  const { darkMode } = Mode;

  setTimeout(() => {
    setEnter(false);
  }, 1000);

  const sequenceVariants = {
    start: {
      opacity: [0, 0, 0,0.1],
      x: 0,
      transition: {
        delay: 1,
      },
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        ease: "easeOut",
      },
    },
    rotate: {
      opacity: 1,
      rotateY: [0, 30, 60, 90, 180, 360],
      transition: {
        type: "spring",
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.5,
        delay:1,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className={`lg:text-4xl text-3xl font-bold ${
        !darkMode ? "text-highlightLite" : "text-highlightDark"
      }`}
      variants={sequenceVariants}
      initial="start"
      animate={enter ? "enter" : "rotate"}
    >
      <span className="">&lt;</span>
      <span>Sazid</span>
      <span>/</span>
      <span className="">&gt;</span>
    </motion.div>
  );
}
