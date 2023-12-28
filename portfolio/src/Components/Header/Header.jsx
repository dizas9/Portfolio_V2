import React, { useState } from "react";
import "../../App.css";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function Header() {
  const [clickEvent, setClickEvent] = useState(false);
  function menuClickHandler() {
    setClickEvent((prevState) => !prevState);
  }

  const HeaderVariant = {
    hidden: {
      rotateX: 80,
      opacity: 0.5,
    },
    visible: {
      rotateX: 0,
      opacity: 1,

      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
  };

  const MenuVariants = {
    start: {
      x: 100,
      opcity: 0,
    },
    visible: {
      x: 0,
      opcity: 1,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex xl:mx-52 lg:mx-0 px-10 py-5 justify-between items-center border-b-[0.01rem] border-[#88807B] fixed right-0 left-0 bg-sectionDark z-10"
        variants={HeaderVariant}
        initial="hidden"
        animate="visible"
        debug
      >
        <Logo />
        <Navbar clickEvent={clickEvent} menuClickHandler={menuClickHandler} />
        <motion.button
          className=""
          variants={MenuVariants}
          initial="start"
          animate="visible"
          onClick={menuClickHandler}
        >
          <img src="/image/burgerDark.svg" alt="" className="w-7 lg:hidden" />
        </motion.button>
      </motion.div>
    </>
  );
}
