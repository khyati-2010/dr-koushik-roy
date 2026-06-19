import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Recognitions from "./components/Recognitions";
import Teaching from "./components/Teaching";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <ScrollProgress /> 
      <Navbar />

      <Hero />
      <About />
      <Research />
      <Publications />
      <Recognitions />
      <Teaching />
      <Contact />
      <BackToTop />
    </>
  );
}

export default App;