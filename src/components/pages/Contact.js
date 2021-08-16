import React from 'react';
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  };
  
  return (
    <div className='container'>
      <section className='contact mb-5'>
        <h1 className='text-center'>Get In Touch</h1>
        <p className='text-center mx-auto'>I am available for employment, freelance projects or paid internships.</p>

        <div className='row'>
          <div className='col-md-9'>
            <Form id='contact-form'>

              <div className='row'>
                <Form.Group className='col-md-6 mt-3'>
                  <Form.Control type='text' id='name' placeholder='Your name' aria-label='Your name'/>
                </Form.Group>
                <Form.Group className='col-md-6 mt-3'>
                  <Form.Control type='email' id='email' placeholder='Your email' aria-label='Your email'/>
                </Form.Group>
              </div>

              <div className='row'>
                <Form.Group className='col-md-12 mt-3'>
                  <Form.Control type='text' id='subject' placeholder='Message subject' aria-label='Message subject'/>
                </Form.Group>
              </div>

              <div className='row'>
                <Form.Group className='col-md-12 mt-3'>
                  <Form.Control as='textarea' rows={5} id='message' placeholder='Your message' aria-label='Your message'/>
                </Form.Group>
              </div>

              <Button variant='primary' type='submit' onclick='validateForm()'>Send</Button>

            </Form>
          </div>

          <div className='col-md-3 mt-2 text-center'>
            <ul className='list-unstyled mb-0'>
              <li className='mb-3'><FaMapMarker />
                <p>Seattle, WA 98102, USA</p>
              </li>

              <li className='my-3'><FaPhone />
                <p>+ 01 206 660 6505</p>
              </li>

              <li className='my-3'><FaEnvelope />
                <p>cmbellwold@gmail.com</p>
              </li>
            </ul>
          </div>

        </div>

      </section>
    </div>
  );
}
