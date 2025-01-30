import React, {useRef} from 'react'
import { loadFull } from "tsparticles";
import NavBar from './components/NavBar/NavBar'
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Sponsors from './components/Sponsors/Sponsors';
import Hackathon from './components/Hackathon/Hackathon';
import Events from './components/Events/Events'
import Footer from './components/Footer/Footer'
import PortraitVideo from './components/PortraitVideo/PortraitVideo';

function App() {
  const particlesInit = async(main) => await loadFull(main)
  const particlesLoaded =  () => console.log('loaded particles')

  return (
    <div className="App">
      <NavBar />
      <LandingPage particlesInit={particlesInit} particlesLoaded={particlesLoaded}/>
      <Hackathon />
      {/* <ScrollText /> */}
      {/* <PortraitVideo videoSrc="intro_video.mp4" /> */}
      <Events />
      {/* <Sponsors /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
