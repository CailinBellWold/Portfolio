import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <h1>Contact Placeholder Text</h1>
      <p>(206) 660-6505<br/>cmbellwold@gmail.com<br/></p>

        <a className='cmb-fa px-4' href='https://www.linkedin.com/in/cailinbellwold/' target='_blank' rel='noreferrer noopener'>
          <FaLinkedinIn />
          <i class="bi bi-linkedin"></i>
        </a>
        <a className='cmb-fa px-3' href='https://github.com/CailinBellWold' target='_blank' rel='noreferrer noopener'> 
        <FaGithub />
          <i class="bi bi-github"></i>
        </a>
        <a className='cmb-fa px-3' href='mailto:cmbellwold@gmail.com?subject=Contact from Portfolio Site' target='_blank' rel='noreferrer noopener'>
        <FaEnvelope />
          <i class="bi bi-envelope-fill"></i>
        </a>
    </div>
  );
}
