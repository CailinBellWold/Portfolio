import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './Header.css';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

function Header() {
  const [currentPage, setCurrentPage] = useState('About');

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
    <>
      <header>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light fixed-top px-5 py-4'>

            <a className='navbar-brand col-7' href='/'>cailín bell wold<br/><span>FULL STACK WEB DEVELOPER</span></a>

            <button className='navbar-toggler custom-toggler' id='hamburger' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>

            <NavbarCollapse className='navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2 flex-row-reverse' id='navbarSupportedContent'>
              <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </NavbarCollapse>
          </nav>

        </div>
      </header>

      <main>
        {renderPage()}
      </main>
    </>
  );
}

export default Header;