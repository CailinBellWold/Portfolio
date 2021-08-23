import React from 'react';
import './NavTabs.css';
import { Nav } from 'react-bootstrap';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar-nav mr-auto">
      <Nav.Link className="active">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          ABOUT ME
        </a>
      </Nav.Link>
      <Nav.Link>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          PORTFOLIO
        </a>
      </Nav.Link>
      <Nav.Link>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          CONTACT
        </a>
      </Nav.Link>
      <Nav.Link>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          RESUME
        </a>
      </Nav.Link>
    </ul>
  );
}

export default NavTabs;