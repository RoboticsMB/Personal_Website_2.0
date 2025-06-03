import './App.css';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="about">About Content</section>
      <section id="skills">Skills Content</section>
      <section id="experience">Experience Content</section>
      <section id="projects">Projects Content</section>
      <section id="education">Education Content</section>
      <section id="contact">Contact Content</section>
    </div>
  );
}

export default App;
