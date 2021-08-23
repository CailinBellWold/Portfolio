import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './Header.css';
import { Navbar, Container } from 'react-bootstrap';

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
          <Navbar expand='lg' bg='light' fixed='top' className='px-5 py-4'>
            <Container>
              <Navbar.Brand className='col-5' href='/'>cailín bell wold<br/><span>FULL STACK WEB DEVELOPER</span></Navbar.Brand>
              <Navbar.Toggle className='custom-toggler col-2' aria-controls='navbarCollapsableContent'/>
              <Navbar.Collapse className='flex-row-reverse' id='navbarCollapsableContent'>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </header>

      <main>
        {renderPage()}
      </main>
    </>
  );
}

export default Header;