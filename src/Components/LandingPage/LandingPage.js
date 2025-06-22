import './LandingPage.css';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

function LandingPage(){
    return (
        <section id="landing-page" className="landing-page">
            <h1>Matthew Bandos</h1>
            <h2>
                <TypeAnimation
                    sequence={[
                        'Student . . .',
                        2000,
                        '',
                        1000,
                        'Software Engineer . . .',
                        2000,
                        '',
                        1000,
                        'Researcher . . .',
                        2000,
                        '',
                        1000,
                        'Creator . . .',
                        2000,
                        '',
                        1000,
                    ]}
                    wrapper="h2"
                    speed={30}
                    deletionSpeed={30}
                    repeat={Infinity}
                />
            </h2>
            <p className="quote">"Learning never exhausts the mind." - Leonardo da Vinci </p>
            <div className = "information-links">
                <a href="https://github.com/RoboticsMB" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
                <a href="https://www.linkedin.com/in/matthew-bandos-4646ab316" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
                <a href="/bandos-m-resume-2025.pdf" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFileAlt} size="2x"/>
                </a>
            </div>
            <a href="#about" className="scroll-arrow" aria-label="Scroll to About Me">↓</a>
        </section>
    )
}

export default LandingPage;