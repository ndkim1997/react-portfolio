import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>kim.nick7@gmail.com</h5>
            <a href='mailto:kim.nick7@gmail.com' target="_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
          <BsLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>My personal LinkedIn</h5>
            <a href="https://www.linkedin.com/in/kimnick7/" target="_blank">Connect With Me on LinkedIn</a>
          </article>
        </div>

        <form action=''>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact