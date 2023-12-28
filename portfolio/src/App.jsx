// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About Section/About";
import Main from "./Components/Main Section/Main";
import { useEffect } from "react";

function App() {

  return (
    <div className={`bg-main flex flex-col h-[1000vh] w-screen relative`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
