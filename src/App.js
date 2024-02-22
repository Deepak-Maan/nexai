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
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [data, setdata] = useState(true);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      {data ? (
        <>
          <Preloader />
        </>
      ) : (
        <div>
          <div className="bg-[url('./assets/images/png/bg-header.png')] bg-no-repeat  min-h-[466px] lg:min-h-[810px] ">
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
