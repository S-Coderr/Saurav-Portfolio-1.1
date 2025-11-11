import React from 'react'
import './Footer.css'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer data-aos="zoom-in-up">
        <a href="#" className="footer__logo">Saurav Kumar</a>

        <ul className="links" data-aos="zoom-in-up">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certificate">Certificate</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__social" data-aos="zoom-in-up">
            <a href="http://www.linkedin.com/in/saurav-kumar85" target='_blank' ><BsLinkedin/></a>
            <a href="https://www.instagram.com/sauravsingh9372?igsh=a2R6ZHRpazIweW1y" target='_blank'><FaInstagram/></a>
            <a href="https://x.com/Sauravsingh9372?t=segdHd2m8e2q0kHTHtf-lA&s=08" target='_blank'><FaTwitter/></a>
        </div>
        <div className="footer__copy">
            <small>&copy; Made with ❤️ by Saurav Kumar. All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
