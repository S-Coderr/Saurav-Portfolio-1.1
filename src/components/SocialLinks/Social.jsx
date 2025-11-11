import React from 'react';
import './Social.css';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { BsGithub, BsStackOverflow, BsInstagram } from 'react-icons/bs';
import resume from '../../assets/resume.pdf';

function Social() {
  return (
    <>
    <div className="social-container">
        

        <div className="social-cv">
        <a href={resume} download className="cv-btn" data-aos="fade-up-right"  data-aos-delay="100"    data-aos-duration="1200"> Download CV</a>
        <a href="#contact" className=" talk-btn" data-aos="fade-up-left"  data-aos-delay="100"    data-aos-duration="1200">Let's Talk</a>
        </div>
              
        <div className="social-links" data-aos="zoom-in">
          <a
            href="http://www.linkedin.com/in/saurav-kumar85"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/S-Coderr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100021816882920"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          
        </div>
    </div>
      
    </>
  )
}

export default Social
