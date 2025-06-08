import './LandingPage.css';

function LandingPage(){
    return (
        <section id="landing-page" className="landing-page">
            <h1>Matthew Bandos</h1>
            <h2>Student • Software Engineer • Researcher • Creator</h2>
            <p>"Learning never exhausts the mind." - Leonardo da Vinci </p>
            <div className = "information-links">
                <a href="https://github.com/RoboticsMB" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/matthew-bandos-4646ab316" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="/Bandos%20M%20Resume%202025.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </section>
    )
}

export default LandingPage;