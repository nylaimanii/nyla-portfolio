import './index.css';
import './App.css';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import KawaiiEasterEgg from './components/KawaiiEasterEgg';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <KawaiiEasterEgg />
      <Cursor />
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Hackathons />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </>
  );
}
