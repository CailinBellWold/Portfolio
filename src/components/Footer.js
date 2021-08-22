import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaStackOverflow } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer px-5'>
      <Row>
        <Col className='d-flex col-5 justify-content-start'>
        <p className='text-uppercase cmb-cr'>© {year} cailín bell wold</p>
          </Col>
          
          <Col className='d-flex col-7 justify-content-end'>
          <a className='cmb-fa m-2' href='https://www.linkedin.com/in/cailinbellwold/' target='_blank' rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a className='cmb-fa m-2' href='https://github.com/CailinBellWold/Portfolio-React/' target='_blank' rel="noreferrer"> 
            <FaGithub />
          </a>
          <a className='cmb-fa m-2' href='mailto:cmbellwold@gmail.com?subject=Contact from Portfolio Site' target='_blank' rel="noreferrer">
            <FaEnvelope />
          </a>
          <a className='cmb-fa m-2' href='https://stackoverflow.com/users/15320524/cailin-bell-wold' target='_blank' rel="noreferrer">
            <FaStackOverflow />
          </a>
          </Col>
        
      </Row>
    </Container>
  );
}

export default Footer;
