import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col className='d-flex justify-content-start'>
          <a className='cmb-fa m-2' href='https://www.linkedin.com/in/cailinbellwold/' target='_blank' rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a className='cmb-fa m-2' href='https://github.com/CailinBellWold/Tech-Blog' target='_blank' rel="noreferrer"> 
            <FaGithub />
          </a>
          <a className='cmb-fa m-2' href='mailto:cmbellwold@gmail.com?subject=Contact from Portfolio Site' target='_blank' rel="noreferrer">
            <FaEnvelope />
          </a>
          <p>© {year} Cailin Bell Wold</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
