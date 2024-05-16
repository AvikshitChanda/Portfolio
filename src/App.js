import Home from "./sections/Home";
import './css/app.css';
import About from "./sections/About";
import Project from "./sections/Project";
import ParticlesComponent from "./components/ParticlesBack";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="App">
      {loading ?
        <div className="loader-container">
          <HashLoader
            color="#00d4ff"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        :
        <div>
          <Home />
          <About />
          <Project />
          <Skills />
          <Contact />
          <ParticlesComponent id="particles" />
        </div>
      }

      
    </div>
  );
}

export default App;
