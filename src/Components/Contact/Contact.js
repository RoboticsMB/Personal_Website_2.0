import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact(){
    const contacts = [
        {
            title: "Email",
            info: "mat.bandos@gmail.com",
            icon: faEnvelope
        },
        {
            title: "Phone",
            info: "Available Upon Request",
            icon: faPhone
        },
        {
            title: "Location",
            info: "United States",
            icon: faLocationDot
        },
        {
            title: "LinkedIn",
            info: "https://www.linkedin.com/in/matthew-bandos-4646ab316",
            icon: faLinkedin
        },
        {
            title: "Github",
            info: "https://github.com/RoboticsMB",
            icon: faGithub
        }
    ]


    return (
        <section id="contact" className="contact-section">
            <h2>Get in <span className="color-touch">Touch</span></h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    {contacts.map((cts, index) => (
                        <div className="contact-type" key={index}>
                            <h4 className="contact-title">
                                <FontAwesomeIcon icon={cts.icon} className="contact-icon" /> &nbsp; {cts.title}</h4>
                            <p className="contact-info">{cts.info}</p>
                        </div>
                    ))}
                </div>
                <div className="contact-form">
                    <h3>Send Me a Message</h3>
                    <form>
                        <p>Name</p>
                        <input type="text" required/>
                        <p>Email</p>
                        <input type="email" required/>
                        <p>Message</p>
                        <textarea required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
      </section>
    )
}

export default Contact;
