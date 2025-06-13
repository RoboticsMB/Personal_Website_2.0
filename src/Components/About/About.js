import './About.css';
function About(){
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <div className="about-container">
                <div className="about-image">
                    <img src="./Matthew_Bandos_Photo.jpg" alt="Matthew Bandos"/>
                </div>
                <div className="about-text">
                    <p>I am Matthew Bandos, a college student passionate about computer science and robotics. 
                        From a young age, I have been captivated by the ideas of automation and autonomous behavior, 
                        and such fascination drives my learning. 
                        I am constantly seeking opportunities to learn and expand my knowledge in the tech industry. 
                        And one day, I hope to leverage all my experiences to design grand
                        and novel solutions that will hopefully make the world a better place.
                    </p>
                    <p>Outside of the professional and academic worlds, I enjoy staying active. 
                        I am a big fan of racket sports, but never afraid to try out something new! 
                        I am also an avid chess player, skier, and big foodie! 
                        I never pass up the opportunity to explore new places and try new cuisines! 
                        Please feel free to contact me with any questions or further inquiries down below!
                    </p>
                </div>
            </div>
      </section>
    )
}

export default About;