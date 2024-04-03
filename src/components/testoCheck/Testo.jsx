import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {  toast } from 'react-toastify';

function Testo() {
    let [count,setCount]=useState(0);

    useEffect(()=>{
        toast.success("btn click")
    },[count])

  return (
    <div>
       <h1 >{count}</h1>
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Click here</button>
    </div>
  )
}

export default Testo