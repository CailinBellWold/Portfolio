import React from 'react';
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className='container'>
      <section className='contact'>
        <h2 className='text-center'>Contact Me</h2>
        <p className='text-center mx-auto'>I would love to hear from you!</p>

        <div className='col-md-9'>
          <Form id='contact-form'>
            <div className='row'>
              <Form.Group className='col-md-6 mt-3'>
                <Form.Control type='text' placeholder='Your name' aria-label='Your name'/>
              </Form.Group>
              <Form.Group className='col-md-6 mt-3'>
                <Form.Control type='email' placeholder='Your email' aria-label='Your email'/>
              </Form.Group>
            </div>

            <div className='row'>
              <Form.Group className='col-md-12 mt-3'>
                <Form.Control type='text' placeholder='Subject' aria-label='Subject'/>
              </Form.Group>
            </div>

            <div className='row'>
              <Form.Group className='col-md-12 mt-3'>
                <Form.Control as='textarea' rows={5} placeholder='Your message' aria-label='Your message'/>
              </Form.Group>
            </div>

            <Button variant='primary' type='submit'>Send</Button>
            
          </Form>
        </div>

        <div className='col-md-3 text-center'>
          <ul className='list-unstyled mb-0'>
            <li><FaMapMarker />
              <p>Seattle, WA 98102, USA</p>
            </li>

            <li><FaPhone />
              <p>+ 01 206 660 6505</p>
            </li>

            <li><FaEnvelope />
              <p>cmbellwold@gmail.com</p>
            </li>
          </ul>
        </div>

      </section>
    </div>
  );
}
