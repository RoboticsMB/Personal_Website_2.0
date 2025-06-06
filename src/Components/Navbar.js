import React, {useState} from 'react'
import './Navbar.css';

function Navbar(){
    //state tracker for hamburger menu
    const[isOpen, setIsOpen] = useState(false);

    //switches states
    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    //set isOpen to false aka closed
    function closeMenu(){
        setIsOpen(false);
    }

  return (
      <nav className="navbar">
        <div className="navbar-container">
            <div>Matthew_Bandos_Site</div>

            {/*Hamburger Icon*/}
            <div className="hamburger" onClick={toggleMenu}>
                <span>{isOpen ? 'x' : '≡'}</span>
            </div>

            {/*Computer Navigation Links*/}
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#research/projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/*For Hamburger Menu Popup*/}
            {isOpen && (
                <div className="mobile-menu">
                    <ul>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                        <li><a href="#research/projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#education" onClick={closeMenu}>Education</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
      </nav>
  );
}

export default Navbar
