import './App.css';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="about">
        <h2>About Me</h2>
        <p>I am passionate software engineer with a strong foundation in Computer Science and a passion for learning</p>
        <p>I am currently pursuing a double degree in Computer Science with a concentration in Machine Learning
           and Mathematics with a concentraion in statistics</p>
        <p>Outside of the proffesional world, I enjoy playing tennis, chess, and skiing</p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>C#</li>
          <li>R</li>
          <li>Html</li>
          <li>Css</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>Git</li>
          <li>Bash</li>
          <li>SQL</li>
        </ul>
      </section>
      <section id="experience">
        <h2>Work Experience</h2>
        <ul>
          <li>Software Enigneer Internship (SNC)</li>
          <li>Game Developer Apprenticeship (Simcoach Games)</li>
          <li>Information Systems Assistant</li>
          <li>Chess Instructor</li>
        </ul>
      </section>
      <section id="research/projects">
        <h2>Research and Projects</h2>
        <p>Currently Working on Personal Paper</p>
        <p>Paper published in medRix journal</p>
        <p>List stats on all the automation and data scrapers</p>
        <p>Projects</p>
        <p>This website</p>
        <p>Old Projects</p>
        <p>Physics Brute Force Solver</p>
        <p>Google Forms to Canvas Converter</p>
        <p>Small Scripts to Improve Life</p>
        <p>Tennis Court Reservation Script</p>
        <p>Southwest Airline Reservation Script</p>
      </section>
      <section id="education">
        <h2>Education</h2>
        <p>I am currently pursuing a double degree in Computer Science with a concentration in Machine Learning
            and Mathematics with a concentraion in statistics</p>
        <p>Presidents Scholar</p>
        <p>Dean's List</p>
        <p>National Merit Scholar</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email:</p>
        <p>Phone: Available Upon Request</p>
        <p>Location</p>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Send me a message</p>
      </section>
    </div>
  );
}

export default App;
