import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skillSet1, skillSet2 } from "./SkilData";

export default function Skill({ title, id }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  return (
    <div
      className={`w-screen h-fit absolute top-[150vh] lg:top-[150vh] flex flex-col justify-center items-center my-72`}
      id={id}
    >
      {scrollY >= 1024 && (
        <>
          <motion.p
            className="text-center text-highlightDark pb-10 font-bold text-2xl lg:text-3xl"
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.p>
          <motion.div
            className={`h-fit w-[20rem] lg:w-[60rem] xl:w-[60rem] lg:py-10 py-5 lg:px-36 outline-double outline-lite rounded-3xl flex lg:flex-col lg:justify-between`}
            initial={{ scale: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.5 }}
          >
            <div className="lg:p-10 p-5 flex flex-col lg:flex-row gap-5 justify-center lg:h-fit">
              {skillSet1.map((item, index) => {
                return (
                  <div
                    className="border-2 border-[white] rounded-tl-xl p-4 flex lg:flex-col justify-center items-center gap-1 lg:w-32"
                    id={index}
                  >
                    <img src={item.src} alt="" className="lg:w-10 w-8" />
                    <p className="lg:text-xl text-sm text-lite lg:font-semibold font-medium text-center">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="lg:p-10 p-5 flex flex-col lg:flex-row gap-5 justify-center lg:h-fit">
              {skillSet2.map((item, index) => {
                return (
                  <div
                    className="border-2 border-[white] rounded-tr-xl p-4 flex lg:flex-col justify-center items-center gap-1 lg:w-32"
                    id={index}
                  >
                    <img src={item.src} alt="" className="lg:w-10 w-8" />
                    <p className="lg:text-xl text-sm text-lite lg:font-semibold font-medium text-center">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
