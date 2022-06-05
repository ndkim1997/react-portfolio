import React from 'react';
import './about.css';
import ME from '../../assets/coverPhoto.JPG';
import { MdOutlineSchool } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { BiLibrary } from 'react-icons/bi';

const About = () => {
  return (
    <section id="about">
      <h5>
        Get To Know
      </h5>
      <h2>About Me</h2>

      <div className='contatiner about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <MdOutlineSchool className='about_icon' />
              <h5>Education</h5>
              <small>B.S. in Computer Science</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Nihon Kohden Internship</small>
            </article>
            
            <article className='about_card'>
              <BiLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>100+ Assignments</small>
            </article>
          </div>

          <p>
            Hello my name is Nicholas Kim and I am a recent college graduate from Biola University where I studied Computer Science. Upon graduating, I have decided to specialize in Front-End Development and started to learn React and Node.JS as I continuaslly freshened up my knowledge of HTML/CSS. I am currently seeking employment as a Jr. in Front-End Development.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>

    </section>
  )
}

export default About