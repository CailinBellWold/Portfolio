import React from 'react';
import './NavTabs.css';
import { NavItem } from 'react-bootstrap';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar-nav mr-auto">
      <NavItem className="active">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </NavItem>
      <NavItem>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </NavItem>
      <NavItem>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </NavItem>
      <NavItem>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </NavItem>
    </ul>
  );
}

export default NavTabs;