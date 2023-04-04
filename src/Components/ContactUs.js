import React, { useState } from 'react'
import Footer from './Footer'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Container className='contact'>
        <div>
          <Row>
          <Col md={7} >
            <div  className='phone'>Get In Touch With Us To Connect</div>
            <p style={{
              fontSize:"18px",
              fontWeight:"600",
              fontFamily:"Open Sans"
            }}>Contact Us </p>
            <Form noValidate validated={
              // @ts-ignore
              validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="please enter your full name" />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="please enter your full name" />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="enter your phone number" />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Country</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Bangalore</option>
                    <option value="1">Pune</option>
                    <option value="2">Surat</option>
                    <option value="3">Mumbai</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Stages</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>I have booked but registration is not done</option>
                    <option value="1">I Have Booked</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Button type="submit">Submit</Button>
            </Form>
            
          </Col>
          <Col md={4}>
          <img style={{
            height:"401px",
            width:"447px",
            justifyContent:"center",
            margin:"43px"
          }} src='img/Happy announcement-pana.png'/>
          </Col>
          </Row>
        </div>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs