import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main Section/Main";

function App() {

  return (
    <div className={`bg-main flex flex-col w-screen relative`}>
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
//lg:h-[3673px] xl:h-[4073px]