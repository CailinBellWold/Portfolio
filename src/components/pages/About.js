import React from 'react';
import Headshot from "../../assets/Headshot-Square.jpg";

export default function About() {
  return (
    <div className='container'>
      <section id='about'>
        <div className='row'>
          <div className='col-sm-6 col-md-2 pr-3 mb-4'>
            <figure className='figure-image'>
            <img src={Headshot} alt='Headshot of Cailin wearing a black shirt and looking at the camera.' className='img-fluid mb-3 cmb-headshot'/>
            </figure>
          </div>
          <div className='col-sm-12 col-md-9 mr-2 mb-4'>
            <h1>hi, and welcome!</h1>
              <p>My name is Cailín and I'm a nonprofit finance and operations professional and web developer who will be graduating with a certificate from the University of Washington’s Full Stack Boot Camp (MERN) in September of 2021. I’m quickly building new competencies and seeking full-time employment. Additionally, I'm actively seeking projects or collaborations that allow me to gain experience and expand my professional network.</p>
              <p>With a background in nonprofit finance and administration and a passion for the arts, intersectional environmentalism, and tackling complex challenges, I have spent my career creating systems and order to support artists and others working in the humanity sector. </p>
              <p>Coding allows me to be a more agile and versatile problem-solver, creating bridges between storytellers and audiences, problems and problem-solvers, and data and decision-makers. It opens doors and allows ideas to flourish and provides a more formally creative element in my professional toolkit.</p>
              
              </div>
          </div>

          <div className='row'>
          <div className='cmb-neutralblock p-4 '>
              <h4>could we flourish together?</h4>
              <p>
              I look forward to joining a team in a medium-to-large company that will push me to learn quickly, provide a pool of inspirational mentors, and allow me to gain valuable experience. In the meantime, adding to this portfolio page will keep you abreast of my growing skillsets.
              If you think we might work well together, please reach out! I look forward to hearing from you.
              </p>
              </div>
              </div>
      </section>
    </div>
  );
}
