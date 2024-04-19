import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
export default function Chats() {
    
    const fetchdata =async () =>{
      const response =  await axios.get('/api/data')
        console.log(response)
    
      } ;
      useEffect(()=>{
        fetchdata();
      },[])
  return (
    <div>
      Chats
    </div>
  )
}
