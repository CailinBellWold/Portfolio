import React, { useState } from 'react';
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Contact() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [result, setResult] = useState('');
    const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <div className='container'>
      <section className='contact mb-5'>
        <h1 className='text-center'>get in touch</h1>
        <p className='text-center mx-auto'>I am available for employment, freelance projects or paid internships.</p>
        <hr/>

        <div className='row'>
          <div className='col-md-9'>
            <Form id='contact-form' onSubmit={handleSubmit(onSubmit)}>

            <div className='row'>
              <Form.Group className='col-md-6 mt-3'>
                <FloatingLabel controlId='floatingInput' label='Name'>
                  <Form.Control {...register('name', { required: true, maxLength: 33 })} placeholder='Name' />
                  {errors.name?.type === 'required' && `*Required`}
                </FloatingLabel>
              </Form.Group>
              <Form.Group className='col-md-6 mt-3'>
                <FloatingLabel controlId='floatingInput' label='Email'>
                  <Form.Control {...register('email')} placeholder='Email' />
                </FloatingLabel>
              </Form.Group>
            </div>

            <div className='row'>
              <Form.Group className='col-md-12 mt-3'>
                <FloatingLabel controlId='floatingInput' label='Subject'>
                  <Form.Control {...register('subject', { required: true, maxLength: 33 })} placeholder='Subject' />
                  {errors.subject?.type === 'required' && `*Required`}
                </FloatingLabel>
              </Form.Group>
            </div>

            <div className='row'>
              <Form.Group className='col-md-12 mt-3'>
                <FloatingLabel controlId='floatingInput' label='Message'>
                  <Form.Control as='textarea' style={{ height: '100px' }} {...register('message', { required: true, maxLength: 263 })}  placeholder='Message' />
                  {errors.message?.type === 'required' && `*Required`}
                </FloatingLabel>
              </Form.Group>
            </div>

                  <p>DEV NOTE: This app is not connected to a back-end server, so messages cannot be transmitted via this form.</p>
                     {/* <p>{result}</p> */}
              <Button variant='primary' type='submit'>Send</Button>
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
