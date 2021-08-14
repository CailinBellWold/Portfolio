import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
  return (
    <div>
      <h1>Contact Placeholder Text</h1>
      <p>(206) 660-6505<br/>cmbellwold@gmail.com<br/></p>
      {/* <div>
    <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
  </div> */}
        <a className='cmb-fa px-4' href='https://www.linkedin.com/in/cailinbellwold/' target='_blank' rel='noreferrer noopener'>
          <i class='fab fa-linkedin-in'></i>
        </a>
        <a className='cmb-fa px-3' href='https://github.com/CailinBellWold' target='_blank' rel='noreferrer noopener'> 
          <i class='fab fa-github'></i>
        </a>
        <a className='cmb-fa px-3' href='mailto:cmbellwold@gmail.com?subject=Contact from Portfolio Site' target='_blank' rel='noreferrer noopener'>
          <i className='fas fa-envelope'></i>
        </a>
    </div>
  );
}
