import "./App.css";
import Navbar from './component/Navbar';
import Hero from "./Page/Hero"
import About from "./Page/About"
import Skill from './component/Skill';
import Service from './Page/Service';
import Projects from './Page/Projects';
import Contact from './Page/Contact';
import Footer from './Page/Footer';
import Cursor from "./component/Cursor";
import SocialLinks from "./component/SocialLinks";
import { AnimatePresence,} from "framer-motion"



function App() {
  return (<>
    <div className=" relative font-roboto select-text flex  h-screen min-h-screen flex-col cursor-auto">
      <AnimatePresence mode='wait'>
      <Cursor/>

      <Navbar />

      <Hero />

      <About />

      <SocialLinks />

      <Skill />

      <Service />

      <Projects />

      <Contact />

      <Footer />

      </AnimatePresence>
    </div>
    </>
  );
}

export default App;
