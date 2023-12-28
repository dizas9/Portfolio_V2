import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { infodata, currentLearning, guidingPrincipl } from "./Infodata";
export default function About({ title, id }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(window.scrollY);
  console.log("sc", scrollY);
  if (scrollY > 500) {
    console.log("exits 500", scrollY);
  }
  return (
    <div
      id={id}
      className={`h-fit absolute w-screen top-[100vh] flex flex-col justify-center items-center`}
    >
      <p className="text-center text-highlightDark pb-10 font-bold text-2xl lg:text-3xl">
        {title}
      </p>
      {scrollY >= 400 && (
        <motion.div
          className="h-fit w-[20rem] lg:w-[60rem] xl:w-[60rem] lg:py-10 py-5 outline-double outline-lite rounded-3xl lg:my-10"
          initial={{ scale: 0 }}
          animate={
            (scrollY > 750 || scrollY > 850)
              ? {
                  scale: 0,
                  opacity: [0.5, 0.1, 0],
                  transition: { duration: 0.5 },
                }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.5, type: "spring" }}
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
