import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div className="text-lite flex justify-center">
      <p className="font-thin flex gap-1 lg:gap-3">
        Developed with
        <motion.img
          src="image/icons8-react.svg"
          alt=""
          className="w-7 rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 30, 60, 90, 180, 360] }}
          transition={{duration:0.5, repeat:Infinity ,type:"tween"}}
        />
        <span className="font-bold">by Sazid (diza9)</span>
      </p>
    </motion.div>
  );
}
