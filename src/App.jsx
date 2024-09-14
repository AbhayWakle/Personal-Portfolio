import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
// Import MoreProjects component
import Contact from './components/Contact';
import MoreProjects from './components/Moreproject';

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-black selection:text-purple-900">

        {/* Background setup */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%-20%, rgba(120,119,198,0.3), rgba(255,255,255,0))]">
          </div>
        </div>

        {/* Container setup */}
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            {/* Define routes */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Technologies />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />

            {/* More Projects page route */}
            <Route path="/more-projects" element={<MoreProjects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
