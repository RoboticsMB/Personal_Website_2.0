import React, { useState, useEffect } from 'react'
import './Navbar.css';

function Navbar(){
    //state tracker for hamburger menu
    const[isOpen, setIsOpen] = useState(false);
    const[scrolled, setScrolled] = useState(false);

    //switches states
    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    //set isOpen to false aka closed
    function closeMenu(){
        setIsOpen(false);
    }

    //Tracks Position of Navigation Bar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
            <div className="navbar-header">
                <p>Matthew Bandos</p>
            </div>

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
