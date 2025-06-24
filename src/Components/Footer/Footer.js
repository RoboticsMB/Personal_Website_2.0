import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

function LandingPage(){
    return (
        <section id="footer" className="footer-section">
            <div className="footer-container">
                <div className="top-part">
                    <div className="descriptors">
                        <h2>Matthew Bandos</h2>
                        <p>Student</p>
                    </div>
                    <div className = "footer-links">
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
                </div>
            </div>
            <div className="bottom-part">
                <p>© 2025 Matthew Bandos. All rights reserved.</p>
            </div>
        </section>
    )
}
export default LandingPage;