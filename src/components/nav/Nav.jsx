import React, { useState } from 'react';
import './nav.css';
import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import { RiContactsBookLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
        <HiOutlineHome />
      </a>
      <a href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <BsBook />
      </a>
      <a href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <RiContactsBookLine />
      </a>
    </nav>
  )
}

export default Nav