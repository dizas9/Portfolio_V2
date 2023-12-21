// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import DarkThemeToggle from "./utils/DarkThemeToggle";
import Hero from "./Components/Hero Section/Hero";

function App() {
  const Mode = useContext(ThemeContext);
  const {darkMode} = Mode;
  return (
    
      <body className={`${!darkMode ? "bg-lite" : "bg-main"} flex flex-col`}>
        <Header />
        <DarkThemeToggle/>
        <Hero/>
      </body>
    
  );
}

export default App;
