import './index.css';
import './App.css';
import Cursor from './components/Cursor';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Header />
      <main className="main-grid">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Hackathons />
        <div className="grid-row-2">
          <Contact />
          <Chatbot />
        </div>
      </main>
      <Footer />
    </>
  );
}
