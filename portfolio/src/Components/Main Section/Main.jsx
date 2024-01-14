import React, { useEffect, useState } from "react";
import { Navdata } from "../Header/Navdata";
import Hero from "../Hero Section/Hero";
import About from "../About Section/About";
import Skill from "../Skill Section/Skill";
import Project from "../Project Section/Project";

export default function Main() {

  return (
    <div className="flex flex-col">
      <Hero />
      <About title={Navdata[0].name} id={Navdata[0].id} />
      <Skill title={Navdata[1].name} id={Navdata[1].id} />
      <Project title={Navdata[2].name} id={Navdata[2].id} />
    </div>
  );
}


/*  
    <div
      className={`w-screen h-fit absolute top-[250vh] flex flex-col justify-center items-center my-72`}
      id={id}
    >
      {scrollY >= 1950 && (
        <>
          <motion.p
            className="text-center text-highlightDark pb-10 font-bold text-2xl lg:text-3xl"
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.p>

        </>
      )}
    </div>
**/
