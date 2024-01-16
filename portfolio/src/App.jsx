import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main Section/Main";

function App() {

  return (
    <div className={`bg-main flex flex-col h-[1000vh] w-screen relative`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
//lg:h-[3673px] xl:h-[4073px]