import './Skills.css'

function Skills(){
    return (
      <section id="skills" className="skills-section">
        <h2>My <span className="color-Skills">Skills</span></h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li>
              <li>C#</li>
              <li>Java</li>
              <li>C++</li>
              <li>R</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tooling & Workflow</h3>
            <ul>
              <li>Git</li>
              <li>Bash</li>
              <li>Github</li>
              <li>Bitbucket</li>
              <li>Jira</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Data & Scientific Computing</h3>
            <ul>
              <li>MATLAB</li>
              <li>Matplotlib</li>
              <li>NumPy</li>
              <li>Pandas</li>
              <li>GeoPandas</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Web Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Automation & Testing</h3>
            <ul>
              <li>Playwright</li>
              <li>RabbitMQ</li>
              <li>Selenium</li>
              <li>BeautifulSoup</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Communication & Languages</h3>
            <ul>
              <li>Techincal Writing</li>
              <li>English</li>
              <li>Ukrainian</li>
              <li>Russian</li>
            </ul>
          </div>

        </div>
      </section>
    )
}

export default Skills;