import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className='footer'>
                        <div className="list">
                            <div >
                                <ul>
                                    <li className='li' id='inre'>INRE</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li style={{fontSize:"28",listStyle:"none"}}>Company</li>
                                    <li className='li'><Link className='li' to="/">Home</Link></li>
                                    <li className='li'><Link className='li' to="/offer">Our Offerings</Link></li>
                                    <li className='li'><Link className='li' to="/team">Our Team</Link></li>
                                    <li className='li'><Link className='li' to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li style={{fontSize:"28",listStyle:"none"}}>UsefulLink</li>
                                    <li className='li'><Link className='li' to="/blogs">Blogs</Link></li>
                                    <li className='li'><Link className='li' to="/offer">Our Offerings</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li style={{fontSize:"28",listStyle:"none"}}>Email:support@inreglobal.com
                                    </li>
                                    <li className='li'>Phone:+91 | 7019305889</li>
                                </ul>
                            </div>

                        </div>
                        <div >
                            <Navbar className='header'>
                                <Container fluid >
                                    <Nav>
                                        <p id='foot'>Copyright 2023. Designed by INRE Global</p>
                                    </Nav>
                                    <Nav>
                                        <Link className='links' to="#">LinkedIn</Link>
                                        <Link className='links' to="#">Facebook</Link>
                                        <Link className='links' to="#">Twitter</Link>
                                        <Link className='links' to="#">Instagram</Link>
                                    </Nav>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
