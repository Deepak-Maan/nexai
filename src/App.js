import "./App.css";
import Assistant from "./components/Assistant";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/images/webp/bg-hero.webp')] bg-no-repeat min-h-[810px] bg-Bgsize100">
        <Nav />
        <Hero />
      </div>
      <Assistant />
    </>
  );
}

export default App;
