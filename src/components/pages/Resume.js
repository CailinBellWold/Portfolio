import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import CV from "../../assets/CailinBellWoldResume.pdf";

export default function Resume() {
  return (
    <div className='container'>
      <section id='skills'>
        <h1 className='text-center mb-5'>Skills</h1>
        <Button className='resume' href={CV} target="_blank"><FaFileDownload /> Download CV</Button>
        <div className='row'>
          <div className='col-12'>

            <div className='row'>

              <div className='col-4'>
                <h2>Front-End</h2>
                <ul className='list-unstyled'>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>CSS</li>
                  <li>Handlebars</li>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Moment.js</li>
                  <li>React.js</li>
                </ul>
              </div>

              <div className='col-4'>
                <h2>Back-End</h2>
                <ul className='list-unstyled'>
                  <li>Apollo Server</li>
                  <li>Express</li>
                  <li>Node.js</li>
                  <li>NPM</li>
                  <li>MySQL</li>
                  <li>RESTful API</li>
                </ul>
              </div>

              <div className='col-4'>
                <h2>Version Control</h2>
                <ul className='list-unstyled'>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </div>

              <div className='col-4'>
                <h2>Other</h2>
                <ul className='list-unstyled'>
                  <li>Apollo Client</li>
                  <li>GraphQL</li>
                  <li>Heroku</li>
                  <li>Insomnia</li>
                  <li>Visual Studio</li>
                </ul>
              </div>

            </div>
            </div>    
        </div>
      </section>
    </div>
  );
}
