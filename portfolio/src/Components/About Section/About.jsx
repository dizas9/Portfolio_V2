import { useState, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import { infodata, currentLearning, guidingPrincipl } from "./Infodata";
import { useScroll } from "../../hooks/useScroll";
export default function About({ title, id }) {
  const { scrollY } = useScroll(0);
  console.log("sc", scrollY);
  console.log("Top", window.innerHeight);
  if (scrollY > 500) {
    console.log("exits 500", scrollY);
  }
  console.log("Device Width", window.innerWidth);
  return (
    <div
      id={id}
      className={`h-screen absolute w-screen top-[90vh] flex flex-col justify-center items-center`}
    >
      {scrollY >= 424 && (
        <motion.p
          className="text-center text-highlightDark pb-10 font-bold text-2xl lg:text-3xl"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.p>
      )}
      {scrollY >= 424 && scrollY < 1000 && (
        <motion.div
          className="h-fit w-[20rem] lg:w-[60rem] xl:w-[60rem] lg:py-10 py-5 outline-double outline-lite rounded-3xl lg:my-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.5 }}
        >
          <p className="text-justify px-5 text-lite font-thin lg:text-2xl">
            {infodata.info}
          </p>
          <div className="text-justify px-5 text-lite lg:text-2xl">
            {/* <details className="pt-2 lg:pt-4">
          <summary className="font-bold text-highlightDark">
            Things I Currently Learning -
          </summary>
          <ul>
            {currentLearning.map((item, index) => {
              return (
                <p className="pt-4 font-thin" key={index}>
                  <span className="font-semibold">{item.title}</span>{" "}
                  {item.list}
                </p>
              );
            })}
          </ul>
        </details>
        <details className="pt-2 lg:pt-4">
          <summary className="font-bold text-highlightDark">
            My guiding principles involve -
          </summary>
          <ul>
            {guidingPrincipl.map((item, index) => {
              return (
                <p className="pt-4 font-thin" key={index}>
                  <span className="font-semibold">{item.title}</span>{" "}
                  {item.info}
                </p>
              );
            })}
          </ul>
        </details> */}
          </div>
        </motion.div>
      )}
    </div>
  );
}
