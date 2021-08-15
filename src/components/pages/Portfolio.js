import React from 'react';
import CodeQuiz from "../../assets/CodeQuiz.png";
import GiftList from "../../assets/GiftList.png";
import MoodTracker from "../../assets/MoodTracker.png";
import PasswordGenerator from "../../assets/PasswordGenerator.png";
import WeatherDashboard from "../../assets/WeatherDashboard.png";
import WorkDayScheduler from "../../assets/WorkDayScheduler.png";

export default function Portfolio() {
  return (
    <div class='container'>
<section id='work' className='text-center'>
      <h3 className='mb-5'><strong>Work</strong></h3>
        <div className='row'>

          <div className='col-lg-4 col-md-6 mb-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={GiftList} className='img-fluid' alt='Screenshot from Gift List App'/>
                <a href='#!'>
                </a>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Gift List</h5>
                <p className='card-text'>
                  NodeJS | MySQL | Sequelize | Express
                </p>
                <a href='https://project-2-gift-list.herokuapp.com/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                <a href='https://github.com/CailinBellWold/Project-2-Gift-List' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-12 mb-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={MoodTracker} className='img-fluid' alt='Screenshot from Mood Tracker App'/>
                <a href='#!'>
                </a>
              </div>
            <div className='card-body'>
              <h5 className='card-title'>Mood Tracker</h5>
                <p className='card-text'>HTML | CSS | JS | jQuery | Bulma | API</p>
                <a href='https://cailinbellwold.github.io/Mood-Tracker/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                <a href='https://github.com/CailinBellWold/Mood-Tracker' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
            </div>
          </div>
        </div>

          <div className='col-lg-4 col-md-6 mb-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={CodeQuiz} className='img-fluid' alt='Screenshot from Code Quiz App'/>
                <a href='#!'>
                </a>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Code Quiz</h5>
                <p className='card-text'>
                  HTML | CSS | JS | Bootstrap
                </p>
                <a href='https://cailinbellwold.github.io/Code-Quiz/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                <a href='https://github.com/CailinBellWold/Code-Quiz' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 mb-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={WeatherDashboard} className='img-fluid' alt='Screenshot from Weather Dashboard App'/>
                <a href='#!'>
                </a>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Weather Dashboard</h5>
                <p className='card-text'>
                  HTML | CSS | JS | Bootstrap | API
                </p>
                <a href='https://cailinbellwold.github.io/Weather-Dashboard/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                <a href='https://github.com/CailinBellWold/Weather-Dashboard' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 mb-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={WorkDayScheduler} className='img-fluid' alt='Screenshot from Workday Scheduler App' />
                <a href='#!'>
                </a>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Work Day Scheduler</h5>
                <p className='card-text'>
                  HTML | CSS | JS | Bootstrap | Moment
                </p>
                <a href='https://cailinbellwold.github.io/Work-Day-Scheduler/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                <a href='https://github.com/CailinBellWold/Work-Day-Scheduler' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={PasswordGenerator} className='img-fluid' alt='Screenshot from Password Generator App'/>
                <a href='#!'>
                </a>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Password Generator</h5>
                <p className='card-text'>
                  HTML | CSS | JS
                </p>
                <a href='https://cailinbellwold.github.io/Password-Generator/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                <a href='https://github.com/CailinBellWold/Password-Generator' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  );
}
