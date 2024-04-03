import React, { useEffect, useState } from 'react'
import {db} from '../../firebase/firebaseAuth'
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form"
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import {useNavigate } from 'react-router-dom'

import axios from "axios";
import toast from 'react-hot-toast';

function Modal() {
  const nevigateHome= useNavigate();
  let [formData,setFormData]=useState({});

      

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = async (data) => {
        setFormData(data);
        console.log("react for data",data);
      
      }
     
      const insertDataFire=async(data)=>{
      
        
        try{

          const docRef = await addDoc(collection(db, "OrderDetails"), {
           email: data.email ||"",
            phone: data.phone||"",
            pin:data.pin||"",
          address:data.address||""
          }).then(()=>{
            toast.success( `Your is placed successfully`);
            nevigateHome("/")

          })
        }catch(error){
         
          toast.error(error.message);
        }

      }
     
      const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment = useCallback(async() => {
  

    const order =await axios.post('http://localhost:3000/createOrder',{
        firstName: 'Fred',
        lastName: 'Flintstone'
    });
   

    const options= {
      key: "rzp_test_G3ejqcku7xIe3N",
      amount: "3000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://dummyimage.com/qvga",
      order_id: order.id,
      handler: (res) => {
        insertDataFire(formData);

      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  useEffect(() => {
    if (isLoaded) {
      handlePayment();
    }
  }, [isLoaded, handlePayment])






  
        

  return (
             
    <>
   
<button type="button" className="btn btn-primary form-control" data-bs-toggle="modal" data-bs-target="#exampleModal">
Pay now
</button>

<div className=" modal fade possition-absolute" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">Delivery Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-start">
      
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email"  className="form-control" placeholder="name@example.com" {...register("email", { required: true })}/>
        {errors.email && <span className='text-danger'>This field is required</span>}
        </div>
        <div className="mb-3">
        <label  className="form-label">Full Address</label>
        <input type="text"  className="form-control" placeholder="Address"  {...register("address",{ required: true })}/>
        {errors.address && <span className='text-danger'>This field is required</span>}
        </div>
        <div className="mb-3">
        <label  className="form-label">Pin code</label>
        <input type="number" className="form-control" placeholder="Pin"  {...register("pin",{ required: true })}/>
        {errors.pin && <span className='text-danger'>This field is required</span>}
        </div>
        <div className="mb-3">
        <label  className="form-label">Phone Number</label>
        <input type="number"  className="form-control" placeholder="eg: +91"  {...register("phone",{ required: "Phone is required",maxLength:{value:10,message:"max length is 10 "},minLength:{value:10,message:"min length is 10 "}})} />
        {errors.phone && <span className='text-danger' >{errors.phone.message}</span>}
       
        </div>

      <div className="modal-footer">
     
        <button   className=" form-control btn btn-primary"   onClick={handlePayment}>Pay Now</button>
      </div>
        </form>
   
      </div>
    </div>
  </div>
</div>
    </>
           

  )
}

export default Modal