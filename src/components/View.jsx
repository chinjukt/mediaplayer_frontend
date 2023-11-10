import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {

  const [allVideo, setAllVideo]= useState([])

  const getAllUploadVideos = async()=>{
    const response = await getAllVideos()
    // console.log(response);
    const {data} = response
    // console.log(data);
    setAllVideo(data)
  }

  const [deletevideostatus, setdeletevideostatus] = useState(false)
// console.log(allVideo);


  useEffect(()=>{
    getAllUploadVideos()
    setdeletevideostatus(false)
  },[uploadVideoStatus,deletevideostatus])
  return (
    <>
    <Row>
      { allVideo.length>0? 
       allVideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
            <Videocard displayvideo={video} setdeletevideostatus={setdeletevideostatus}/>
        </Col>))
        :
        <p>Nothing to display</p>
        }
    </Row>
    </>
  )
}

export default View