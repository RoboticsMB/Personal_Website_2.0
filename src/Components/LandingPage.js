import './LandingPage.css';
import { TypeAnimation } from 'react-type-animation';

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
                <a href="https://github.com/RoboticsMB" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/matthew-bandos-4646ab316" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="/Bandos%20M%20Resume%202025.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <a href="#about" className="scroll-arrow" aria-label="Scroll to About Me">↓</a>
        </section>
    )
}

export default LandingPage;