import "./App.css";
import Assistant from "./components/Assistant";
import BlockChain from "./components/BlockChain";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import What from "./components/What";
import Utility from "./components/Utility";
import Footer from "./components/Footer";
import More from "./components/More";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Backtotop from "./components/BackToTop";

function App() {
  const [data, setdata] = useState(true);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  return (
    <>
      {data ? (
        <>
          <Preloader />
        </>
      ) : (
        <div>
          <div className="bg-[url('./assets/images/png/bg-header.png')] bg-no-repeat max-lg:bg-cover min-h-[466px] lg:min-h-[810px] lg:bg-Bgsize100">
            <Nav />
            <Hero />
          </div>
          <Assistant />
          <Features />
          <BlockChain />
          <More />
          <What />
          <Utility />
          <Footer />
          <Backtotop />
        </div>
      )}
    </>
  );
}

export default App;
