import './TechnicalProjects.css'

function TechnicalProjects(){
    const projects = [
        {
            title: "This Website",
            details: ["A responsive personal website showcasing my skills, projects, and experiences. Built from the ground up, completely from scratch"],
            language: "React",
            codeBase: "https://github.com/RoboticsMB/Personal_Website_2.0"
        },
        {
            title: "Research Group Scripts",
            details: ["20+ Automated Data Scrapers", "10+ Data Pipelines", "Several Data Analysis Tools"],
            language: "Python",
            codeBase: "RESTRICTED"
        },
        {
            title: "Robotics Club CodeBase",
            details: ["Software Integration for 90lb robot", "5k+ lines for code architecture/yr", "Code Base: 2022, 2023, 2024"
            ],
            language: "C++ & Java",
            codeBase: "https://github.com/quasics/quasics-frc-sw-2015/tree/master"
        },
        {
            title: "Smaller Projects",
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
                        <div className="project-content">
                            <h3 className="project-title">{prj.title}</h3>
                            <p className="project-details">{prj.details}</p>
                            <p className="project-language">{prj.language}</p>
                            <p className="project-codebase">{prj.codeBase}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default TechnicalProjects;