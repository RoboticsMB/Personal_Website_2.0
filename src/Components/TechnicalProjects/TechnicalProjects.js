import './TechnicalProjects.css'

function TechnicalProjects(){
    const projects = [
        {
            title: "Personal Websites",
            details: ["2 Fully Published Websites", "Built From Scratch", "Responsive Mobile & Desktop Design"],
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
            title: "Robotics Club Codebase",
            details: ["Software Integration for 90lb robot", "5k+ Lines for Code Architecture/yr", "Code Base: 2022, 2023, 2024"
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
                        <div className="project-title-container">
                            <h3 className="project-title">{prj.title}</h3>
                        </div>
                        <div className="project-details-container">
                            <div className="project-tags">
                                {prj.details.map((detail, i) => (
                                    <span className="project-tag" key={i}>
                                        {detail}
                                    </span>
                                ))} 
                            </div>
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