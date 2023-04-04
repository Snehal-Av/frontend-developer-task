import React from 'react'
import { Button, Col, Container, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <Navbar className='navbar'>
                <Container fluid>
                    <NavbarBrand id='inre'>
                        INRE
                    </NavbarBrand>
                    <Nav>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/team">Our Team</Link>
                        <Link className='link'  to="/contact">Contact Us</Link>
                        <Link className='link'  to="/offer">Our Offerings</Link>
                        <Link className='link'  to="/blogs">Blogs</Link>
                    </Nav>
                    <Link to="/contact"><Button style={{backgroundColor:"#002550"}}>Register Now</Button></Link>
                    

                </Container>
            </Navbar>

        </div>
    )
}

export default Header