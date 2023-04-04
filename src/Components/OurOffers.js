import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const OurOffers = () => {
  const [offers, setOffers] = useState([])

  let getOffers = async () => {
    const response = await fetch("http://localhost:3000/offers")
    setOffers(await response.json());
  }
  useEffect(() => {
    getOffers()
  }, [])
  return (
    <div>
      <Container>
        <div >
          <div className="flex-container">Our Offerings</div>
          <p className='para'>This whole purchase journey can be divided into three stages. For more details, Click Here</p>
        </div>
        <div className="flex-container">
          <button >1 Pre-Booking</button>
          <button>2 Post-Booking & Pre-Registration</button>
          <button>3 Post-Registration</button>
        </div>
        <Row>

          {
            offers.map((items) => {
              return (
                <Col md={4} >
                  <Card style={{
                width: "27rem",
                display: "flex",
                boxShadow: "0px 4px 61px rgba(0, 0, 0, 0.16)",
                border: "none",
                 padding:"20px"
          
              }}>
                    <Card.Img className='img1' src={items.
                      // @ts-ignore
                      image} />
                    <Card.Body>
                      <Card.Title className='title'>{items.
                        // @ts-ignore
                        title}</Card.Title>
                      <Card.Text className='content'>
                        {items.
                          // @ts-ignore
                          content}
                      </Card.Text>
                      <Button style={{ color: "black", backgroundColor: "gray" }}>Click Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )

            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default OurOffers