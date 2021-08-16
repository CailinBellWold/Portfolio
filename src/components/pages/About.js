import React from 'react';
import Headshot from "../../assets/Headshot-Square.jpg";

export default function About() {
  return (
    <div className='container'>
      <section id='about'>
        <div className='row'>
          <div className='col-md-3 gx-4 mb-4'>
            <figure className='figure-image'>
            <img src={Headshot} alt='Headshot of Cailin wearing a black shirt and looking at the camera.' className='img-fluid rounded-circle mb-3 cmb-headshot'/>
              <p className='about-contact ml-4'><span id='name'>Cailin Bell Wold</span><br/>Full Stack Web Developer<br/></p>
            </figure>
          </div>

          <div className='col-md-9  gx-5 mb-4'>
            <h1>Hello and Welcome!</h1>
              <p className='text-muted'>Let’s get to know each-other.</p>
              <p className='text-muted'>As a budding web-developer currently enrolled in the University of Washington’s Full Stack Boot Camp (MERN), I’m quickly building new competencies and will be seeking full-time employment starting in September of 2021.</p>
              <p className='text-muted'>With a background in nonprofit finance and administration and a passion for the arts, intersectional environmentalism, and tackling complex challenges, I have spent my career creating systems and order to support artists and others working in the humanity sector. </p>
              <p className='text-muted'>Coding allows me to be a more agile and versatile problem-solver, creating bridges between storytellers and audiences, problems and problem-solvers, and data and decision-makers. It opens doors and allows ideas to flourish and provides a more formally creative element in my professional toolkit.</p>

              {/* <h4>Proficiencies</h4>
                <ul className='text-muted'>
                  <li>Front-End: <em>Bootstrap, Bulma, CSS, Handlebars, HTML, JavaScript, jQuery, Moment.js, and React.js</em></li>
                  <li>Back-End: <em>Apollo Server, Express, Node.js, NPM, MySQL, and RESTful API</em></li>
                  <li>Version Control: <em>Git and GitHub</em></li>
                  <li>Other: <em>Apollo Client, GraphQL, Heroku, Insomnia, and Visual Studio</em></li>
                </ul> */}
            
              <h4>Do we share a future?</h4>
              <p className='text-muted'>
              I look forward to joining a team in a medium-to-large company that will push me to learn quickly, provide a pool of inspirational mentors, and allow me to gain valuable experience. In the meantime, adding to this portfolio page will keep you abreast of my growing skillsets.
              If you think we might work well together, please reach out! I look forward to hearing from you.
              </p>
          </div>
        </div>
      </section>
    </div>
  );
}
