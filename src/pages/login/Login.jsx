import React, { useState } from "react";

import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

import {  useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase/firebaseAuth';


function Login() {
  
  const HomeNevigate= useNavigate();
let data={email:"",password:""}
  const [inputData,setInputData]=useState(data);

  let inputHandler=(e)=>{

    setInputData({...inputData,[e.target.name]:e.target.value});
   

  }

  let submitHandler=(e)=>{
    e.preventDefault();
   

  }
  let submitbtn=(e)=>{
    e.preventDefault();


    if(!inputData.email||!inputData.password){
      toast.error("All field is mandetry")
    }else{
      signInWithEmailAndPassword(auth, inputData.email, inputData.password)
      .then((response) => {
        console.log(response);
        toast.success(`Login Successfully ${response.user.displayName}`);
       HomeNevigate("/")
      })
      .catch((error) => {
       
        toast.error(error.message);
        
      }); 
     
    }

  }
  return (
  
      <div className="container-fulid">
        <div className="row  flex text-cetner mt-5 justify-content-center  text-white py-5">
          <div className="col-md-6 py-5  rounded bg-dark">
            <h3 className="text-center text-white">Login Page</h3>
            <form onSubmit={submitHandler}>
       
            <div className="mb-3 px-5">
              <label  className="form-label">
                Email address
              </label>
              <input type="email" name="email" className="form-control" value={inputData.email} onChange={inputHandler} id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3 px-5">
              <label  className="form-label">
                Password
              </label>
              <input type="password"  name="password" className="form-control"  value={inputData.password} onChange={inputHandler} id="exampleFormControlInput1" placeholder="password" />
            </div>
            <div className="mb-3 px-5">
            
              <input type="submit" className="form-control btn mt-3 btn-primary" onClick={submitbtn}/>
            </div>
            <div className="mb-3 px-5">
            
             <Link to="/signUp"> <p>Don't have account ? Signup</p></Link>
            </div>

            </form>
          </div>
        </div>
      </div>
   
  );
}

export default Login;
