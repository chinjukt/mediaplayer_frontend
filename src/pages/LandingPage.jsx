import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni eius qui sit, quisquam, velit debitis, consectetur saepe eligendi harum laudantium illum non minus. Quam, qui quos? Suscipit, saepe sed.</p>
          
          <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-warning'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
        </Col>
      </Row>
      
      <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column'>
        <h3>Features</h3>
        <div className='cards d-flex justify-content-evenly align-items-center w-100'>
        
        <Card className='p-4' style={{ width: '22rem' }}>
          <Card.Img style={{width:'100%',height:'150px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif " />
          <Card.Body>
            <Card.Title>Managing Video</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> 
          </Card.Body>
        </Card>

        <Card className='p-4' style={{ width: '22rem' }}>
          <Card.Img style={{width:'100%',height:'150px'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif " />
          <Card.Body>
            <Card.Title>Categorized Video</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>

        <Card className='p-4' style={{ width: '22rem' }}>
          <Card.Img style={{width:'100%',height:'150px'}}  variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif " />
          <Card.Body>
            <Card.Title>Wtch History</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        </div>

      </div>

      <div className='container border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between'>
       <Row>
        <Col lg={5}>
          <h3 className='text-warning mb-5'>Simple fast and Powerful</h3>
          <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda officia voluptates repudiandae harum quaerat, dicta, omnis commodi, veritatis eligendi pariatur optio totam ratione expedita architecto accusamus. Reprehenderit, ipsum totam.</h6>
          
          <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda officia voluptates repudiandae harum quaerat, dicta, omnis commodi, veritatis eligendi pariatur optio totam ratione expedita architecto accusamus. Reprehenderit, ipsum totam.</h6>
          
          <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda officia voluptates repudiandae harum quaerat, dicta, omnis commodi, veritatis eligendi pariatur optio totam ratione expedita architecto accusamus. Reprehenderit, ipsum totam.</h6>
        </Col>
        <Col></Col>
        <Col lg={6}>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
       </Row> 

      </div>
    </>
  )
}

export default LandingPage