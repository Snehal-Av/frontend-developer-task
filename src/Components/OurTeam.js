import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'

const OurTeam = () => {
  const [teams, setTeams] = useState([ ])

  let getTeams =async() => {
    const response =await fetch("http://localhost:3000/teams")
    setTeams(await response.json());
    console.log(response)
  }
  useEffect(() => {
    getTeams()
  }, [])
  return (
    <div>
      <Container>
      <Row>
        {
          teams.map((items) =>{
            return (
              
              <Col md={4} >
                <Card style={{
                width: "27rem",
                display: "flex",
                boxShadow: "0px 4px 61px rgba(0, 0, 0, 0.16)",
                border: "none",
                 padding:"20px"
          
              }}>
                  <Card.Img className='img1'  src={items.
// @ts-ignore
                  image} />
                  <Card.Body>
                    <Card.Title  className='title'>{items.
                      // @ts-ignore
                      name}</Card.Title>
                    <Card.Text className='content'>
                      {items.
                        // @ts-ignore
                        description}
                    </Card.Text >
                    <Button style={{ color: "black", backgroundColor: "gray" }}>lick Now</Button>
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

export default OurTeam