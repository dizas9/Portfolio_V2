import React, { useContext } from "react";
import DarkThemeToggle from "../../utils/DarkThemeToggle";
import { Navdata } from "./Navdata";
import { ThemeContext } from "../../context/themeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ clickEvent, menuClickHandler }) {
  const Mode = useContext(ThemeContext);
  const { darkMode } = Mode;

  const ParentVariant = {
    start: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2, // Add a slight delay to synchronize with child animations
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const LiVariants = {
    start: {
      rotateX: [0, 90],
    },
    visible: {
      rotateY: [0, 30, 60, 90, 180, 360],
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  };

  const toggleMenuVariants = {
    start: {
      x: -500,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
      },
      exit: {
        x: -500,
        transition: {
          duration: 1,
          type: "spring",
        },
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={!clickEvent ? "lg:flex gap-20 hidden" : null}
        variants={ParentVariant}
        initial="start"
        animate="visible"
      >
        <motion.ul
          key={clickEvent}
          className={
            !clickEvent
              ? `lg:flex flex-wrap justify-start items-center gap-20 text-xl font-semibold ${
                  !darkMode ? "text-textLite" : "text-textDark"
                } `
              : `flex flex-col items-start gap-5 font-medium text-xl text-sectionLite pl-5 absolute top-24 left-0 h-screen bg-sectionDark border-2 w-screen`
          }
          variants={!clickEvent ? null : toggleMenuVariants}
          initial="start"
          animate={clickEvent ? "visible" : "exit"}
        >
          <button onClick={menuClickHandler} className="lg:hidden">close</button>
          {Navdata.map((item, index) => {
            return (
              <motion.li
                className=""
                key={index}
                variants={LiVariants}
                initial="start"
                animate="visible"
              >
                <a href={item.id}>{item.name}</a>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* <DarkThemeToggle /> */}
      </motion.div>
    </AnimatePresence>
  );
}
