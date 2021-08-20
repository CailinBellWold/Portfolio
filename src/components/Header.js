import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './Header.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

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
    <header>
      <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top px-5 py-4'>

        <a className='navbar-brand col-8' href='/'>cailín bell wold</a>

        <button class='navbar-toggler custom-toggler' id='hamburger' type='button' data--bs-toggle='collapse' data--bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
        </button>

        {/* <div className='mx-auto order-0'>
          <NavbarToggle className='custom-toggler' type='button' data-bs-toggle='collapse' data-bs-target='.dual-collapse2'>
            <span className='navbar-toggler-icon'></span>
          </NavbarToggle>
        </div> */}
        <NavbarCollapse className='navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2 flex-row-reverse'>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </NavbarCollapse>
      </nav>

      {/* TO DO: If I try to move Main outside of the header, I'm getting an error. Why? */}
      <main>
        {renderPage()}
      </main>

      </div>
    </header>
  );
}

export default Header;