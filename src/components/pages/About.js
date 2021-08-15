import React from 'react';
import Headshot from "../../assets/Headshot-Square.jpg";

export default function About() {
  return (
    <div>
      <h1>About Placeholder Text</h1>
      <div className='container'>
        <section id='about'>
          <div className='row'>
            <div className='col-md-3 gx-4 mb-4'>
              <figure className='figure-image'>
              <img src={Headshot} alt='Headshot of Cailin wearing a black shirt and looking at the camera.' className='img-fluid rounded-circle mb-3 cmb-headshot'/>
              <a href='#!'></a>
                <p className='about-contact ml-4'><span id='name'>Cailin Bell Wold</span><br/>Full Stack Web Developer<br/></p>
              </figure>
            </div>

          <div className='col-md-9  gx-5 mb-4'>
            <h3><strong>Hello and Welcome!</strong></h3>
              <p className='text-muted'>Let’s get to know each-other.</p>
              <p className='text-muted'>As a budding web-developer currently enrolled in the University of Washington’s Full Stack Boot Camp, I’m quickly building new competencies and will be seeking full-time employment starting in September of 2021.</p>
              <p className='text-muted'>With a background in nonprofit finance and administration and a passion for the arts, intersectional environmentalism, and tackling complex challenges, I have spent my career creating systems and order to support artists and others working in the humanity sector. </p>
              <p className='text-muted'>Coding allows me to be a more agile and versatile problem-solver, creating bridges between storytellers and audiences, problems and problem-solvers, and data and decision-makers. It opens doors and allows ideas to flourish and provides a more formally creative element in my professional toolkit.</p>

              <p><strong>Proficiencies</strong></p>
                <ul className='text-muted'>
                  <li>Front-End: <em>Bootstrap, Bulma, CSS, Handlebars, HTML, JavaScript, jQuery, and Moment.js</em></li>
                  <li>Back-End: <em>Express, Node.js, NPM, MySQL, and RESTful API</em></li>
                  <li>Version Control: <em>Git and GitHub</em></li>
                  <li>Other: <em>Heroku, Insomnia, and Visual Studio</em></li>
                </ul>
            
              <p><strong>Do we share a future?</strong></p>
              <p className='text-muted'>
              I look forward to joining a team in a medium-to-large company that will push me to learn quickly, provide a pool of inspirational mentors, and allow me to gain valuable experience. In the meantime, adding to this portfolio page will keep you abreast of my growing skillsets.
              If you think we might work well together, please reach out! I look forward to hearing from you. <span id='resume-text'>You can check out my resume here: </span><a className='resume' href='pdfs/CailinBellWoldResume.pdf' target='_blank' rel='noreferrer noopener'>
                <i className='fas fa-file'></i> Resume</a>
              </p>
            </div>
        </div>
      </section>
    </div>
    </div>
  );
}
