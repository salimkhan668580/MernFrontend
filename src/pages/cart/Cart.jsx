import React, { useEffect, useState } from "react";
import './Cart.scss'
import { Link } from "react-router-dom";
import CartNotFound from "../../components/cartNotFound/CartNotFound";
import Modal from "../../components/Modal/Modal";



function Cart({cart,incHandler,decHandler,handleRemove,getTotal ,userName}) {
  console.log(userName);
  return (
    <div className="container ">
      {!cart.length?<CartNotFound/>:
      <div className="row justify-content-evenly my-5 pt-5">
       

        {/* .         shoping quantaty.............. */}
        <div className="col-md-8">
          <div className="row  ">
            <div className="col-md-6 col-6">
              <h3>Shopping Cart</h3>
            </div>
            <div className="col-md-6 col-6 text-end ">
              <h3>{cart.length} Item</h3>
            </div>
            <hr />
          </div>

          <div className="row justify-content-evenly">
            <div className="col-md-4 col-4 ">
              <p>Product Details</p>
            </div>
            <div className="col-md-2 col-2 text-center">
              <p>Quentity</p>
            </div>
            <div className="col-md-2 col-2">
              <p>Price</p>
            </div>
            <div className="col-md-2 col-2">
              <p>Total</p>
            </div>
          </div>

      { cart.map((item)=>(
       <div className="row justify-content-evenly my-5" key={item.id}>
       {/* .......image and remove btn............ */}
       <div className="col-md-4 col-4">
        <div className="row  ">
         <div className="col-md-3 text-wrap img-product" >
         <img  src={item.thumbnail} />
         </div>
         <div className="col-md-9 ">
           <div className="row">
            <div className="col-12"> {item.title}</div>
           </div>
           <div className="row">
             <div className="col-12"><button className="btn p-0 m-0 text-danger " onClick={()=>handleRemove(item.id)}>Remove</button></div>
           </div>
         </div>
        </div>
       </div>
       {/* ................btn div......... */}incHandler
       <div className="col-md-2 col-2 text-center ">
         <div className="row  justify-content-evenly">
           <div className="col-md-3 col-1"><button className="btn border border-danger py-0 px-2" onClick={()=>incHandler(item.id)}> <i className="fa-solid fa-plus"></i></button></div>
           <div className="col-md-3 col-1"> <input type="text" className="text-center"  style={{width:"30px"}} value={item.quantity}  /></div>
           <div className="col-md-3 col-1 "><button className="btn border border-danger py-0 px-2" onClick={()=>decHandler(item.id)}>  <i className="fa-solid fa-minus"></i></button></div>
         </div>
        
       </div>
      <div className="col-md-2 col-2">{item.price}</div>
       <div className="col-md-2 col-2">{item.quantity*item.price}</div>
     </div>
      ))}

        </div>

        {/* shpoing bill*/}
       
        <div className="col-md-3  col-12 border order-summary">
          <div className="row">
            <div className="col-md-12">
              <h4>Order Summery</h4>
              <hr />
            </div>
          </div>
          <div className="row">
          <div className="col-md-6 col-6 text-start">
            <h5>{cart.length} item</h5>
          </div>
          <div className="col-md-6 col-6 text-center">
            <h5>Price</h5>
          </div>

          </div>
          {cart.map((item,index)=>(

           <div className="row text-wrap cartListing ">
            <div className="col-md-6">
              <ul>
               <li><b>{index+1}.</b>{item.title}</li>
              
              </ul>
             
             
            </div>
            <div className="col-md-5  text-start priceList" >
              <ul>
                <li >{item.price*item.quantity} Rs.</li>
              </ul>
            </div>
           </div>
          ))}
          <hr />
          <div className="row">
            <div className="col-md-6 col-6"><b>Total Price</b></div>
            <div className="col-md-6 col-6 text-center">{getTotal()}</div>
          </div>
          <div className="row payBtn mt-5 ">
            <div className="col-12 text-center">
            
              {userName?<Modal/>:<Link to="/login"><button className="btn btn-primary form-control">Login {userName}</button></Link> }
            
            </div>
          </div>
        </div>
     
      </div>
      }
    </div>
  );







}



export default Cart;
