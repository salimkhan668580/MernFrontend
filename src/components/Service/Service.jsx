import React from 'react'
import { TbTruckReturn } from "react-icons/tb";

import { TbTruckDelivery } from "react-icons/tb";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

function Service() {
  return (
       <div className="container">
        <div className="row my-5 justify-content-between text-center p-3 text-white  ">
            <div className="col-md-4  p-3  col-lg-2 bg-danger my-2   rounded">
            <TbTruckDelivery size={40}/>
            <p>FREE SHIPING</p>
            </div>
            <div className="col-md-4 p-3 col-lg-2 bg-danger my-2  rounded">
                <FaCartArrowDown size={40}/>
                <p>AUTHENTIC PRODUCT</p>
            </div>
            <div className="col-md-4 p-3 bg-danger col-lg-2 my-2 rounded">
                <MdOutlinePayment size={40}/>
               <p>SECURE PAYMENT</p> 
            </div>
            <div className="col-md-4  p-3 bg-danger col-lg-2 my-2  rounded">
                <TbTruckDelivery size={40}/>
                <p>EASY RETURN</p>
            </div>
        </div>
       </div>
  )
}

export default Service