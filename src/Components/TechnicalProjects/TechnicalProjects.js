import './TechnicalProjects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function TechnicalProjects(){
    const projects = [
        {
            title: "Personal Websites",
            overview: "A responsive personal website showing my skills, projects, and experiences.",
            details: ["2 Fully Published Websites", "Built From Scratch", "Responsive Mobile & Desktop Design"],
            language: "React",
            codeBase: "https://github.com/RoboticsMB/Personal_Website_2.0"
        },
        {
            title: "Research Group Scripts",
            overview: "Programs used to collect and calculate data for geolocation databases.",
            details: ["20+ Automated Data Scrapers", "10+ Data Pipelines", "Several Data Analysis Tools"],
            language: "Python",
            codeBase: "RESTRICTED"
        },
        {
            title: "Robotics Club Codebase",
            overview: "Used on competition robot (FIRST) to perform manual and autonomous tasks.",
            details: ["Software Integration for 90lb robot", "5k+ Lines for Code Architecture/yr", "Code Base: 2022, 2023, 2024"],
            language: "C++ & Java",
            codeBase: "https://github.com/quasics/quasics-frc-sw-2015/tree/master"
        },
        {
            title: "Mini-Projects",
            overview: "Personal endeavors for simplifying/optimizing various tasks",
            details: ["Physics Homework Solver", "Google Forms to Canvas Converter", "Tennis Court Reserver", "Southwest Airline Reserver"],
            language: "Python",
            codeBase: "https://github.com/RoboticsMB"
        },

    ]
    return (
        <section id="technicalprojects" className="technicalprojects-section">
            <h2>Technical <span className="color-projects">Projects</span></h2>
            <div className="projects">
                {projects.map((prj, index) => (
                    <div className="project-item" key={index}>
                        <div className="project-title-container">
                            <h3 className="project-title">{prj.title}</h3>
                        </div>
                        <div className="project-description-container">
                            <p className="project-overview">{prj.overview}</p>
                            <p className="project-statistics-header">Statistics</p>
                            <div className="project-tags">
                                {prj.details.map((detail, i) => (
                                    <span className="project-tag" key={i}>
                                        {detail}
                                    </span>
                                ))}
                            </div>
                            <p className="project-language">{prj.language}</p>
                            <a href={prj.codeBase} className="github-icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="1x"/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default TechnicalProjects;