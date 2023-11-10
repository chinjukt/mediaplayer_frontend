

//upload video

import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverURL"

export const uploadAllVideo = async(reqBody)=>{
    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}


//get all videops from json server

export const getAllVideos = async()=>{
  return await commonAPI('GET',`${serverUrl}/videos`,"")
}


//api for delete

export const deleteVideos = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/videos/${id}`,{})
  }


//api for add data to watch history

export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverUrl}/history`,videoDetails)
  }

//get watch history 

export const getWatchHistory = async()=>{
    return await commonAPI('GET',`${serverUrl}/history`,"")
  }


//delete watch history

export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/history/${id}`,{})
}


// api for add category


export const addToCategory = async(body)=>{
    return await commonAPI('POST',`${serverUrl}/category`,body)
  }



  
//api to get all category

export const getallcategory = async()=>{
    return await commonAPI('GET',`${serverUrl}/category`,"")
  }

  //delete watch history

export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/category/${id}`,{})
  }

//api to get video based on the id

  export const getAvideo = async(id)=>{
    return await commonAPI('GET',`${serverUrl}/videos/${id}`,"")
  }


//api to update category
export const updateCategory = async(id,body)=>{
    return await commonAPI('PUT',`${serverUrl}/category/${id}`,body)
}