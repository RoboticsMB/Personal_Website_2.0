import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'


function Education(){
    const educations = [
        {
            degree: ["Bachelor of Science, Computer Science", "Bachelor of Science, Mathematics"],
            college: "University of Maryland Honors College - College Park",
            date: "2024 - 2028",
            summary: "Pursuing a double degree of comupter science, specializing in machine learning, and mathematics, specializing in statistics.",
            achievements: ["GPA: 3.96/4.0", "Presidents Scholar", "Dean's List: All Semesters", "National Merit Scholar"]
        },
        {
            degree: ["Online Specializations & Certifications"],
            college: "Various Platforms",
            date: "2020 - Present",
            summary: "Continously striving to gain more knowledge and expand my skillsets.",
            achievements: [ 
                "Intro to Computational Thinking and Data Science",
                "Object Detection and Localization of Medical Images", 
                "Intro to CS and Programming using Python",
                "Data Science R Basics"
            ]
        }
    ]
    return (
        <section id="education" className="education-section">
            <h2>Education</h2>
            <div className="education-container">
                {educations.map((edu, index) => (
                    <div className="education-item">
                        <div className="degree-titles">
                            {edu.degree.map((deg, idx) => (
                                    <h3>{deg}</h3>
                                ))}
                        </div>
                        <h4 className="college-name">{edu.college}</h4>
                        <p className="meta">
                            <FontAwesomeIcon icon={faCalendarDays} size=".5x"/> {edu.date}
                        </p>
                        <p className="education-summary">{edu.summary}</p>
                        <p className="achievements-label"> Achievements: </p>
                        <ul>
                            {edu.achievements.map((ach, idx) => (
                                <li key={idx}>{ach}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
      </section>
    )
}

export default Education;