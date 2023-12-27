// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import DarkThemeToggle from "./utils/DarkThemeToggle";
import Hero from "./Components/Hero Section/Hero";
import { Navdata } from "./Components/Header/Navdata";
import About from "./Components/About Section/About";

function App() {
  const Mode = useContext(ThemeContext);
  const { darkMode } = Mode;
  console.log(Navdata[0].name);
  return (
    <body
      className={`${
        !darkMode ? "bg-lite" : "bg-main"
      } flex flex-col h-[1000vh] relative w-screen`}
    >
      <Header />
      <DarkThemeToggle />
      <Hero />
      <About title={Navdata[0].name} id={Navdata[0].id} />
    </body>
  );
}

export default App;
