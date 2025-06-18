import './Experience.css'

function Experience(){
    const experiences = [
        {
            title: "Software Engineer Intern",
            company: "Sierra Nevada Corporation",
            location: "Plano, Texas",
            date: "June 2025 - August 2025",
            summary: "Developed customer solutions as part of the MST Division. Worked with a team of engineers to design, implement, and test software components",
            responsibilites: [
                "Delivered several software products to foreign entities",
                "Wrote technical reports for software",
                "Assisted in high-level design of solutions",
                "Performed software intergration"
            ]
        },
        {
            title: "IT Technician",
            company: "University of Maryland Career Center",
            location: "College Park, Maryland",
            date: "September 2024 - Present",
            summary: "Supported technological operations of the career center. Worked with four other IT's to troubleshoot technical issues",
            responsibilites: [
                "Resolved software, hardware, and electronic issues",
                "Provided technical support to events on campus",
                "Oversaw deployment of check-in booths for career fairs",
                "Upgraded workstations and monitors inside the center"
            ]
        },
        {
            title: "Research Assistant",
            company: "University of Maryland Institute for Health Computing",
            location: "College Park, Maryland",
            date: "August 2024 - Present",
            summary: "Conducted research as part of the GPS-Health Group. Worked with doctors, researchers, and software engineers to design new analytical methods",
            responsibilites: [
                "Developed automated data scrapers to extract information",
                "Created data pipelines to process information",
                "Assisted in writing and revising research papers",
                "Assisted in high level design of analytical methods"
            ]
        },
        {
            title: "Game Design Apprentice",
            company: "Simcoach Games",
            location: "Pittsburgh, Pennsylvania",
            date: "August 2024 - Present",
            summary: "Developed a prototype of a transformational game. Lead three other interns in drafting, creating, and presenting the project",
            responsibilites: [
                "Created software implementation of game mechanics",
                "Oversaw and delegated workload among team members",
                "Wrote up technical report and presentation on project",
                "Communicated actions and received feedback from supervisor"
            ]
        },
                    {
            title: "Chess Instructor",
            company: "Gabriel Petesch Chess",
            location: "Pittsburgh, Pennsylvania",
            date: "August 2024 - Present",
            summary: "Instructed students on chess theory. Worked with supervisor (International Master) to oversee administrative duties",
            responsibilites: [
                "Taught chess concepts and tactics to students",
                "Adminstered and supported chess tournaments",
                "Assisted supervisor in administrative setup",
                "Supervised children throughout the day"
            ]
        }
    ];
    return (
        <section id="experience" className="experience-section">
            <h2>Work <span className="color-experience">Experience</span></h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"/>
                        <div className="timeline-content">
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <p>{exp.location} {exp.date}</p>
                            <p>{exp.summary}</p>
                            <h5>Key Responsibilites:</h5>
                            <ul>
                                {exp.responsibilites.map((res, idx) => (
                                    <li key={idx}>{res}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience;