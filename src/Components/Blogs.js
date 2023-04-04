import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Blogs = () => {
  const [blogs, setBlogs] = useState([ ])

  let getBlogs = async () => {
    const response = await fetch("http://localhost:3000/blogs")
    setBlogs(await response.json());
  }
  useEffect(() => {
    getBlogs()
  }, [])
  return (
    <div>
      <Container>
       <Row>
        {
          blogs.map((items) => {
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
                        description}
                    </Card.Text>
                    <Button >Click Now</Button>
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

export default Blogs