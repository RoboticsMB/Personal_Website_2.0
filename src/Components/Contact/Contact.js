import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Swal from 'sweetalert2'

function Contact(){
    // const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        // setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f95647ed-44e8-4968-bc9b-fd15f721ad92");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
            });
        // setResult("Form Submitted Successfully");
        // event.target.reset();
        } else {
        console.log("Error", data);
        // setResult(data.message);
        }
    };

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
                    <form onSubmit={onSubmit}>
                        <p>Name</p>
                        <input type="text" name="name" required/>
                        <p>Email</p>
                        <input type="email" name="email" required/>
                        <p>Message</p>
                        <textarea name="message" required></textarea>
                        <button type="submit"><FontAwesomeIcon icon={faPaperPlane} />Send Message</button>
                    </form>
                    {/* <span>{result}</span> */}
                </div>
            </div>
      </section>
    )
}

export default Contact;
