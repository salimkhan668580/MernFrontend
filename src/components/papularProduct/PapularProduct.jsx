import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './papularProduct.scss'

function PapularProduct({addTOCart}) {
    let [papularData,setPapularData]=useState([]);

    useEffect(()=>{
  
        let papularDetails=async()=>{
         
          try{
         
              const productDetails=await axios("https://dummyjson.com/products");
            
              setPapularData(productDetails.data.products);
             
            
        }catch(error){

        console.log(error); 
      }
      
        }
        papularDetails()        
      },[])
    
  return (
 <div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12  papular-text col-md-12 text-center">
          <h1 >Papular Product</h1>
            </div>
        </div>
        <div className="row-cols-3 my-5 justify-content-evenly row ">
            
    {papularData.sort().slice(papularData.length-4).map((item,index)=>(
        <div className="card mt-3" style={{width: "24rem"}} key={item.id}>
  <img src={item.thumbnail} className="card-img-top" alt="image not found"/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className=""><b>Description:</b>{item.description}</p>
    <p className=""><b>Price:</b>{item.price}</p>
    <div className="row">
        <div className="col-md-6 col-6"> <span className="card-text"><b>rating:</b> &nbsp;{ Math.floor(item.rating)}</span></div>
        <div className="col-md-6 col-6"><button className='btn btn-primary' onClick={()=>addTOCart(item)}>Add to cart</button></div>
      </div>


   
  </div>
    </div>
))}
            
        </div>
    </div>

    
    
    
    
 </div>

  
  )
}

export default PapularProduct