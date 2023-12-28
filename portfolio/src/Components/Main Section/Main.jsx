import React, { useEffect } from "react";
import { Navdata } from "../Header/Navdata";
import Hero from "../Hero Section/Hero";
import About from "../About Section/About";
import Skill from "../Skill Section/Skill";

export default function Main() {

  return (
    <div className="flex flex-col">
      <Hero />
      <About title={Navdata[0].name} id={Navdata[0].id} />
      <Skill title={Navdata[1].name} id={Navdata[1].id} />
    </div>
  );
}
