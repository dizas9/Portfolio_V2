import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../../hooks/useScroll";

export default function Contact({ title, id }) {
  const { scrollY } = useScroll(0);
  console.log(title);

  return (
    <div
      className={`w-screen h-fit absolute top-[280vh] lg:top-[350vh] xl:top-[310vh] flex flex-col justify-center items-center my-72`}
      id={id}
    >
      {scrollY >= 2340 && (
        <>
          <motion.p
            className="text-center text-highlightDark pb-10 font-bold text-2xl lg:text-3xl"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {title}
          </motion.p>
          <motion.div className="flex flex-col lg:flex-row gap-5 lg:gap-14 lg:w-[60%] w-[70%] flex-wrap justify-center items-center">
            <motion.div
              className="flex gap-5  outline-double outline-lite rounded-xl p-2 lg:p-3 w-[100%] lg:w-[42%]"
              initial={{ rotateX: 180 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <img
                src="image/icons8-gmail.svg"
                alt=""
                className="w-10 lg:w-12"
              />
              <div className="">
                <p className="text-lite font-bold text-xl lg:text-2xl">Email</p>
                <p className="text-[white] lg:text-xl">sazid.ice07@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-5  outline-double outline-lite rounded-xl p-2 lg:p-3 w-[100%] lg:w-[42%]"
              initial={{ rotateX: 180 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <img
                src="image/icons8-linkedin.svg"
                alt=""
                className="w-10 lg:w-12"
              />
              <div className="">
                <p className="text-lite font-bold text-xl lg:text-2xl">
                  LinkedIn
                </p>
                <a
                  className="text-[white] lg:text-xl"
                  href="https://www.linkedin.com/in/dizas9/"
                >
                  linkedin.com/in/dizas9
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-5  outline-double outline-lite rounded-xl p-2 lg:p-3 w-[100%] lg:w-[42%]"
              initial={{ rotateX: 180 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <img
                src="image/icons8-github.svg"
                alt=""
                className="w-10 lg:w-12"
              />
              <div className="">
                <p className="text-lite font-bold text-xl lg:text-2xl">
                  Github
                </p>
                <a
                  className="text-[white] lg:text-xl flex items-center"
                  href="https://github.com/dizas9"
                >
                  <p className="">click here</p>
                  <img src="image/goto.png" alt="" className="w-7" />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-5  outline-double outline-lite rounded-xl p-2 lg:p-3 w-[100%] lg:w-[42%]"
              initial={{ rotateX: 180 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <img
                src="image/icons8-phone.svg"
                alt=""
                className="w-10 lg:w-12"
              />
              <div className="">
                <p className="text-lite font-bold text-xl lg:text-2xl">Phone</p>
                <p className="text-[white] lg:text-xl">+880 1621-882710</p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
}
