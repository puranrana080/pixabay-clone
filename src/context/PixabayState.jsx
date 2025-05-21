import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {
    const [imageData,setImageData]=useState([])
    const api_key="50423030-2b9d4b90d4e6d22e736af52fd"
useEffect(()=>{
    const fetchData=async()=>{
        const api=await fetch(`https://pixabay.com/api/?key=${api_key}&q=london+flowers&image_type=photo&per_page=100`)
        const data= await api.json()
        setImageData(data.hits)
        console.log(data)
    }
    fetchData()


},[])

  return (
    <PixabayContext.Provider value={{imageData}}>{props.children}</PixabayContext.Provider>
  )
}

export default PixabayState