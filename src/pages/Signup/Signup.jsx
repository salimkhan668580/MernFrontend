import React, { useState } from 'react'


import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebaseAuth';
import toast from 'react-hot-toast';
function Signup() {
 const nevigate= useNavigate();
let data={username:"",email:"",password:""}
  const [inputData,setInputData]=useState(data);

  let inputHandler=(e)=>{

    setInputData({...inputData,[e.target.name]:e.target.value});
   

  }

  let submitHandler=(e)=>{
    e.preventDefault();
   

  }
  let submitbtn=(e)=>{
    e.preventDefault();


    if(!inputData.username||!inputData.email||!inputData.password){
      toast.error("All field is mandetry")
    }else{
      createUserWithEmailAndPassword(auth, inputData.email, inputData.password)
      .then(async(response) => {
       const user=response.user

       await updateProfile(user,{
        displayName:inputData.username
       });
       nevigate("/login")
      })
      .catch((error) => {
       
        toast.error(error.message);
        
      }); 
     
    }

  }

return (

<div className="container-fulid">
  <div className="row justify-content-center text-white py-5">
    <div className="col-md-6 py-5 rounded my-5 bg-dark">
      <h3 className="text-center">Signup Page</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3 px-5">
          <label className="form-label">
            UserName
          </label>
          <input type="text" className="form-control" name="username" value={inputData.username} onChange={inputHandler} id="exampleFormControlInput1" placeholder="User Name" />
        </div>
        <div className="mb-3 px-5">
          <label className="form-label">
            Email address
          </label>
          <input type="email" name="email" className="form-control" value={inputData.email} onChange={inputHandler} id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3 px-5">
          <label className="form-label">
            Password
          </label>
          <input type="password"  name="password" className="form-control"  value={inputData.password} onChange={inputHandler} id="exampleFormControlInput1" placeholder="password" />
        </div>
        <div className="mb-3 px-5">

          <input type="submit" className="form-control btn mt-3 btn-primary" onClick={submitbtn}/>
        </div>
        

      </form>
        <div className="mb-3 px-5">

          <Link to="/login">
          <p>You have account ?Login</p>
          </Link>
        </div>
     
    </div>
  </div>
</div>


)
}

export default Signup