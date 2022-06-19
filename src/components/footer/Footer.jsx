import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>NICK KIM</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contacts</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/kimnick7/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/ndkim1997' target="_blank"><FaGithub /></a>
        <a href='https://www.facebook.com/nicholas.kim.940' target="_blank"><BsFacebook /></a>
      </div>
      
    </footer>
  )
}

export default Footer