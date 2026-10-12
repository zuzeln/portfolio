import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Advantages from './components/Advantages';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="portfolio-app">
      <CanvasBackground />
      <Navbar />
      <main className="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Advantages />
        <Contact />
      </main>
    </div>
  );
}
