import React from "react";
import "../../App.css";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MenuToggle from "../../utils/MenuToggle";

export default function Header() {
  return (
    <>
    <div className="flex xl:mx-52 lg:mx-0 px-10 py-7 justify-between items-center ">
        <Logo/>
        <Navbar/>
        <MenuToggle/>
    </div>
    </>
  )
}
