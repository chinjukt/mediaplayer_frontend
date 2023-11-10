import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideos } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';

function Videocard({displayvideo ,setdeletevideostatus,isPresent}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)

    const {caption ,embeblink} = displayvideo
    const today = new Date()
    let timestamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)

    let videoDetails = {
      caption,embeblink,timestamp
    }

    const response = await addToHistory(videoDetails)


  };

  const removevideo = async(id)=>{
    const response = await deleteVideos(id)
    setdeletevideostatus(true)
  }


//function to drag a particular card
const dragstart = (e,id)=>{
  console.log(`card that dragged is :${id}`)
  //to transfer id from videocard to category
  e.dataTransfer.setData("videoID",id)
}

  
 
  return (
    <>
    <Card style={{ width: '100%',height:'380px',marginBottom:'10px' }} className='mb-4' draggable onDragStart={(e)=>dragstart(e,displayvideo?.id)}>
      <Card.Img onClick={handleShow} height={'280px'} variant= "top" src={displayvideo.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>{displayvideo.caption}</h6>
            {!isPresent ? <Button onClick={()=>removevideo(displayvideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></Button>:<Button onClick={()=>removevideo(displayvideo?.id)} className='btn btn-warning'><i class="fa-solid fa-trash-can"></i></Button>}
        </Card.Title> 
      </Card.Body>
    </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
          <Modal.Header closeButton>
          <Modal.Title>{displayvideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="240" src={`${displayvideo.embeblink}?autoplay=1`} title={displayvideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Videocard