import './Skills.css'

function Skills(){
    return (
      <section id="skills" className="skills-section">
        <h2>My <span className="color-Skills">Skills</span></h2>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <ul>
              <li>Python</li>
              <li>C#</li>
              <li>Java</li>
              <li>C++</li>
              <li>R</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Web Development</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Data and Scientific Computing</h4>
            <ul>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Geopandas</li>
              <li>Matplotlib</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Automation and Testing</h4>
            <ul>
              <li>Playwright</li>
              <li>Selenium</li>
              <li>BeautifulSoup</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tooling and Workflow</h4>
            <ul>
              <li>Git</li>
              <li>Bash</li>
              <li>RabbitMQ</li>
              <li>Github</li>
              <li>Bitbucket</li>
              <li>Jira</li>
            </ul>
          </div>
        </div>
      </section>
    )
}

export default Skills;