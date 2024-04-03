import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
   <div className="container-fluid mt-5 ">
    <div className="row footer text-center">
      <div className="col-md-2 col-12  ">
        <h3 className='text-white'>Fasion <b className='text-danger'>Cart</b></h3>
        <span  className='fs-2 mx-2'><FaFacebook /></span>
         <span className='fs-2 mx-2'><FaInstagram /></span>
         <span className='fs-2 mx-2'><CiLinkedin/></span>
        </div>

      <div className="col-md-2 col-12">
        <h3 className='text-white'>Menu</h3>
       <ul>
       <li><a href="#">Features</a></li>
      <li><a href="#">Info Center</a></li>
      <li><a href="#">News Blog</a></li>
      <li><a href="#">Login</a></li>
       </ul>
      </div>
      <div className="col-md-2 col-12">
      <h3 className='text-white'>COMPANY</h3>
      <ul>
      <li><a href="#">About us</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Term & Condition</a></li>
      <li><a href="#">Login</a></li>

      </ul>
      </div>
      <div className="col-md-2 col-12">
      <h3 className='text-white'>CONTACT</h3>
      <ul>
      <li><a href="#">Contact Sales</a></li>
      <li><a href="#">+123467977</a></li>
      <li><a href="#">News Blog</a></li>
      <li><a href="#">+2546679763</a></li>
      </ul>
      
      </div>
      <div className="col-md-2 col-12">
      <h3 className='text-white'>TECH SUPPORT</h3>
      <ul >
        <li><a href="#">Contact Support</a></li>
          <li><a href="#">info Support</a></li>
          <li><a href="#">info Center</a></li>
          <li><a href="#">Activate</a></li>
      </ul>
      
      </div>
    </div>
    <div className="row bg-danger py-2 footer-icon">
      <div className="col-md-12">
       <div className="row">
        <div className="col-12 text-center">
          <span className='fs-6'>&copy; 2024 FashionShop 2024 |Developed By Salim Khan</span>
        </div>
       
       </div>
      </div>
    </div>
    </div>
    
    
  
  )
}

export default Footer