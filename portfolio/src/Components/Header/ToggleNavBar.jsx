import React, { useContext, useState } from "react";
import DarkThemeToggle from "../../utils/DarkThemeToggle";
import { Navdata } from "./Navdata";
import { ThemeContext } from "../../context/themeContext";
import { motion } from "framer-motion";

export default function ToggleNavbar({ click, ClickMenuToggle }) {
  const Mode = useContext(ThemeContext);
  const { darkMode } = Mode;

  //   const ParentVariant = {
  //     start: {
  //       opacity: 0,
  //     },
  //     visible: {
  //       opacity: 1,
  //       transition: {
  //         when: "beforeChildren",
  //         staggerChildren: 0.4,
  //       },
  //     },
  //   };

  //   const LiVariants = {
  //     start: {
  //       rotateX: [0, 90],
  //     },
  //     visible: {
  //       rotateY: [0, 30, 60, 90, 180, 360],
  //       transition: {
  //         duration: 0.5,
  //         type: "tween",
  //       },
  //     },
  //   };
  return (
    <div
      className={!click ? null : "flex flex-col gap-2"}
      //   variants={ParentVariant}
      //   initial="start"
      //   animate="visible"
    >
      <ul
        className={`hidden  ${!darkMode ? "text-textLite" : "text-textDark"} `}
      >
        {Navdata.map((item, index) => {
          return (
            <motion.li className="" key={index}>
              <a href={item.id}>{item.name}</a>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
