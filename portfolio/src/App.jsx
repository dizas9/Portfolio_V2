// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

function App() {
  const Mode = useContext(ThemeContext);
  const {darkMode} = Mode;
  return (
    
      <body className={`${!darkMode ? "bg-lite" : "bg-main"}`}>
        <Header />
      </body>
    
  );
}

export default App;
