import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add1({setuploadVideoStatus}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [videos,setvideos] = useState({
    id:"",
    caption:"",
    url:"",
    embeblink:""
  })
console.log(videos);

const embedvideolink = (e)=>{
  const {value}  = e.target
  console.log(value.slice(-11));
  const link = `https://www.youtube.com/embed/${value.slice(-11)}`
  setvideos({...videos, embeblink:link})
}


const handleupload = async()=>{
  const {id,caption,url,embeblink} = videos
  if(!id || !caption || !url || !embeblink)
  {
    toast.warning('please fill all the feild')
  }
  else{
    const response = await uploadAllVideo(videos)
    console.log(response);

    if(response.status>=200 && response.status<300)
    {
      setuploadVideoStatus(response.data)
      toast.success(`${response.data.caption} is uploaded successfully`)
      setvideos({
        id:"",
        caption:"",
        url:"",
        embeblink:""
      })
      handleClose()
    }
    else{
      console.log(response);
      toast.error('something went wrong. try again')
    }
  }
}

  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film text-warning "></i> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the form completely</p>
          
          <form action="" className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setvideos({...videos,id:e.target.value})} type="text" placeholder="Enter Video id" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setvideos({...videos,caption:e.target.value})}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" onChange={(e)=>setvideos({...videos,url:e.target.value})} placeholder="Enter Video Image Url" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={embedvideolink}/>
         </Form.Group>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleupload}>Upload</Button>
        </Modal.Footer>
    </Modal>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add1