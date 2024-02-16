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

function App() {
  return (
    <>
      <div className="bg-[url('./assets/images/webp/bg-hero.webp')] bg-no-repeat min-h-[810px] bg-Bgsize100">
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
    </>
  );
}

export default App;
