import React, { useEffect, useState } from 'react'
import { Link
 } from 'react-router-dom'
import { deleteHistory, getWatchHistory } from '../services/allAPI'
import { Button } from 'react-bootstrap'
function WatchHistory() {

  const [gethistory, setgethistory] = useState([])

const history = async()=>{
  const {data} = await getWatchHistory()
  setgethistory(data)
  
}

console.log(gethistory)

const removehistory = async(id)=>{
  const response = await deleteHistory(id)
  //to get the remaining history
  history()
  
}

useEffect(()=>{
  history()},[])

  


  return (
    <>
    <div className='container mt-4 d-flex justify-content-between '>
      
        <h3>Watch History</h3>
        <Link to={'/home'}><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home</Link>
    </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {gethistory.length>0?
          gethistory.map((item,index)=>(<tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td><a href={item.embeblink} target='_blank'>{item.embeblink}</a></td>
            <td>{item.timestamp}</td>
            <td><Button onClick={()=>removehistory(item?.id)}  className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></Button></td>
          </tr>))
          :<p> nothing to display</p>
            }
            
        </tbody>
      </table>
   
    </>
  )
}

export default WatchHistory