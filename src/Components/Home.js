import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Container className='container'>
        <Row className='homepage'>
          <Col >
            <h3 className='text'>Making your <p style={{color:"yellow"}}>real estate</p> purchase journey faster and transparent</h3>
          </Col>
          <Col className='house'>
            <img src='img\Rectangle 5533.png' />
          </Col>
        </Row>
        <br/>
        <Row >
          <Col md={6} className='homepage2'>
            <img  src='img\weare.png' />
          </Col>
          <Col md={6} className='homepage2'>
            <h3>Who We Are</h3> 
          <p>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>
           <button>Contact Now</button>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Home