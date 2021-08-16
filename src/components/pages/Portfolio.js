import React from 'react';
import CodeQuiz from "../../assets/CodeQuiz.png";
import GiftList from "../../assets/GiftList.png";
import MoodTracker from "../../assets/MoodTracker.png";
import TechBlog from "../../assets/TechBlog.png";
import WeatherDashboard from "../../assets/WeatherDashboard.png";
import WorkDayScheduler from "../../assets/WorkDayScheduler.png";

export default function Portfolio() {
  return (
    <div className='container'>
      <section id='work' className='text-center'>
      <h1 className='mb-1'>Recent Work</h1>
      <p>These are projects that I have completed recently.</p>
        <div className='row'>

          <div className='col-lg-4 col-md-6 p-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={GiftList} className='img-fluid' alt='Screenshot from Gift List App'/>
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

          <div className='col-lg-4 col-md-12 p-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={MoodTracker} className='img-fluid' alt='Screenshot from Mood Tracker App'/>
              </div>
            <div className='card-body'>
              <h5 className='card-title'>Mood Tracker</h5>
                <p className='card-text'>HTML | CSS | JS | jQuery | Bulma | API</p>
                <a href='https://cailinbellwold.github.io/Project-1-Mood-Tracker/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                <a href='https://github.com/CailinBellWold/Mood-Tracker' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 p-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={TechBlog} className='img-fluid' alt='Screenshot from Tech Blog App'/>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Tech Blog</h5>
                <p className='card-text'>
                  MySQL | Express | Sequelize
                </p>
                <a href='https://tech-blog-cailin.herokuapp.com/' target='_blank' rel='noreferrer noopener' className='btn btn-primary'>Deployed App</a>
                <a href='https://github.com/CailinBellWold/Tech-Blog' target='_blank' rel='noreferrer noopener' className='btn btn-secondary'>GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 p-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={CodeQuiz} className='img-fluid' alt='Screenshot from Code Quiz App'/>
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

          <div className='col-lg-4 col-md-6 p-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={WeatherDashboard} className='img-fluid' alt='Screenshot from Weather Dashboard App'/>
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

          <div className='col-lg-4 col-md-6 p-4'>
            <div className='card'>
              <div className='bg-image'>
                <img src={WorkDayScheduler} className='img-fluid' alt='Screenshot from Workday Scheduler App' />
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

        </div>
    </section>
    </div>
  );
}
