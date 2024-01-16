import React, { useEffect, useRef } from "react";
import "../../App.css";
import {
  motion,
  useScroll,
  useTransform,
  useAnimationControls,
} from "framer-motion";

export default function Hero() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "absolute" : "fixed";
  });

  const controls = useAnimationControls();
  useEffect(() => {
    async function profileImage() {
      await controls.start({ opacity: 0, scale: 0 });
      await controls.start(
        { opacity: 1, scale: 1 },
        { type: "spring", stiffness: 50 }
      );
    }
    profileImage();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, position }}
      className={`absolute flex flex-col lg:flex-row items-center justify-center gap-28 lg:gap-20 xl:gap-10 lg:mx-10 xl:mx-56 h-screen`}
      id="/"
    >
      <motion.img
        src="image/profile.jpg"
        alt=""
        className={`w-[300px] lg:w-[400px] xl:w-[450px] rounded-full mt-[40%] lg:mt-[10%] border-2 outline outline-8 outline-offset-4 outline-lite `}
        initial={{ opacity: 0 }}
        animate={controls}
      />
      <motion.div
        className={`flex flex-col items-center justify-center text-xl lg:mt-[10%] lg:text-3xl xl:text-4xl font-thin text-textDark
        }`}
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="">
          I'm <span className={`text-textLitefont-bold`}> Sazidul Islam </span>,{" "}
          <span className={`text-highlightDark font-bold`}>
            Front End Developer
          </span>
        </p>
        <p className=" text-center">
          I like building beautiful and accessible websites. I'm based in Dhaka,
          Bangladesh.
        </p>
      </motion.div>
    </motion.div>
  );
}
