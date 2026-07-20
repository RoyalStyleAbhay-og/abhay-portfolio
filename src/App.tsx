import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import AchievementsCerts from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A12] text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <AchievementsCerts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
