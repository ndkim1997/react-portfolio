import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/kimnick7/' target="_blank"><BsLinkedin /></a>
            <a href='https://github.com/ndkim1997' target="_blank"><FaGithub /></a>
            <a href='https://www.facebook.com/nicholas.kim.940' target="_blank"><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocials