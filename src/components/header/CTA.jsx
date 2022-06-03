import React from 'react'
import CV from '../../assets/Kim, Nicholas Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
    <a href='{CV}' download>Download Resume</a>
    <a href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA