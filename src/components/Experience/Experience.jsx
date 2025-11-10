import React from 'react';
import './Experience.css';
import experience from '../../assets/experience.png';
import intern4 from '../../assets/lmg.png';

function Experience() {
  return (
    <>
    <div className="experience-container" id='experience'>
    <div className="experience-title" data-aos="zoom-in-up">
          <p className="experience-p1"> What Experience I Have</p>
          <p className="experience-p2"> My Experience</p>
        </div>
        <div className="experience-logo" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <img src={experience} alt="" />
        </div>

        <div className="experience-details "  >
            <p className='experience-p3'>24 hours hackathon</p>
            <p className='experience-p4'> Coding Ninja</p>
            {/* <p className='experience-p5'>sep-23 to oct-23</p> */}
            <img src={intern4} alt="" data-aos="zoom-in-up" />
        </div>

    </div>
      
    </>
  )
}

export default Experience
