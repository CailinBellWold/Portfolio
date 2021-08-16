import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './Header.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top px-3 cmb-navbar'>
        <a className='navbar-brand' href='/'>Cailin Bell Wold</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarToggler'>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <ul className='navbar-nav d-flex flex-row'>
              <li className='nav-item me-3 me-lg-0'>
                <a className='nav-link' href='https://www.linkedin.com/in/cailinbellwold/' target='_blank' rel='noreferrer noopener'>
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='nav-item me-3 me-lg-0'>
                <a className='nav-link' href='https://github.com/CailinBellWold' target='_blank' rel='noreferrer noopener'> 
                  <FaGithub />
                </a>
              </li>
              <li className='nav-item me-3 me-lg-0'>
                <a className='nav-link' href='mailto:cmbellwold@gmail.com?subject=Contact from Portfolio Site' target='_blank' rel='noreferrer noopener'>
                  <FaEnvelope />
                </a>
              </li>
            </ul>
        </div>
      </nav>
      <main>
        {renderPage()}
      </main>
    </header>
  );
}

export default Header;