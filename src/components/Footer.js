import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-light text-lg-start'>
      <section id='contact' className='text-center py-4 align-items-center cmb-contact'>
        <h4>Contact</h4>
          <a className='cmb-fa px-4' href='https://www.linkedin.com/in/cailinbellwold/' target='_blank' rel='noreferrer noopener'>
            <FaLinkedinIn />
          </a>
          <a className='cmb-fa px-3' href='https://github.com/CailinBellWold' target='_blank' rel='noreferrer noopener'> 
            <FaGithub />
          </a>
          <a className='cmb-fa px-3' href='mailto:cmbellwold@gmail.com?subject=Contact from Portfolio Site' target='_blank' rel='noreferrer noopener'>
            <FaEnvelope />
          </a>
      </section>

      <div className='text-center p-3 cmb-madeforyou'>
        <p>Made for YOU!<br/>©2021 Cailin M. Bell Wold</p>
      </div>
    </footer>
  );
}

export default Footer;
