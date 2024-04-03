import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {db} from '../../firebase/firebaseAuth'
import { collection, addDoc } from "firebase/firestore"; 
function Contact() { 
  let data={name:"",email:"",message:""}
  let [contactData,setContactData]=useState(data)

  let inputHandler=(e)=>{
    setContactData({...contactData,[e.target.name]:e.target.value});
  }

 let submitHandler=async(e)=>{
  e.preventDefault()
    if(!contactData.name||!contactData.email||!contactData.message){
      toast.error("All field is mandetry")
    }else{
    
      try{

        const docRef = await addDoc(collection(db, "userContact"), {
       name: contactData.name,
        email: contactData.email,
        message:contactData.message
        }).then(()=>{
          toast.success( `Our Team will connect you ${contactData.name} as soon as possible`);
          setContactData({
            name:"",
            email:"",
            message:""
          })
        })
      }catch(error){
        toast.error(error.message);
      }
     
     
    }

 }
return (
<div className="container-fluid">
  <div className="row  my-5 pt-5 justify-content-center">
    <div className="col-md-5 my-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.60371562676!2d80.77770084731566!3d26.84859648393558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710580172421!5m2!1sen!2sin" className='h-100 w-100 '
         style={{ border: "0" }} allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    <div className="col-md-5 border  rounded pt-5 text-white" style={{backgroundColor:"gray"}}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type="text"  name="name" className="form-control" value={contactData.name}  id="exampleFormControlInput1" placeholder="Your Name" onChange={inputHandler} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">email</label>
        <input type="email"  name="email" className="form-control" value={contactData.email} id="exampleFormControlInput1" placeholder="name@example.com" onChange={inputHandler} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Message</label>
        <textarea className="form-control" name='message' id="exampleFormControlInput1" value={contactData.message} placeholder="message" onChange={inputHandler} />
      </div>
      <div className="mb-3 mt-4 ">
        <button className="btn btn-primary form-control" onClick={submitHandler}>Submit</button>
      
      </div>
    </div>
  </div>
</div>
)
}

export default Contact