import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { addToCategory, deleteCategory, getallcategory,getAvideo, updateCategory} from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';
import Videocard from './Videocard';


function Category() {

  const [show, setShow] = useState(false);

  const [categoryname,setcategoryname] = useState("")

  const [getcategory,setgetcategory] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//function to add category
const handleaddcategory = async()=>{
  console.log(categoryname);
  if(categoryname)
  {
    let body={
      categoryname,
      allvideos:[]
    }
    const response = await addToCategory(body)
    console.log(response);
    if(response.status>=200 && response.status<300)
    {
      toast.success('category added successfully')
      allcategory()
      setcategoryname("")
      handleClose()
    }
    else {
      toast.error('something went wrong')
    }
  }
  else{
    toast.warning('please fill category name')
  }
}
 

//function to get all categories

const allcategory = async()=>{
  const {data} = await getallcategory()
  setgetcategory(data)
  
}
console.log(getcategory);

//function for delete category

const removecategory = async(id)=>{
  await deleteCategory(id)
  allcategory()//to get the remaining category
}

//function to prevent reload

const dragover = (e)=>{
  e.preventDefault()
}

//function to drop card to category
const videodrop = async (e,categoryid)=>{

  console.log(`category id is ${categoryid}`);
  let videoID = e.dataTransfer.getData("videoID")
  console.log(`videoID is :${videoID}`);

  //api call to get video

  const {data}= await getAvideo(videoID)
  console.log(data);

  let selectedCategory = getcategory.find((item)=>item.id===categoryid)
  

  //get allvideos array key from object and push video to the array
  selectedCategory.allvideos.push(data)

  console.log(selectedCategory);
  await updateCategory(categoryid,selectedCategory)
  allcategory()
}


useEffect(()=>{
  allcategory()},[])

  return (
    <>
      <div className='d-grid md-3'>
          <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
      </div>

      {getcategory?.length>0?
       getcategory.map((item)=>(
        <div className='m-5 border border-secondary p-3 rounded'>
        <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videodrop(e,item?.id)}>
          <h6>{item.categoryname}</h6>
          <Button onClick={()=>removecategory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></Button>
        </div>
        
        <Row>
          <Col>
          {
            item?.allvideos.length>0?
            item?.allvideos.map((card)=>(<Videocard displayvideo={card} isPresent={true}/>))
            :<p>Nothing to Display</p>
          }
          </Col>
        </Row>


      </div>)):<p className='fw-bolder fs-5 text-danger m-3'>Nothing to Display</p>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category name</Form.Label>
            <Form.Control type="text"  placeholder="Enter Category name" onChange={(e)=>setcategoryname(e.target.value)} />
         </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleaddcategory}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Category