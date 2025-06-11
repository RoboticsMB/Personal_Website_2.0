import './App.css';
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import ResearchProjects from './Components/ResearchProjects/ResearchProjects';
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About/>
      <Skills/>
      <Experience/>
      <ResearchProjects/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
